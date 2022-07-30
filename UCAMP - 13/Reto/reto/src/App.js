import logo from './logo.svg';
import './App.css';
import SetText from './Components/SetText';

var pacientes = [{
        name: "Roberto",
        age: 25
    },
    {
        name: "Martin",
        age: 20
    },
    {
        name: "Carlos",
        age: 15
    },
    {
        name: "Benito",
        age: 80
    },
    {
        name: "Luis",
        age: 50
    },
    {
        name: "Pepe",
        age: 60
    }
]


function App() {
    return ( <
        div className = "App" >
        <
        SetText arreglo = { pacientes }
        /> <
        /div>
    );
}

export default App;


/*
import logo from './logo.svg';
import './App.css';
import SetText from './Components/SetText';

var pacientes = [
  {
    name: "Roberto",
    age: 25
  },
  {
    name: "Martin",
    age: 20
  },
  {
    name: "Carlos",
    age: 15
  },
  {
    name: "Benito",
    age: 80
  },
  {
    name: "Luis",
    age: 50
  },
  {
    name: "Pepe",
    age: 60
  }
]


function App() {
  return (
    <div className="App">
      <SetText arreglo = {pacientes}/>
    </div>
  );
}

export default App;

*/