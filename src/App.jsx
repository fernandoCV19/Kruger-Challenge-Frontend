import './App.css';
import { PageProvider } from './pages/HomePageAdmin/context/PageContext';
import { HomePageAdmin } from './pages/HomePageAdmin/HomePageAdmin';

function App() {
  return (
    <PageProvider>
      <HomePageAdmin />
    </PageProvider>
  );
}

export default App;
