import { useState } from 'react';
import styles from '../styles/signin.module.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signin logic
    console.log({ email, password, acceptPolicy });
    alert('Sign in successful!');
    // Close the window if opened in popup
    if (window.opener) {
      window.close();
    }
  };

  const handleSignUpClick = () => {
    if (window.opener) {
      window.location.href = '/signup';
    } else {
      window.open('/signup', '_blank', 'width=800,height=900');
    }
  };

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.welcomeSection}>
        <p className={styles.welcomeText}>Glad to see you here again</p>
      </div>

      {/* Right Section - Form */}
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>SIGN - IN</h1>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>E-mail</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="policy"
                className={styles.checkbox}
                checked={acceptPolicy}
                onChange={(e) => setAcceptPolicy(e.target.checked)}
                required
              />
              <label htmlFor="policy" className={styles.checkboxLabel}>
                I accept company's privacy policy
              </label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              SIGN IN
            </button>
          </form>

          <p className={styles.switchText}>
            Don't have an account?{' '}
            <span className={styles.switchLink} onClick={handleSignUpClick}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
