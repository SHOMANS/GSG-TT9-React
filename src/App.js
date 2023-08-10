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
        <Router />
      </MainLayout>
    </div>
  );
}
