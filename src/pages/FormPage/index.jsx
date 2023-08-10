import Container from '../../components/Container';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

// const mobileRegex = /^(?:\+?88|0088)?01[15-9]\d{8}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

const formSchema = Yup.object({
  text: Yup.string()
    // .matches(mobileRegex, 'enter correct phone number')
    .required('Text is required'),
  password: Yup.string()
    .matches(
      passwordRegex,
      'password should be more that 8 and contains small and capital and number and special character'
    )
    .required('Password is required'),
  number: Yup.number()
    .positive()
    .integer()
    .min(18)
    .max(99)
    .required('Number is required'),
  checked: Yup.boolean().oneOf([true], 'Checkbox is required'),
  radio: Yup.string()
    .oneOf(['radio1', 'radio2'], 'enter correct radio')
    .required('Radio is required'),
  select: Yup.string()
    .oneOf(['coffee', 'tea'], 'Select is required')
    .required(),
  startDate: Yup.date()
    .default(new Date())
    .nullable()
    .required('Start Date is required'),
  endDate: Yup.date().default(new Date()).nullable(), // after the start date
  time: Yup.string().required('Time is required'),
});

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    // try {
    //   const res = await axios.post('url', data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  console.log(errors);
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='text'>Text</label>
          <input type='text' id='text' {...register('text')} />
          {errors.text && <span className='error'>{errors.text.message}</span>}
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' {...register('password')} />
          {errors.password && (
            <span className='error'>{errors.password.message}</span>
          )}
        </div>

        <div>
          <label htmlFor='number'>Number</label>
          <input type='number' id='number' {...register('number')} />
          {errors.number && (
            <span className='error'>{errors.number.message}</span>
          )}
        </div>

        <div>
          <label htmlFor='checked'>Checkbox</label>
          <input type='checkbox' id='checked' {...register('checked')} />
          {errors.checked && (
            <span className='error'>{errors.checked.message}</span>
          )}
        </div>

        <div>
          <label>Radio</label>
          <div>
            <label htmlFor='radio1'>
              <input
                type='radio'
                id='radio1'
                value='radio1'
                {...register('radio')}
              />{' '}
              Option 1
            </label>
          </div>
          <div>
            <label htmlFor='radio2'>
              <input
                type='radio'
                id='radio2'
                value='radio2'
                {...register('radio')}
              />{' '}
              Option 2
            </label>
          </div>
          <div>
            <label htmlFor='radio3'>
              <input
                type='radio'
                id='radio3'
                value='radio3'
                {...register('radio')}
              />{' '}
              Option 3
            </label>
          </div>
          {errors.radio && (
            <span className='error'>{errors.radio.message}</span>
          )}
        </div>

        <div>
          <label htmlFor='select'>Select</label>
          <select id='select' {...register('select')}>
            <option value='test'>test</option>
            <option value='coffee'>Coffee</option>
            <option value='tea'>Tea</option>
          </select>
          {errors.select && (
            <span className='error'>{errors.select.message}</span>
          )}
        </div>

        <div>
          <label htmlFor='startDate'>Start Date</label>
          <input type='date' id='startDate' {...register('startDate')} />
          {errors.startDate && (
            <span className='error'>{errors.startDate.message}</span>
          )}
        </div>

        <div>
          <label htmlFor='endDate'>End Date</label>
          <input type='date' id='endDate' {...register('endDate')} />
          {errors.endDate && (
            <span className='error'>{errors.endDate.message}</span>
          )}
        </div>

        <div>
          <label htmlFor='time'>Time</label>
          <input type='time' id='time' {...register('time')} />
          {errors.time && <span className='error'>{errors.time.message}</span>}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </Container>
  );
};

export default FormPage;
