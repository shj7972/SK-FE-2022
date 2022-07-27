/* ---------------------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                                     */
/* ---------------------------------------------------------------------------------------- */

/* 렌더링 결과 HTML 코드
<div class="card">
  <img src="react-fundamentals.webp" class="card-img-top" alt="React Fundamentals" />
  <div class="card-body">
    <h5 class="card-title">React 펀드멘탈</h5>
    <p class="card-text">React 애플리케이션 및 라이브러리를 빌드하는 데 필요한 기본 개념을 배웁니다.</p>
    <a href="/react-fundamentals" class="btn btn-primary">React fundamentals</a>      
  </div>    
</div>
*/

/* --------------------------------------------------------------------------------------- */

function renderCard(card) {
  return (
    '<div class="card">\
      <img src="' + card.image.src + '" class="card-img-top" alt="' + card.image.alt + '" />\
      <div class="card-body">\
        <h5 class="card-title">' + card.title + '</h5>\
        <p class="card-text">' + card.description + '</p>\
        <a href="' + card.link.href + '" class="btn btn-primary">' + card.link.text + '</a>\
      </div>\
    </div>\
    '
  )  
}

const drawCard = (card) => {
  //console.log(card);
  return (
    `<div class="card">
    <img src="${card.image.src}" class="card-img-top" alt="${card.image.alt}" />
    <div class="card-body">
      <h5 class="card-title">${card.title}</h5>
      <p class="card-text">${card.description}</p>
      <a href="${card.link.herf}" class="btn btn-primary">${card.link.text}</a>      
    </div>    
  </div>
    `
  )
}

function removeSpaceString(string) {
  return string.replace(/\n|\s+/g, '');
}

/* --------------------------------------------------------------------------------------- */

const cardInfo = {
  title: 'React 펀드멘탈',
  description: 'React 애플리케이션 및 라이브러리를 빌드하는 데 필요한 기본 개념을 배웁니다.',
  image: {
    src: 'react-fundamentals.webp',
    alt: 'React Fundamentals',
  },
  link: {
    href: '/react-fundamentals',
    text: 'React fundamentals',
  },
};

<<<<<<< HEAD
//let rendered = removeSpaceString(renderCard(cardInfo));
let rendered = removeSpaceString(drawCard(cardInfo));
=======

console.log(removeSpaceString(drawCard(cardInfo)));

let rendered = removeSpaceString(renderCard(cardInfo));
>>>>>>> 70ce812cf53cf35014876600eccba8c9ea85a223

//console.log(cardInfo);
console.log(rendered);

// 원래 문자열으로 표현을 하려면, 더해줘야한다.
// 하지만 템플릿 리터럴을 쓰면 `` 백틱과 ${}의 조합으로 문자열을 만들 수 있게된다
let A="안"
let B="녕"
let C="하"
let D="세"
let E="요"
let F="."

console.log("저기 가는 아저씨" + " "+A+ " "+B+ " "+C+ " "+D+ " "+E+ " "+F) // es5
console.log(`저기 가는 형님 ${A} ${B} ${C} ${D} ${E} ${F}`) //es6