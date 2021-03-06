import Greeting from './Components/Greeting/Greeting';
import c from './App.module.scss'
import Target from './Components/Target/Target';
import Recycle from './Components/Recycle/Recycle';
import Footer from './Components/Footer/Footer';
import Specification from './Components/Specification/Specification';

function App() {
  return (
    <div className={c.App}>
      <div className={c.App__container}>
        <Greeting />
        <Target />
        <Specification />
        <Recycle />
      </div>
      <Footer />
    </div>
  );
}

export default App;
