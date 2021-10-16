import Greeting from './Components/Greeting/Greeting';
import c from './App.module.scss'
import Target from './Components/Target/Target';

function App() {
  return (
    <div className={c.App}>
      <div className={c.App__container}>
        <Greeting />
        <Target />
      </div>
    </div>
  );
}

export default App;
