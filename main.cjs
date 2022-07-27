// Node.js runtime
// CommonJS modules
// import => require()
// export default => module.exports
// export => exports.moduleName

const { numberWithComma } = require('./modules/numberWithComma.cjs');
// import { numberWithComma } from './modules/numberWithComma.js';

console.log(numberWithComma(9e6));
