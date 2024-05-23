"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesService = void 0;
const common_1 = require("@nestjs/common");
const favorites_repository_1 = require("./repositories/favorites.repository");
const NotFoundError_1 = require("../common/errors/types/NotFoundError");
let FavoritesService = class FavoritesService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createFavoriteDto) {
        return this.repository.create(createFavoriteDto);
    }
    async listByUserEmail(userEmail) {
        const favorites = await this.repository.listByUserEmail(userEmail);
        if (!favorites) {
            throw new NotFoundError_1.NotFoundError('User has no favorites');
        }
        return favorites;
    }
    async findOne(id) {
        const favorite = await this.repository.findOne(id);
        if (!favorite) {
            throw new NotFoundError_1.NotFoundError('Favorite not found');
        }
        return favorite;
    }
    async remove(id) {
        const favorite = await this.repository.findOne(id);
        if (!favorite) {
            throw new NotFoundError_1.NotFoundError('Favorite not found');
        }
        return this.repository.remove(id);
    }
};
exports.FavoritesService = FavoritesService;
exports.FavoritesService = FavoritesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [favorites_repository_1.FavoritesRepository])
], FavoritesService);
//# sourceMappingURL=favorites.service.js.map