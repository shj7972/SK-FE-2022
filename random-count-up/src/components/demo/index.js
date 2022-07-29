import { SharableHOC } from 'hoc';

// 함수 컴포넌트
function Stateless({ theme, setTheme }) {
  console.log(Stateless.displayName, theme, setTheme);

  return <div>Stateless</div>;
}

function AnotherStateless({ theme, setTheme }) {
  console.log(AnotherStateless.displayName, theme, setTheme);

  return <div>AnotherStateless</div>;
}

const Demo = {
  Stateless: SharableHOC(Stateless),
  AnotherStateless: SharableHOC(AnotherStateless),
};

export default Demo;
