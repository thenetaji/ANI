import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.logo}>ANI</h1>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <h2 className={styles.title}>
          STILL HAVE QUESTIONS OR HAVING<br />
          TROUBLE ?
        </h2>

        {/* Let us know divider */}
        <div className={styles.divider}>
          <span className={styles.dividerLine}></span>
          <span className={styles.dividerText}>LET US KNOW</span>
          <span className={styles.dividerLine}></span>
        </div>

        {/* Action Buttons */}
        <div className={styles.actionSection}>
          <div className={styles.buttonsContainer}>
            <button className={styles.mailBtn}>MAIL US</button>
            <span className={styles.orText}>OR</span>
            <button className={styles.chatBtn}>HAVE A CHAT</button>
          </div>
          
          <p className={styles.replyText}>We will reply as soon as possible</p>
        </div>

      </main>
    </div>
  );
}
