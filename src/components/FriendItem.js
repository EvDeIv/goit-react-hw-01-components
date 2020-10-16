import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendItem.module.css";

export default function FriendItem({ friend }) {
  return (
    <>
      <span
        className={friend.isOnline ? styles.statusGreen : styles.statusRed}
      ></span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </>
  );
}

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
