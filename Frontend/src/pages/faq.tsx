import { useState } from 'react';
import styles from '../styles/faq.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqData = [
    {
      question: "DO I NEED TO SIGN-UP ?",
      answer: "Yes, you need to sign up to use ANI and access all its privacy-focused features."
    },
    {
      question: "HOW TO CONTACT ?",
      answer: "You can contact us through the CONTACT button in the header or visit our support page."
    },
    {
      question: "WHO IS THE DEVELOPER ?",
      answer: "ANI is developed by a dedicated team focused on privacy and secure communication."
    },
    {
      question: "HOW CAN I SIGN-UP ?",
      answer: "Click the SIGN UP button in the header to create your account and get started with ANI."
    },
    {
      question: "WHAT IS PRIVACY MODE ?",
      answer: "Privacy Mode allows you to chat without saving any history. Your conversations are completely private and temporary."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.logo} onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>ANI</h1>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <h2 className={styles.title}>FREQUENTLY ASKED QUESTIONS</h2>
        
        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItemContainer}>
              <div 
                className={styles.faqItem}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.question}>{faq.question}</span>
                <span className={`${styles.icon} ${openIndex === index ? styles.iconRotated : ''}`}>
                  +
                </span>
              </div>
              {openIndex === index && (
                <div className={styles.answer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
