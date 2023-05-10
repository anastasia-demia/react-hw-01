import PropTypes from 'prop-types';
import css from "./profile.module.css"

const Profile = ({
  username, tag, location, avatar, stats
}) => {
  return (
  <div class={css.profile}>
  <div class={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      width={100}
      height={100}
      class={css.avatar}
    />
    <p class={css.name}>{username}</p>
    <p class={css.tag}>@{tag}</p>
    <p class={css.location}>{location}</p>
  </div>

  <ul class={css.stats}>
    <li class={css.item}>
      <span class={css.label}>Followers</span>
      <span class={css.quantity}>{stats.followers}</span>
    </li>
    <li class={css.item}>
      <span class={css.label}>Views</span>
      <span class={css.quantity}>{stats.views}</span>
    </li>
    <li class={css.item}>
      <span class={css.label}>Likes</span>
      <span class={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
}

export default Profile;
