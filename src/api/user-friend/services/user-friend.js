'use strict';

/**
 * user-friend service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-friend.user-friend');
