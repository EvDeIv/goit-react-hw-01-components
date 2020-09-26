import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

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
              <td className={styles.td}>{item.type}</td>
              <td className={styles.td}>{item.amount}</td>
              <td className={styles.td}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
