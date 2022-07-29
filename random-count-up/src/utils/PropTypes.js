export const string = (props, propName, componentName) => {
  let value = props[propName];
  let valueType = typeof value;

  if (valueType !== 'string') {
    throw new TypeError(
      `${componentName} 컴포넌트가 전달받는 "${propName}" prop 타입은 string여야 하나, 전달된 타입은 "${valueType}" 타입입니다.`
    );
  }
};

export const number = (props, propName, componentName) => {
  let value = props[propName];
  let valueType = typeof value;

  if (valueType !== 'number') {
    throw new TypeError(
      `${componentName} 컴포넌트가 전달받는 "${propName}" prop 타입은 number여야 하나, 전달된 타입은 "${valueType}" 타입입니다.`
    );
  }
};

const PropTypes = {
  string,
  number,
};

export default PropTypes;
