const Joi = require('@hapi/joi');

const schema = Joi.object({
  id: Joi.number(),
  tittle: Joi.number(),
  body: Joi.number(),
});

module.exports = { schema };
