import logo from './logo.svg';
import './App.css';

function App() {
  //Khai báo 1 biến tên là name và gán giá trị "LocNB"
  const name = "LocNB";
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello, {name}!</h2>
      </header>
    </div>
  );
}

export default App;
