import Profile from "./Profile/Profile";
import Stats from "./Stats/Statistics";
import FriendList from "./FriendList/FriendList";
import History from "./History/History";
import user from "../data/user.json";
import data from "../data/data.json"
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"

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

      <Stats
        stats={data}
      />

      <FriendList
        friends= {friends}
      />

      <History
      items={transactions}
      />
    </div>
  );
};
