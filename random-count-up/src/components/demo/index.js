import { SharableHOC } from 'hoc';

// 함수 컴포넌트
function StatelessOrigin({ theme, setTheme }) {
  return <div>Stateless</div>;
}

function AnotherStatelessOrigin({ theme, setTheme }) {
  return <div>AnotherStateless</div>;
}

export const Stateless = SharableHOC(StatelessOrigin);
export const AnotherStateless = SharableHOC(AnotherStatelessOrigin);
