import type { NextFunction , Request , Response } from "express";
import { RegisterDTO } from "./auth.dto";
import {User} from "../../DB/model/user/user.model";
import { ConflictException } from "../../utiliti/error";
import { AbstractRepository } from "../../DB/abstract.repository";
import { IUser } from "../../utiliti/common/interface";
import { UserRepository } from "../../DB/model/user/user.repository";
import { AuthFactoryService } from "./factory";
class AuthService {

  // private dbPostService= new DBService<IUser>(User);
  private userRepository = new UserRepository();
private authFactoryService = new AuthFactoryService();
  constructor() {
    this.register = this.register.bind(this);
  }

  async register(req: Request , res: Response , next: NextFunction) {

const registerDTO:RegisterDTO = req.body;

const userExist = await this.userRepository.exist({email: registerDTO.email,});
if(userExist){
  throw new ConflictException ("user already exist");
  }
const user =  this.authFactoryService.register(registerDTO);
  
const createdUser =  await this.userRepository.create(user)
// await this.userRepository.getAllUsers();
// // this.dbPostService.getAllUsers();

// const user = new User(registerDTO);
// const createdUser = await user.save();
return res.status(201).json({
  message:"user created successfully",
  success:true,
  data:createdUser
}); 
  
}
}
export default new AuthService();



