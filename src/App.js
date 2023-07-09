import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TodoPage from './pages/TodoPage';
import CountersPage from './pages/CountersPage';
import LifeCyclePage from './pages/LifeCyclePage';

import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoItemPage from './pages/TodoItemPage';
import { H1 } from './components/Typography';

export default function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />

        <Route path='counters' element={<CountersPage />} />
        <Route path='lifecycle' element={<LifeCyclePage counter={10} />} />

        <Route
          path='todo'
          element={
            <>
              {/* <Header /> */}
              <Outlet />
              {/* <Footer /> */}
            </>
          }
        >
          <Route index element={<TodoPage />} />
          <Route path=':id' element={<TodoItemPage />} />
          <Route path=':id/:name' element={<TodoItemPage />} />
        </Route>
        <Route path='404' element={<H1>Page not found 404</H1>} />

        <Route path='*' element={<Navigate to='/404' replace={true} />} />

        {/* <Route path='todo/:id' element={<TodoItemPage />} /> */}
      </Routes>
    </div>
  );
}
