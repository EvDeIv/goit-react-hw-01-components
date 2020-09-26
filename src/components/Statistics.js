import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function getRandomColor() {
  let r = function () {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${r()},${r()},${r()})`;
}

export default function Statistics({ title, stats }) {
  return (
    <>
      <section className={styles.statistics}>
        {title ? <h2 className={styles.title}>{title}</h2> : false}
        <ul className={styles.statList}>
          {stats.map((stat) => (
            <li
              className={styles.item}
              style={{ backgroundColor: getRandomColor() }}
              key={stat.id}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
