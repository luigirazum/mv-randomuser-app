import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersStore } from '../../redux/users/usersSelectors';
import User from '../User/User';
import { fetchAllUsers } from '../../redux/users/usersSlice';

const UsersList = () => {
  const { users, isLoading, error } = useSelector(selectUsersStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

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
      <h2>current users</h2>
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
      {
      /**
       * display no users conditional
       */
      users.length === 0 ? (
        <aside>
          <h5>status</h5>
          <p>there are no users</p>
        </aside>
      ) : (
        <ul>
          { users.map((user) => (
            <User key={user.uuid} id={user.uuid} />
          ))}
        </ul>
      )
      }
    </section>
  );
};

export default UsersList;
