import Navbar from './components/Navbar';
import "./app/style.css";
import Productos from './components/Productos';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>
        <Productos />
      </div>
    </>
  )
}

export default App;
