"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFactoryService = void 0;
const enum_1 = require("../../../utiliti/common/enum");
const entity_1 = require("../entity");
const OTP_1 = require("../../../utiliti/OTP");
const hash_1 = require("../../../utiliti/hash");
class AuthFactoryService {
    register(registerDTO) {
        const user = new entity_1.User();
        user.fullName = registerDTO.fullName;
        user.email = registerDTO.email;
        user.password = (0, hash_1.generateHash)(registerDTO.password);
        user.phoneNumber = registerDTO.phoneNumber;
        user.otp = (0, OTP_1.generateOTP)();
        user.otpExpiryAt = (0, OTP_1.generateExpiryDate)(5 * 60 * 60 * 1000);
        user.credentialUpdateAt = Date.now();
        user.gender = registerDTO.gender;
        user.role = enum_1.SYS_ROLE.user;
        user.userAgent = enum_1.USER_AGENT.local;
        return user;
    }
}
exports.AuthFactoryService = AuthFactoryService;
