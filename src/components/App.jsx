import Profile from "./Profile";
import Stats from "./Statistics";
import Friend from "./Friend";
import user from "./data/user.json";
import data from "./data/data.json"
import friends from "./data/friends.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Stats
        title="Upload Stats"
        stats={data}
      />

      <Friend
        avatar= {friends.avatar} 
        name= {friends.name}
        isOnline= {friends.isOnline}
        id= {friends.id}
      />
    </div>
  );
};
