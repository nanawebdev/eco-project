import Greeting from './Components/Greeting/Greeting';
import c from './App.module.scss'

function App() {
  return (
    <div className={c.App}>
      <div className={c.App__container}>
        <Greeting />
      </div>
    </div>
  );
}

export default App;
