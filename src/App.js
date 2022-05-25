import logo from './logo.svg';
import './App.css';

const pythonExec =()=>{
  const python_code =`
    print("Hello, world")
  `;

  const pyodide = window.pyodide
  pyodide.runPython (python_code)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Python from React</h1>
        <button onClick={pythonExec}>Console</button>
      </header>
    </div>
  );
}

export default App;