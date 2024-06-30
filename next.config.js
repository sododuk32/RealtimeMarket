// next.config.js
const dotenv = require('dotenv');

dotenv.config();
console.log('NEXT_PUBLIC_COINCAP_KEY:', process.env.NEXT_PUBLIC_COINCAP_KEY);

module.exports = {
  env: {
    NEXT_PUBLIC_COINCAP_KEY: process.env.NEXT_PUBLIC_COINCAP_KEY,
  },
};
