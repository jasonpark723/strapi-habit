'use strict';

/**
 * habit-frequency service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::habit-frequency.habit-frequency');
