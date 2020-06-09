import * as Joi from '@hapi/joi';

export const UserRequestSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
