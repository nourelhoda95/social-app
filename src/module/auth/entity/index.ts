import { GENDER , SYS_ROLE , USER_AGENT } from "../../../utiliti/common/enum";

export class User{

public fullName!: string;
public email!: string;
public password!: string;
public credentialUpdateAt!:Date;
public phoneNumber!: string;
public role!:SYS_ROLE;
public gender!:GENDER;
public userAgent!:USER_AGENT;
public otp!:string;
public otpExpiryAt!:Date;
}