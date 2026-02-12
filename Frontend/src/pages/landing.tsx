import styles from '../styles/landing.module.css';

export default function Landing() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSignUp = () => {
    window.open('/signup', '_blank', 'width=800,height=900');
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.logo} onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>ANI</h1>
        <div className={styles.headerButtons}>
          <button className={styles.signupBtn} onClick={handleSignUp}>SIGN UP</button>
          <button className={styles.contactBtn} onClick={() => scrollToSection('contact')}>CONTACT</button>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <p className={styles.intro}>INTRODUCING ANI</p>
        <h2 className={styles.heading}>
          THE BEST PRIVACY<br />
          BASED CHAT APP
        </h2>
      </main>
    </div>
  );
}
