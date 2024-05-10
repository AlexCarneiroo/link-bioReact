import * as C from './styles-compo';
import { ContHeader } from './componets/header';
import { ContMain } from './componets/main'; 

function App() {
  return (
    <C.Container>

      <C.header>
        <ContHeader/>
      </C.header>
      <C.main>
        <ContMain />
      </C.main>
    </C.Container>
  )
}

export default App
