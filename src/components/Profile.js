const Profile = ({
  username, tag, location, avatar, stats
}) => {
  return (
  <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      width={100}
      height={100}
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li class="profile-item">
      <span class="profile-label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li class="profile-item">
      <span class="profile-label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li class="profile-item">
      <span class="profile-label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>)
}

export default Profile;
