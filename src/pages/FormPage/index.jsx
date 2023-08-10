import Container from '../../components/Container';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

// const mobileRegex = /^(?:\+?88|0088)?01[15-9]\d{8}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

const formSchema = Yup.object({
  username: Yup.string().required('username is required'),
  email: Yup.string().email().required('email is required'),
  password: Yup.string()
    .matches(
      passwordRegex,
      'password should be more that 8 and contains small and capital and number and special character'
    )
    .required('Password is required'),
  terms: Yup.boolean().oneOf([true], 'Checkbox is required'),
  startDate: Yup.date(),
  endDate: Yup.date().min(
    Yup.ref('startDate'),
    'end date should be after start date'
  ),
});

/**
 * register
 * onSubmit
 * errors
 * reset
 * isDirty
 * watch
 */

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  console.log(register('email'));

  const onSubmit = async (data) => {
    console.log(data);
    // try {
    //   const res = await axios.post('url', data);
    // } catch (err) {
    //   console.log(err);
    // }
    // reset({
    //   username: 'reset',
    //   email: '',
    //   password: '',
    //   terms: false,
    // });
    reset();
  };

  useEffect(() => {
    reset({
      username: 'test',
      email: '',
      password: '',
      terms: false,
    });
  }, [reset]);

  console.log(watch('password'));

  // console.log(errors);

  console.log(isDirty);
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div>
          <label htmlFor='username'>User Name</label>
          <input type='text' id='username' {...register('username')} />
          {errors.username && (
            <span className='error'>{errors.username.message}</span>
          )}
        </div> */}
        <Input
          errors={errors}
          register={register}
          name='username'
          type='text'
        />
        <Input errors={errors} register={register} name='email' type='email' />
        <Input
          errors={errors}
          register={register}
          name='password'
          type='password'
        />
        <Input
          errors={errors}
          register={register}
          name='terms'
          type='checkbox'
        />
        {/* <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' {...register('email')} />
          {errors.email && (
            <span className='error'>{errors.email.message}</span>
          )}
        </div> */}
        {/* 
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' {...register('password')} />
          {errors.password && (
            <span className='error'>{errors.password.message}</span>
          )}
        </div> */}
        {/* 
        <div>
          <label htmlFor='terms'>terms</label>
          <input type='checkbox' id='terms' {...register('terms')} />
          {errors.terms && (
            <span className='error'>{errors.terms.message}</span>
          )}
        </div> */}

        <button type='submit'>Submit</button>
      </form>
    </Container>
  );
};

export default FormPage;

const Input = ({ errors, register, type, name }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} {...register(name)} />
      {errors[name] && <span className='error'>{errors[name].message}</span>}
    </div>
  );
};
