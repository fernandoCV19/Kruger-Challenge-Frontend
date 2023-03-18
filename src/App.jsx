import './App.css';
import { PageProvider as EmployeePageProvider } from './pages/HomePageEmployee/context/PageContext';
import { PageProvider as AdminPageProvider } from './pages/HomePageAdmin/context/PageContext';
import { HomePageAdmin } from './pages/HomePageAdmin/HomePageAdmin';
import { HomePageEmployee } from './pages/HomePageEmployee/HomePageEmployee';
import { Login } from './pages/Login/Login';
import { AuthProvider } from './context/AuthContext';
import { Route, Routes } from 'react-router';
import { RouteProtector } from './components/RouteProtector';
import { roles } from './enums/roles';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/homePageAdmin'
          element={
            <RouteProtector role={roles.admin}>
              <AdminPageProvider>
                <HomePageAdmin />
              </AdminPageProvider>
            </RouteProtector>
          }
        />
        <Route
          path='/homePageEmployee'
          element={
            <RouteProtector role={roles.employee}>
              <EmployeePageProvider>
                <HomePageEmployee />
              </EmployeePageProvider>
            </RouteProtector>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
