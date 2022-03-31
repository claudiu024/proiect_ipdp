
import './App.css';

function App() {
  return (
    <body>
    <div className="login-div">
        <h1>RESTAURANT</h1>
        <form action="/action_page.php">
        <div className="user-div">
      
        <input className="text-input"type="text" id="user" name="user" placeholder="E-mail adress"></input>
  
        <input className="text-input" type="password" id="pwd" name="pwd" placeholder="Password"></input>
        </div>
        <input className="connect-input"type="submit" value="Connect" ></input>

        </form>
      <div className='link-div'>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ai uitat parola?
        </a>
        </div>

        <button className='connect-input'>Create new account</button>

    </div>
    </body>
  );
}

export default App;
