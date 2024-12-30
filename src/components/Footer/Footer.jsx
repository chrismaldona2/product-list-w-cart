import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      Developed by&nbsp;
      <a
        href="https://github.com/chrismaldona2"
        target="_blank"
        className={styles.footer_link}
      >
        Christian
      </a>
    </footer>
  );
}
