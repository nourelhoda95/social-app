"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../../utiliti/error");
const user_repository_1 = require("../../DB/model/user/user.repository");
const factory_1 = require("./factory");
class AuthService {
    constructor() {
        // private dbPostService= new DBService<IUser>(User);
        this.userRepository = new user_repository_1.UserRepository();
        this.authFactoryService = new factory_1.AuthFactoryService();
        this.register = this.register.bind(this);
    }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const registerDTO = req.body;
            const userExist = yield this.userRepository.exist({ email: registerDTO.email, });
            if (userExist) {
                throw new error_1.ConflictException("user already exist");
            }
            const user = this.authFactoryService.register(registerDTO);
            const createdUser = yield this.userRepository.create(user);
            // await this.userRepository.getAllUsers();
            // // this.dbPostService.getAllUsers();
            // const user = new User(registerDTO);
            // const createdUser = await user.save();
            return res.status(201).json({
                message: "user created successfully",
                success: true,
                data: createdUser
            });
        });
    }
}
exports.default = new AuthService();
