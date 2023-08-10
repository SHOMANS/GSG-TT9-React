import { Fragment, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { LOGIN_INPUTS } from '../../constants/auth';

const LoginPage = () => {
  const { login, isLoading } = useAuthContext();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(formData);
  };

  const handleChangeInput = ({ target: { value, name } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  return (
    <form onSubmit={handleSubmit}>
      {LOGIN_INPUTS.map((input) => (
        <Fragment key={input.id}>
          <label htmlFor={input.id}>{input.label}</label>
          <input
            type={input.type}
            id={input.id}
            name={input.id}
            onChange={handleChangeInput}
            value={formData[input.id]}
            required
          />
        </Fragment>
      ))}

      <button type='submit'>{isLoading ? 'loading...' : 'login'}</button>
    </form>
  );
};

export default LoginPage;
