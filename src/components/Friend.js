const Friend = ({
    avatar, name, isOnline
  }) => {
    return (
    <li class="friend-item">     
      <span 
      class="status"
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>         
      <img class="friend-avatar" src={avatar} alt="User avatar" width="48" />
      <p class="friend-name">{name}</p>
    </li>
  )
}

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