import { createMap, forMember, mapFrom } from '@automapper/core';
import { ProductDTO } from '../dto/product.dto.js';
import Product from '../models/product.model.js';

export function initializeProductProfile(mapper) {
    createMap(
        mapper,
        ProductDTO,
        Product,
        forMember(
            (destination) => destination.title,
            mapFrom((source) => source.title)
        ),
        forMember(
            (destination) => destination.price,
            mapFrom((source) => source.price)
        ),
        forMember(
            (destination) => destination.description,
            mapFrom((source) => source.description)
        ),
        forMember(
            (destination) => destination.image,
            mapFrom((source) => source.image)
        ),
        forMember(
            (destination) => destination.category,
            mapFrom((source) => source.category)
        )
    );
}
