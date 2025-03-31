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
const function1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success!");
        }, 2000);
    });
};
function1().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
const function2 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield function1();
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }
});
const x = function1();
const y = function2();
