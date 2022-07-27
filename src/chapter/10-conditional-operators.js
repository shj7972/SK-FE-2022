/* eslint-disable jest/expect-expect */

/* 3항 연산 식(터너리), null 병합 연산자, 옵셔널 체이닝을 활용해 코드를 작성합니다. ---------------- */

// ----------------------------------------------------------------------------------
// Nullish coalescing operator
// ----------------------------------------------------------------------------------

const defaultArg = (value, initialValue) => {
  // Ternaries
  // 아래 코드를 3항 연산 식으로 변경합니다.
  // if (value === null || value === undefined) {
  //   return initialValue;
  // } else {
  //   return value;
  // }

  // return value === null || value === undefined ? initialValue : value;

  // '', 0, NaN, null, undefined
  // return value || initialValue;

  // Nullish coalescing operator
  // null 병합 연산자를 사용한 식으로 변경합니다.
  return value ?? initialValue;
};

const ellipsisText = (text, limit) => {
  // 기본 매개변수를 활용해 코드를 변경합니다.
  limit = defaultArg(limit, 100);
  return `${text.slice(0, limit).trim()}...`;
};

let desc = `
  JavaScript는 문 보다, 식을 사용해 조건 처리하는 경우가 잦습니다. 
  자주 사용되는 조건 식에 대해 정리합니다.
`.trim();

// console.log(ellipsisText(desc, 0));

// ----------------------------------------------------------------------------------
// Optional chaning
// ----------------------------------------------------------------------------------

const company = Object.freeze({
  name: 'EUID',
  location: {
    lat: 321,
    lng: -39,
  },
  // getFoundingDate: '2019, 08',
  getLocation() {
    return Object.values(company.location);
  },
});

let companyName, companyLat;

companyName = company?.companyName;

console.log('companyName = ', companyName);

companyLat = company.location?.lat;

console.log('companyLat = ', companyLat);

company.getFoundingDate?.();

let location;

location = company.getLocation?.();

console.log(location);
