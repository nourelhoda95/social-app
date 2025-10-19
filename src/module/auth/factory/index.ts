import { SYS_ROLE, USER_AGENT } from "../../../utiliti/common/enum";
import { RegisterDTO } from "../auth.dto";
import { User } from "../entity";
import { generateExpiryDate, generateOTP } from "../../../utiliti/OTP";
import { generateHash } from "../../../utiliti/hash";

export class AuthFactoryService{
  register(registerDTO: RegisterDTO){
    const user = new User();
    user.fullName= registerDTO.fullName as string;
      user.email= registerDTO.email;
    user.password= generateHash(registerDTO.password);
     user.phoneNumber= registerDTO.phoneNumber as string;
    user.otp= generateOTP();
    user.otpExpiryAt = generateExpiryDate(5 * 60 * 60 * 1000) as unknown as Date;
        user.credentialUpdateAt= Date.now() as unknown as Date;
        user.gender= registerDTO.gender;
        user.role= SYS_ROLE.user;
        user.userAgent = USER_AGENT.local;
        return user;

  }
}