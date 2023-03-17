import './App.css';
import { PageProvider } from './pages/HomePageAdmin/context/PageContext';
import { HomePageAdmin } from './pages/HomePageAdmin/HomePageAdmin';
import { Login } from './pages/Login/Login';

function App() {
  // return (
  //   <PageProvider>
  //     <HomePageAdmin />
  //   </PageProvider>
  // ); 
  return (<Login/>)
}

export default App;
