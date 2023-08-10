import { Fragment, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { SIGNUP_INPUTS } from '../../constants/auth';

const SignUpPage = () => {
  const { signup, isLoading } = useAuthContext();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password === formData.rePassword)
      signup({
        name: formData.username,
        email: formData.email,
        password: formData.password,
      });
    else {
      alert('Password and Repeat Password are not the same');
    }
  };

  const handleChangeInput = ({ target: { value, name } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  return (
    <form onSubmit={handleSubmit}>
      {SIGNUP_INPUTS.map((input) => (
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

      <button type='submit'>{isLoading ? 'loading...' : 'Sign Up'}</button>
    </form>
  );
};

export default SignUpPage;
