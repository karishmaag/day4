
import './App.css';
import Head1 from './component/Head1';
import Nav from './component/Nav';
import { Cart } from './component/Cart';
import Section1 from './component/Section1';

function App() {
  return (
    <div className="App">
      <Head1/>
      <Nav/>
      <Section1/>
      <Cart/>
    </div>
  );
}

export default App;