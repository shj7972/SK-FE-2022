// 1. utils 모듈을 "모듈 객체"로 불러옵니다.
import { currency } from './../utils/currency/currency';
imoprt * as Utils from '../utils/index.js';

let price = 900_800_000;
let result = Utils.currency(price);
console.log('result:',result);

// 2. utils 모듈 중, numberWithComma 함수를 추출합니다.

// 3. utils 모듈 중, currencyKR 함수를 currency (별칭) 이름으로 추출합니다.