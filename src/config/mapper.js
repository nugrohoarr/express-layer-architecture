import { createMapper } from '@automapper/core';
import { classes } from '@automapper/classes';
import { initializeProductProfile } from '../profiles/product.profile.js';

const mapper = createMapper({
    strategyInitializer: classes(),
});

initializeProductProfile(mapper);

export default mapper;
