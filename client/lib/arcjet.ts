import archjet, {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
} from '@arcjet/next';
import { env } from './env';

export {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
};

export default archjet({
  key: env.ARCJET_KEY,
  characteristics: ['fingerprint'],
  /* define based rules here, can also be empty if you don't want to have any base rules */
  rules: [
    shield({
      mode: 'LIVE',
    }),
  ],
});
