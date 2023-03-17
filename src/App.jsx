import './App.css';
import { PageProvider } from './pages/MenuPrincipalAdministradores/context/PageContext';
import { MenuPrincipalAdministradores } from './pages/MenuPrincipalAdministradores/MenuPrincipalAdministradores';

function App() {
  return (
    <PageProvider>
      <MenuPrincipalAdministradores />
    </PageProvider>
  );
}

export default App;
