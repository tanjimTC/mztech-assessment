const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { string } = require("joi");

// Create a schema

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
  },
  password: {
    type: String,
  },
});

userSchema.methods.isValidPassword = async function (
  candidatePassword,
  hashedPassword
) {
  try {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  } catch (error) {
    throw new Error(error);
  }
};

// Create a model

const User = mongoose.model("user", userSchema);

// Export the model

module.exports = User;
