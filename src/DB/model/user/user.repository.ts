import { AbstractRepository } from "../../abstract.repository";
import { IUser } from "../../../utiliti/common/interface";
import { User } from "./user.model";
import { FilterQuery } from "mongoose";
export class UserRepository extends AbstractRepository<IUser>{
    constructor(){
        super(User)
    }
    async getSpecificUser(filter:FilterQuery<IUser>){
        return await this.getOne(filter);
    }
}