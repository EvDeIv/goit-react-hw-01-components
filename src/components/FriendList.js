import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import FriendItem from "./FriendItem";

export default function FriendList({ friends }) {
  return (
    <>
      <ul className={styles.friendList}>
        {friends.map((friend) => (
          <li className={styles.item} key={friend.id}>
            <FriendItem friend={friend} />
          </li>
        ))}
      </ul>
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
