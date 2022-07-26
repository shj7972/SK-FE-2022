/* --------------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                              */
/* --------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

// Button 클래스
class Button {
  constructor(type, label) {
    this.type = type;
    this.label = label;
  }

  // 2022
  // class(static) members
  static version = '1.0.0';

  // prototype (instance members)
  getType() {
    return this.type;
  }
}

const saveButton = new Button('button', '저장');

// console.log(saveButton);

// Button 클래스를 확장한 AriaButton 클래스
class AriaButton extends Button {
  constructor(type, label, usingAria = true) {
    super(type, label);
    this.usingAria = usingAria;
  }

  static displayName = 'AriaButton';

  getVersion() {
    return AriaButton.version;
  }
}

const ariaCancelButton = new AriaButton('reset', '취소');

console.log(ariaCancelButton);
