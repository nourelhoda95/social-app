import { SYS_ROLE, GENDER, USER_AGENT } from "../enum";

export interface IUser {
  firstName: string;
  lastName: string;
  fullName?: string;
  email: string;
  password: string;
  credentialUpdateAt: Date
phoneNumber?: string;
role:SYS_ROLE;
gender:GENDER;
userAgent:USER_AGENT;
otp?:string;
otpExpireAt?:Date;

}