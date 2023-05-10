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

export default Friend;
