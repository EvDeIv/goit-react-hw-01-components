import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";
import TransactionItem from "./TransactionItem";

export default function TransactionHistory({ items }) {
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {items.map((item) => (
            <tr className={styles.tr} key={item.id}>
              <TransactionItem item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
