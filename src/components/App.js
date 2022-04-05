import Enigma from './Enigma.png';
import Game from './Game/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Enigma} className="App-logo" alt="logo" />
        <h1 >Adivina mi numero</h1>
      </header>
      
      <div>
        <Game />
      </div>
    </div>
  );
}

export default App;
