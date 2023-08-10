import { Suspense } from 'react';
import MainLayout from './components/MainLayout';
import { useThemeContext } from './contexts/ThemeContext';
import Router from './router';
// import UseMemoComponent from './components/UseMemoComponent';
// import UseCallbackComponent from './components/UseCallbackComponent';

export default function App() {
  const { theme } = useThemeContext();

  return (
    <div className={theme}>
      {/* <UseMemoComponent /> */}
      {/* <UseCallbackComponent /> */}
      <MainLayout>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Router />
        </Suspense>
      </MainLayout>
    </div>
  );
}
