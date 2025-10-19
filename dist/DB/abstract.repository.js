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
exports.AbstractRepository = void 0;
class AbstractRepository {
    constructor(model) {
        this.model = model;
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            //doc=createdItem
            const createdItem = new this.model(item);
            return yield createdItem.save();
        });
    }
    exist(filter, projection, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOne(filter, projection, options);
        });
    }
    getOne(filter, projection, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOne(filter, projection, options);
        });
    }
    update(filter, update, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.updateOne(filter, update, options);
        });
    }
    delete(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.deleteOne(filter);
        });
    }
}
exports.AbstractRepository = AbstractRepository;
