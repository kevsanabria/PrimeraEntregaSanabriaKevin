import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar.js';

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer greeting={"Hola Viteh"}/>
      </div>
    </div>
  );
}

export default App;
