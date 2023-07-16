import Hooks from './components/Hooks';
import MainLayout from './components/MainLayout';
import Router from './router';

export default function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Router />
      </MainLayout>
      {/* <Hooks /> */}
    </div>
  );
}
