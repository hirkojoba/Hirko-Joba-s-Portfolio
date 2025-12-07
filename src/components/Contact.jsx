import { AnimatedElement } from './AnimatedElement';
import { AnimatedText } from './AnimatedText';
import WordCarousel from './WordCarousel';
import styles from './Contact.module.css';

/**
 * CONTACT SECTION
 *
 * Simple, clean contact section for recruiters to reach you.
 *
 * TO CUSTOMIZE:
 * - Update your email address below
 * - Optionally add LinkedIn, GitHub, or other social links
 * - Keep it simple and professional
 */

export default function Contact() {
  // ===== EDIT YOUR CONTACT INFO HERE =====
  const contactInfo = {
    email: "hirkojoba7@gmail.com",
    message: "I'm currently open to new opportunities and would love to hear from you. Whether you have a question about my work or want to discuss a potential role, feel free to reach out!",

    // Optional: Add your social links here
    socialLinks: [
      // Uncomment and customize these as needed:
      // { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "linkedin" },
      // { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    ]
  };

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className="container">
        <AnimatedText
          element="h2"
          delay={0.1}
          className="section-title"
        >
          Let's Connect
        </AnimatedText>

        <AnimatedElement
          element="div"
          delay={0.2}
          fadeDirection="bottom"
          offsetPx={50}
          className={styles.content}
        >

          {/* Contact Message */}
          <p className={styles.message}>
            {contactInfo.message}
          </p>

          {/* Email Text */}
          <div className={styles.emailText}>
            <div>Email Me!</div>
            <div>{contactInfo.email}</div>
          </div>

          {/* Social Icon Buttons */}
          <div className={styles.socialIcons}>
            <a
              href={`mailto:${contactInfo.email}`}
              className={styles.iconLink}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/hirko-joba-8204a8312/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          {/* Optional Social Links */}
          {contactInfo.socialLinks.length > 0 && (
            <div className={styles.socialLinks}>
              {contactInfo.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

        </AnimatedElement>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>
            &copy; {new Date().getFullYear()} Hirko Joba · I love to{' '}
            <WordCarousel words={['build', 'create', 'design', 'code']} interval={2500} /> amazing things.
          </p>
        </footer>

      </div>
    </section>
  );
}
