import { AnimatedElement } from './AnimatedElement';
import { AnimatedText } from './AnimatedText';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

/**
 * SKILLS SECTION
 *
 * Display your technical skills organized by category.
 *
 * TO CUSTOMIZE:
 * - Edit the skillCategories array below
 * - Add/remove categories as needed
 * - Update the skills list within each category
 * - The layout will automatically adjust to your content
 */

export default function Skills() {
  // ===== EDIT YOUR SKILLS HERE =====
  const skillCategories = [
    {
      title: "Languages & Markup",
      skills: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Ruby",
        "C#",
        "SQL",
        "HTML5",
        "CSS3",
        "XAML",
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Next.js",
        "React",
        "Node.js",
        "Ruby on Rails",
        ".NET MAUI",
        "MVVM",
        "scikit-learn",
        "pandas",
        "numpy",
        "Chart.js",
        "Plotly",
        "matplotlib",
        "Tailwind CSS",
        "ASP.NET (Razor Pages, MVC, Blazor)",
      ]
    },
    {
      title: "AI / ML",
      skills: [
        "OpenAI API",
        "Random Forest",
        "Gradient Boosting",
        "feature engineering",
        "forecasting",
        "model evaluation",
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Azure App Service",
        "Docker",
        "GitHub Actions",
        "Developing Solutions for Microsoft Azure",
        "Designing and Implementing Microsoft DevOps Solutions",
      ]
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "SQLite",
        "Prisma ORM",
        "ActiveRecord",
      ]
    },
    {
      title: "Tools",
      skills: [
        "Git/GitHub",
        "Streamlit",
        "Power BI",
      ]
    },
  ];

  return (
    <section className={`${styles.skills} section`} id="skills">
      <div className="container">
        <AnimatedText
          element="h2"
          delay={0.1}
          className="section-title"
        >
          Technical Skills
        </AnimatedText>

        {/* Skills Grid */}
        <div className={styles.grid}>
          {skillCategories.map((category, index) => {
            return (
            <AnimatedElement
              key={index}
              element="div"
              delay={0.15 + (index * 0.08)}
              fadeDirection="bottom"
              offsetPx={40}
              scale={true}
              scaleFrom={0.5}
              useSpring={true}
              className={styles.category}
            >

              {/* Category Header */}
              <div className={styles.categoryHeader}>
                <h3>{category.title}</h3>
              </div>

              {/* Skills List with Staggered Badge Animations */}
              <motion.div
                className={styles.skillsList}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '0px 0px -200px 0px' }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className={styles.skillBadge}
                    variants={{
                      hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
                      visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

            </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}
