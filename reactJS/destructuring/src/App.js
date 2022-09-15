import logo from './logo.svg';
import './App.css';
import Function from './components/Function';

function App() {

  const user = {
    nombre: "Luis feria",
    color: "Azul"
  }

  const saludarFn = (name,edad) => {
    console.log("Hola " + name+ " edad " +edad)
    console.log(`Hola ${name} edad  ${edad}`)

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Function  userInfo={user} saludarFn={saludarFn}/>
      </header>
    </div>
  );
}

export default App;
