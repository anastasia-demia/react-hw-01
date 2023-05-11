import PropTypes from 'prop-types';
import Friend from './Friend';
import css from "./friend.module.css"

export default function Friends ({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Friend
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
}
