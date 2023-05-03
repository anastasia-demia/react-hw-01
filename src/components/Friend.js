const Friend = ({
    avatar, name, isOnline, id
  }) => {
    return (
      <ul className="friend-list">
        <li
          className="friend-item"
          key={id}>     
          <span class="status">{isOnline}</span>         
          <img class="friend-avatar" src={avatar} alt="User avatar" width="48" />
          <p class="friend-name">{name}</p>
        </li>
      </ul>
    )}

export default Friend;
