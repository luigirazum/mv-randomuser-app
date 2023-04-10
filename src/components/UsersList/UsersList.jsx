import { useSelector } from 'react-redux';
import { selectUsersStore } from '../../redux/users/usersSelectors.js';
import User from '../User/User';

const UsersList = () => {
  const { users, isLoading, error } = useSelector(selectUsersStore);

  if (isLoading) {
    /** ==========================
     *  Loading message conditional
     *  ========================== */
    return (
      <section>
        <aside>
          <h6>Loading...</h6>
        </aside>
      </section>
    );
  }
  return (
    <section>
      {
      /** ==========================
       *  display error conditional
       *  ========================== */
      error && (
      <aside>
        <h6>Error</h6>
        <p>{error}</p>
      </aside>
      )
      }
      <ul>
        { users.map((user) => (
          <User key={user.uuid} id={user.uuid} />
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
