import User from "../models/user.model.js";
import Listing from "../models/listing.model.js";
import errorHandler from "../utils/errorHandler.js";
import bcrypt from "bcryptjs";

export const updateUserController = async (req, res, next) => {
  const { username, email, profileImage } = req.body;
  if (req.user.id !== req.params.id) {
    return next(errorHandler(403, "You can only update your own account"));
  }
  const updateFields = { username, email, profileImage };
  try {
    if (req.body.password) {
      const genSalt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, genSalt);
      updateFields.password = req.body.password; // Update password if provided
    }
    const updateUser = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updateFields },
      { new: true }
    );
    await updateUser.save();
    const { password: _, ...userDetails } = updateUser._doc;
    return res.status(200).json({
      message: "User updated successfully",
      success: true,
      user: userDetails,
    });
  } catch (error) {
    return next(errorHandler(500, error.message));
  }
};

export const deleteUserController = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(403, "You can only delete your own account"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
export const listingUserController = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(403, "You can only view your own listings"));
  }
  try {
    const userListings = await Listing.find({ userRef: req.params.id });
    res.status(200).json({
      userListings,
    });
  } catch (error) {
    return next(errorHandler(500, error.message));
  }
};
export const getContactController = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    const { password: _, ...userDetails } = user._doc;
    return res.status(200).json({
      user: userDetails,
    });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
