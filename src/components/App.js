import React from "react";
import user from "../user.json";
import statisticalData from "../statistical-data.json";
import friendsList from "../friends.json";
import transactions from "../transactions.json";

import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactions} />
    </>
  );
}
