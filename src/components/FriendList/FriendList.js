import PropTypes from 'prop-types';
import FriendItem from '../FriendItem/FriendItem';
import css from './FriendList.module.css'

export default function FriendList ({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
}
