import React from 'react';
import './App.css';
import PersonaCard from './Componentes/PersonaCard';

function App (){
  return (
    <div>
      <PersonaCard firstName ="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <PersonaCard firstName ="Smith" lastName="John" age={88} hairColor="Brown"/>
      <PersonaCard firstName ="Fillmore" lastName="Millard" age={50} hairColor="Brown"/>
      <PersonaCard firstName ="Smith" lastName="María" age={62} hairColor="Brown"/>
    </div>
  );
}
export default App;
