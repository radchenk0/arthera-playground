import * as dotenv from 'dotenv';
dotenv.config();

const CONFIG = {
  SUBSCRIBERS_CONTRACT_ADDRESS: process.env.SUBSCRIBERS_CONTRACT_ADDRESS,
  PUREFI_CONTRACT_ADDRESS: process.env.PUREFI_CONTRACT_ADDRESS,
  OWNER_PRIVATE_KEY: process.env.OWNER_PRIVATE_KEY,
  ADDRESS_TO_PLAY_WITH: process.env.ADDRESS_TO_PLAY_WITH,
};

export { CONFIG };
