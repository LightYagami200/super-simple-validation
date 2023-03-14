"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexColor = exports.isPhone = exports.isEmail = void 0;
// Exports
var is_email_1 = require("./utils/is-email");
Object.defineProperty(exports, "isEmail", { enumerable: true, get: function () { return __importDefault(is_email_1).default; } });
var is_phone_1 = require("./utils/is-phone");
Object.defineProperty(exports, "isPhone", { enumerable: true, get: function () { return __importDefault(is_phone_1).default; } });
var is_hex_color_1 = require("./utils/is-hex-color");
Object.defineProperty(exports, "isHexColor", { enumerable: true, get: function () { return __importDefault(is_hex_color_1).default; } });
