import PropTypes from 'prop-types';
import Friend from './Friend';

export default function Friends ({ friends }) {
  return (
    <ul class="friend-list">
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

Friends.PropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
}
