let Joi = require("@hapi/joi");

let schema = Joi.object({
  id: Joi.number(),
  tittle: Joi.number(),
  body: Joi.number()
});

module.exports = { schema };
