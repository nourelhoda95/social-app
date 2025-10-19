import { Schema } from "mongoose";
import { IUser } from "../../../utiliti/common/interface";
import { GENDER, SYS_ROLE, USER_AGENT } from "../../../utiliti/common/enum";

export const userSchema = new Schema <IUser> ({
  firstName: { type: String, minlength: 2,maxlength: 20,required: true ,trim: true },
  lastName: { type: String, minlength: 2,maxlength: 20,required: true ,trim: true },
  email: { type: String, required: true, unique: true ,lowercase: true ,trim: true  },
  password: { type: String, required: function (){
    if(this.userAgent === USER_AGENT.google){
      return false;
    }
    return true;
  }},
  credentialUpdateAt: { type: Date, default: Date.now },
  phoneNumber: { type: String },

  role: { type: String, enum: SYS_ROLE, default: SYS_ROLE.user },

  gender: { type: String, enum: GENDER, default: GENDER.male },
  userAgent: { type: String, enum: USER_AGENT , default: USER_AGENT.local },
  otp: { type: String },
  otpExpireAt: { type: Date },


},{ timestamps: true ,toJSON:{
  virtuals:true,
},toObject:{
  virtuals:true,
}});


userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
})
.set(function (value : string) {
  this.firstName = value.split(" ")[0];
  this.lastName = value.split(" ")[1];
});