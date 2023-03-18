import './App.css';
import { PageProvider } from './pages/HomePageEmployee/context/PageContext';
import { HomePageAdmin } from './pages/HomePageAdmin/HomePageAdmin';
import { HomePageEmployee } from './pages/HomePageEmployee/HomePageEmployee';
import { Login } from './pages/Login/Login';
import { AuthProvider } from './context/AuthContext';

function App() {
  // return (
  //   <PageProvider>
  //     <HomePageAdmin />
  //   </PageProvider>
  // );
  // return (<Login/>)
  return (
    
    <AuthProvider>
      <PageProvider>
        <HomePageEmployee />
      </PageProvider>
    </AuthProvider>
  );
}

export default App;
