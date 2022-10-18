// import logo from './logo.svg';
import './App.css';

/** Components */
import Title from './components/Title';
import Theme from './components/Theme';
import SelectTheme from './components/SelectTheme';
import TableButtons from './components/TableButtons';
import TableResults from './components/TableResults';
import Results from './components/Results';
import Control from './components/Control';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <div className="fondo">
        <div className="calculadora">
          <Header />
          <TableResults />
          <TableButtons />
        </div>
      </div>
    </div>
  )
}

export default App;