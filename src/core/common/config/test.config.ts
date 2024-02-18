import { registerAs } from '@nestjs/config';

export default registerAs('test', () => ({
  testSecret: process.env.TEST_SECRET,
}));
