import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import PageLayout from './components/layout';

import Home from './pages/home/index';
import Login from './pages/login';
import Register from './pages/register';
import { ThemeProvider } from './context';
import { Paths } from './paths';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={Paths.home} element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path={Paths.login} element={<Login />} />
      <Route path={Paths.register} element={<Register />} />
    </Route>
  )
);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
