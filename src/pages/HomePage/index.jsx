import { Link } from 'react-router-dom';

import { PATHS } from '../../router/paths';
// import { RoleContext } from '../../App';
import { ROLES } from '../../constants';
import { useAuthContext } from '../../contexts/AuthContext';

const HomePage = () => {
  const data = useAuthContext();

  console.log(data);
  return (
    <div>
      <h1>Home Page</h1>

      <h2>Hello My {data.role}</h2>

      <button onClick={() => data.setRole(ROLES.ADMIN)}>be admin</button>
      <button onClick={() => data.setRole(ROLES.USER)}>be user</button>
      <button onClick={() => data.setRole(ROLES.GUEST)}>be guest</button>

      <p>
        <Link to={PATHS.ABOUT}>learn more...</Link>
      </p>
    </div>
  );
};

export default HomePage;
