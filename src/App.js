import logo from './logo.svg';
import Description from './Description';
import './App.css';

function App() {
  return (
    <div className="App" id="intro">
        <h1>UFC MATCH PREDICTION</h1>
        <Description /> {/* 使用新组件 */}
        <ul className="actions">
          <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
        </ul>
    </div>
  );
}

export default App;
