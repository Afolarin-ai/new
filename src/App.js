// import logo from './logo.svg';
import './App.css';
// import Hello from "./Components/Hello"
// import Message from './Components/Message';
// import Profile from './Components/Profile';
import Counter from './Components/Counter';
import Functioneventhandle from './Components/Functioneventhandle';
import { Parent } from './Components/Parent';

function App() {
  return (
    <div className="App">
      {/* <Hello />
      <Message messageContent = " Always remember to have the back of your fellow human."/>
      <Profile name="Folayemi" lastName="Ogundeyin"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Functioneventhandle /> */}

      <Parent/>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
