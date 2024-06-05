const e = require("express");
const  { Schema, model } = require("mongoose");
 const DOCUMENT_NAME = "User";
 const COLLECTION_NAME = "users";

const schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 200,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      select: false,
    },
    password: {
      type: String,
      select: false,
    },
    dob: {
      type: Date,
    },
   
  },
  { timestamps: true }
);

schema.index({ _id: 1, status: 1 });
schema.index({ email: 1 });
schema.index({ status: 1 });

module.exports = model(DOCUMENT_NAME, schema, COLLECTION_NAME);
