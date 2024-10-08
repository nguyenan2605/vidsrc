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
exports.getBaseUrl = void 0;
const getBaseUrl = (providerValue) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let baseUrl = '';
        const baseUrlRes = yield fetch('https://himanshu8443.github.io/providers/modflix.json');
        const baseUrlData = yield baseUrlRes.json();
        baseUrl = baseUrlData[providerValue].url;
        return baseUrl;
    }
    catch (error) {
        console.error(`Error fetching baseUrl: ${providerValue}`, error);
        return '';
    }
});
exports.getBaseUrl = getBaseUrl;
