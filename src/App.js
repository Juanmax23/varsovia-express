
import './assets/style.css'
import { Header } from './componentes/global/Header';
import { Article } from './componentes/main/Article'
import { Footer } from './componentes/global/Footer';
import { BrowserRouter as Switch,
  Route
} from 'react-router-dom';
import { useState } from 'react';

import { Cuenta }  from './componentes/main/Cuenta'
import { Woman } from './componentes/main/Main-componentes/Mujer'
import { Contacto } from './componentes/main/Contacto'
import { Man } from './componentes/main/Main-componentes/Man'
import { Boy } from './componentes/main/Main-componentes/boy'
import { Favoritos } from './componentes/main/Favoritos'
import { AddUser } from './componentes/main/Main-componentes/AddUser'

function App(props) {
  
  const [count, setCount] = useState (0);

  function incrementCounter ()  {
    setCount(count + 1);
  }
  

  return (
    
    <>

      <Header count={count} filterBy={props.filterBy}/>

      <Switch>
        <Route exact path="/">
          <Article 
            
            incrementCounter={incrementCounter}
            
          />
        </Route>

        <Route exact path="/Cuenta">
          <Cuenta />
        </Route>

        <Route exact  path="/Contacto">
          <Contacto />
        </Route>

        <Route exact path="/Favoritos">
          <Favoritos />
        </Route>

        <Route exact path="/Woman">
          <Woman />
        </Route>

        <Route exact path="/Man">
          <Man />
        </Route>

        <Route exact path="/Boy">
          <Boy />
        </Route>

        <Route exact path="/AddUser">
          < AddUser/>
        </Route>
        
      </Switch>

      <Footer/>
      
      
      
    </>
      
  );
}


export default App;
