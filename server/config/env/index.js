import { merge } from 'lodash';

const all = {
};

/* eslint-disable */
const config = merge(all, require(`./${process.env.NODE_ENV}`).default || {});
/* eslint-enable */

export default config;
