/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// 일반 함수 식 참조
const show = function () {
  console.log('show', this);
  return `${this.name} 보다.`;
};

const look = function () {
  console.log('look', this);
  return `${this.name} 지켜보다.`;
};

// 화살표 함수 식 참조
// 화살표 함수 식 내부의 this는 일반 함수의 this와 가리키는 대상이 다릅니다.
const watch = function () {
  console.log('watch', this);
  return `${this.name} 관찰하다.`;
};

const sleep = function () {
  console.log(this);
};

/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------ */

const euid = {
  /* properties */
  _name: '이듬',
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  },
  show() {
    console.log('show', this);
    return `${this.name} 보다.`;
  },
  look() {},
  watch() {},
  sleep() {
    console.log(this);
  },
};

euid.sleep();

// euid.show(); // '이듬 보다'
// euid.look(); // '이듬 지켜보다'
// euid.watch(); // '이듬 관찰하다' ?
