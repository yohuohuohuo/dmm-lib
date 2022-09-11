import Nftscan from '@/api/nftscan';
import formatBigNumber from './util/number.util';
import packageJson = require('./../package.json');

const { version } = packageJson;

export { Nftscan, formatBigNumber, version };
