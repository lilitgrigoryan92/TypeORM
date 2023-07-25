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
const data_source_1 = require("./data-source");
const User_1 = require("./entity/User");
data_source_1.AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User_1.User();
    user.firstName = "Betty";
    user.lastName = "Smith";
    user.age = 3;
    yield data_source_1.AppDataSource.manager.save(user);
    console.log("Saved " + user.id);
    const users = yield data_source_1.AppDataSource.manager.find(User_1.User);
    console.log(users);
})).catch(error => console.log(error));
