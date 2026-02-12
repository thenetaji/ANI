import styles from '../styles/contact.module.css';

export default function Contact() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMailUs = () => {
    window.location.href = 'mailto:twinzler@proton.me?subject=Support Request';
  };

  const handleChat = () => {
    window.location.href = 'https://discord.gg/1406246927300821032';
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.logo} onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>ANI</h1>
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
            <button className={styles.mailBtn} onClick={handleMailUs}>MAIL US</button>
            <span className={styles.orText}>OR</span>
            <button className={styles.chatBtn} onClick={handleChat}>HAVE A CHAT</button>
          </div>
          
          <p className={styles.replyText}>We will reply as soon as possible</p>
        </div>

      </main>
    </div>
  );
}
