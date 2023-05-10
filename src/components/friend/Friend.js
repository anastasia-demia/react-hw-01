import css from "./friend.module.css"

const Friend = ({
    avatar, name, isOnline
  }) => {
    return (
    <li class={css.item}>
      <span
      class={css.status}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img class={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p class={css.name}>{name}</p>
    </li>
  )
}

export default Friend;
