// 1. utils 모듈을 "모듈 객체"로 불러옵니다. (import)
import * as Utils from '../utils/index.js'; // { numberWithComma, currency, currencyKR }
// import * as React from 'react';

let price = 908_800_000;
let result = Utils.currencyKR(price);
// console.log('DEBUG ~ result', result);

// 2. utils 모듈 중, numberWithComma 함수를 추출합니다.
import { numberWithComma } from '../utils/index.js';
// import { defineProps, defineEmits } from 'vue';

// console.log(numberWithComma(price));

// 3. utils 모듈 중, currencyKR 함수를 currency (별칭: alias) 이름으로 추출합니다.
import { currencyKR as currency } from '../utils/index.js';
// import { createElement as h } from 'react';

// console.log(currency(price));
