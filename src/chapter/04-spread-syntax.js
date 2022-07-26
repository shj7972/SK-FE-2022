/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

/* 배열 전개 ------------------------------------------------------------------- */

// ... 연산자 전개, 합성

const integers = [-1, 0, 32, -101, 24];
const floatings = [0.98, 10.43, 10.4e5];
// let maxInt = Math.max.apply(Math, [302, 1, 2, 30, -101].concat(integers));
let maxInt = Math.max(...[302, ...floatings, 1, ...integers, 2, 30, -101]);

// console.log(maxInt);

/* 객체 전개 ------------------------------------------------------------------- */

// 객체 합성 유틸리티 함수
// Object.assign 객체 합성 (얕은 복사)
// extend 유틸리티 객체 합성 (깊은 복사)
const extend = function () {
  var _mixinObject = arguments[0];
  var _restObjects = [].slice.call(arguments, 1);

  var _mixin = function (o1, o2) {
    for (var key in o2) {
      if ({}.hasOwnProperty.call(o2, key)) {
        var value = o2[key];
        if (value && typeof value === 'object' && value.length) {
          o1[key] = (o1[key] || []).concat(value);
        } else if (value && typeof value === 'object' && !value.length) {
          o1[key] = _mixin(o1[key] || {}, value);
        } else {
          o1[key] = value;
        }
      }
    }
    return o1;
  };

  for (var i = 0, l = _restObjects.length; i < l; ++i) {
    _mixin(_mixinObject, _restObjects[i]);
  }

  return _mixinObject;
};

// 상태 업데이트 유틸리티 함수
const setState = (newState) => {
  // return extend({}, state, newState);

  // 깊은 복사
  return {
    ...state, /* { loading, error, data } */
    ...newState, /* { loading, data } */
    // 중첩된 객체(또는 배열) 합성
    data: [
      ...state.data,
      ...newState.data
    ]
  }
};

/* -------------------------------------------------------------------------- */

// 상태 객체 (불변 데이터 화)
// React = 선언형 프로그래밍 패러다임
// 불변(immutable) 데이터 관리
const state = Object.freeze({
  loading: false,
  error: null,
  data: [{ id: 101, title: '초기 데이터' }],
});

// 상태(state) 업데이트 
// JavaScript 객체는 뮤터블(mutable)
// Object.freeze()를 사용하면 객체를 불변 객체로 변경 (읽기 전용)
// state.loading = true;
// delete state.data;

// console.table(state);


const updatedState = setState({ 
  loading: true,
  data: [{ id: 201, title: '데이터 업데이트' }]
})

console.log(updatedState);