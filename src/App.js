// import Button from './components/Button';
import CodeInput from './components/CodeInput';
import MainLayout from './components/MainLayout';
import Router from './router';

export default function App() {
  return (
    <div className='App'>
      {/* <Button variant='circle'>click</Button> */}
      <CodeInput />
      <MainLayout>
        <Router />
      </MainLayout>
    </div>
  );
}

// json server: json file you can edit it as a data base directly without any logic
// api: here you can handle all api logic (tokens, auth, roles, etc...)
