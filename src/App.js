import {useState} from 'react'
import { Card } from './components/card/Card';
import { Navbar} from './components/Navbar/Navbar'
import { Usuario } from './components/usuario/usuario'; 





function App() {
const [contador ,setContador ] = useState (0)

  const handleContador =() => {
setContador(contador + 1)
  }

return(
  <div>
<Navbar/>
<Usuario nombre ="juan" edad= {26} nac = "arg"/>
<Usuario nombre ="raul" edad= {56} nac = "bol"/>
<Card />
<div>

</div>
<h2>
  contador:{contador}
</h2>
<button onClick={handleContador}>sumar</button>
  </div>
);
}


export default App;
