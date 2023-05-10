import PropTypes from 'prop-types';
import Friend from './Friend';
import css from "./friend.module.css"

export default function Friends ({ friends }) {
  return (
    <ul class={css.list}>
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
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}