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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_model_1 = __importDefault(require("../models/token-model"));
class TokenService {
    generateToken(id) {
        const accessToken = jsonwebtoken_1.default.sign(id, "9FmLYfj8NxHtjDLkLkMGFefj9U96zbRGPYza4vJVYwPBns5H9e", { expiresIn: "15m" });
        const refreshToken = jsonwebtoken_1.default.sign(id, "JEw9cEyegWxNwPTQdhRmPVT2CB9hX7H3qMEJjx3b5YQKRheJCf", { expiresIn: "10d" });
        return {
            accessToken,
            refreshToken
        };
    }
    validateAccessToken(token) {
        const id = jsonwebtoken_1.default.verify(token, "9FmLYfj8NxHtjDLkLkMGFefj9U96zbRGPYza4vJVYwPBns5H9e");
        return id;
    }
    validateRefreshToken(token) {
        const userData = jsonwebtoken_1.default.verify(token, "JEw9cEyegWxNwPTQdhRmPVT2CB9hX7H3qMEJjx3b5YQKRheJCf");
        return userData;
    }
    saveToken(userId, refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield token_model_1.default.findOne({ user: userId });
            if (tokenData) {
                tokenData.refreshToken = refreshToken;
                return tokenData.save();
            }
            const token = yield token_model_1.default.create({ user: userId, refreshToken });
            return token;
        });
    }
    removeToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield token_model_1.default.deleteOne({ refreshToken });
            return tokenData;
        });
    }
}
exports.default = new TokenService();
