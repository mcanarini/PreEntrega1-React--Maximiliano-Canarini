import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemListConteiner from './components/ItemListConteiner/itemListConteiner';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListConteiner greeting={'Bienvenidos!'} />
    </div>
  )
}

export default App;
