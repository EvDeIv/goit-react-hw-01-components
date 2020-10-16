import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionItem.module.css";

export default function TransactionItem({ item }) {
  return (
    <>
      <td className={styles.td}>{item.type}</td>
      <td className={styles.td}>{item.amount}</td>
      <td className={styles.td}>{item.currency}</td>
    </>
  );
}

TransactionItem.propTypes = {
  items: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
