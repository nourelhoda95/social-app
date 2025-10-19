import { GENDER } from "../../utiliti/common/enum";

export interface RegisterDTO {
  
fullName?: string;
email: string;
password: string;
phoneNumber?: string;
gender:GENDER;

}
export interface UpdateUserDTO extends Partial <RegisterDTO>  {

}