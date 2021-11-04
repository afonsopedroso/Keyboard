import logo from './logo.svg';
import './App.css';

import Keyboard from './components/Keyboard/Keyboard';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Keyboard />
    </div>
  );
}

export default App;
