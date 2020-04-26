const mongoose = require('mongoose');
const joigoose = require('joigoose')(mongoose);
const joi = require('@hapi/joi');

const joiMarketSchema = joi.object({
  name: joi.string().required(),
  city: joi.string().required(),
  description: joi
    .object()
    .length(2)
    .keys({
      short: joi
        .string()
        .max(30)
        .allow('')
        .default('')
        .required(),
      long: joi
        .string()
        .max(500)
        .allow('')
        .default('')
        .required()
    })
    .required(),
  pictures: joi
    .array()
    .items(
      joi
        .string()
        .allow('')
        .default('')
        .required()
    )
    .required(),
  rating: joi
    .object()
    .length(2)
    .keys({
      stars: joi
        .number()
        .allow(null)
        .min(1)
        .max(5)
        .default(null)
        .required(),
      amount: joi
        .number()
        .allow(null)
        .min(0)
        .default(null)
        .required()
    })
    .required(),
  place: joi.string().required(),
  schedule: joi
    .array()
    .length(7)
    .items(
      joi.object().keys({
        open: joi.bool().required(),
        times: joi
          .array()
          .length(2)
          .items(
            joi
              .string()
              .allow(null)
              .default(null)
              .required()
          )
      })
    )
    .required(),
  category: joi
    .string()
    .valid('Tous produits', 'Produits alimentaires', 'Produits non alimentaires')
    .required(),
  merchants: joi
    .number()
    .min(1)
    .default(1)
    .required(),
  coords: joi
    .array()
    .length(2)
    .items(joi.number().required())
    .required(),
  state: joi.string().valid('WILL_OPEN', 'OPEN', 'CLOSED', 'WILL_CLOSE')
});

const marketSchema = new mongoose.Schema(joigoose.convert(joiMarketSchema), {
  timestamps: true
});
const Market = mongoose.model('Market', marketSchema);

module.exports = {
  joiMarketSchema,
  Market
};
