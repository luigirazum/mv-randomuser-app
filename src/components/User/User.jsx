import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectUserById } from '../../redux/users/usersSelectors';

const User = ({ id }) => {
  const { first, last } = useSelector((store) => selectUserById(store, id));
  return (
    <li>
      <p>
        first name:
        {' '}
        <span>{first}</span>
      </p>
      <p>
        last name:
        {' '}
        <span>{last}</span>
      </p>
    </li>
  );
};

User.propTypes = {
  id: PropTypes.string.isRequired,
};

export default User;
