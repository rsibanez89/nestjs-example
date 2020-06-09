import * as Joi from '@hapi/joi';
import * as dotenv from 'dotenv';

// Read .env file
dotenv.config();

// Validate .env file
const configSchema = Joi.object({
  PORT: Joi.number().default(3000)
}).unknown().required();

const { error, value } = configSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// Export configs
const config = {
  port: value.PORT
};
export default config;