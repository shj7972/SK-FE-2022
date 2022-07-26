// Node.js runtime
// CommonJS modules
// import => require()
// export default => module.exports
// export => exports.moduleName

const { numberWithComma } = require('./modules/numberWithComma');

console.log(numberWithComma(9e6));
