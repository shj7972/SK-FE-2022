import './RandomCountUp.css';

// SFC: stateless function component

export function RandomCountUp(props) {
  return (
    <div className="randomCountUp">
      <output style={{ animationName: 'none' }}>0</output>
    </div>
  );
}
