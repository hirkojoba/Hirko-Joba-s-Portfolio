import { useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { AnimatedText } from './AnimatedText';
import { AnimatedProjectCard } from './AnimatedProjectCard';
import { useOffset } from '../hooks/useOffset';
import styles from './Projects.module.css';

const projectIds = ['project-1', 'project-2', 'project-3', 'project-4'];

export default function Projects() {
  const ref = useRef(null);
  const rawOffsets = useOffset(projectIds);

  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const responsiveScale = isMobile ? 0.34 : 0.8;

  // Scroll progress tracking - starts from Hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 200%', 'start start'],
  });

  // Spring animation on scroll progress
  const stiffness = isMobile ? 120 : 220;
  const damping = isMobile ? 50 : 90;
  const progress = useSpring(scrollYProgress, { stiffness, damping });

  // Project data
  const projects = [
    {
      id: 1,
      name: 'FinTrack',
      icon: '💰',
      description: 'A comprehensive financial analysis tool that predicts future account balances, generates interactive charts, and provides AI-driven explanations of spending trends.',
      techStack: ['Ruby on Rails', 'Ruby', 'JavaScript', 'PostgreSQL', 'ActiveRecord', 'Chart.js', 'Python', 'scikit-learn', 'pandas', 'numpy', 'OpenAI API'],
      githubUrl: 'https://github.com/hirkojoba/FinTrack',
      liveUrl: 'https://fintrack-production-998b.up.railway.app/',
      image: '/images/fintrack.jpeg',
      imagePosition: 'center 8%',
    },
    {
      id: 2,
      name: 'Journi',
      icon: '✈️',
      description: 'An intelligent travel planning application that combines multiple transportation modes and user preferences to generate optimized itineraries.',
      techStack: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'OpenAI API', 'Azure App Service'],
      githubUrl: 'https://github.com/hirkojoba/Journi',
      liveUrl: 'https://journi-a8dsesf9h7efamfx.canadacentral-01.azurewebsites.net/',
      image: '/images/journi.jpeg',
    },
    {
      id: 3,
      name: 'PriceVision',
      icon: '📈',
      description: 'A data science project that applies machine learning to predict stock price movements and visualizes predictions with interactive charts.',
      techStack: ['Python', 'Streamlit', 'scikit-learn', 'pandas', 'numpy', 'matplotlib', 'Plotly', 'yfinance'],
      githubUrl: 'https://github.com/hirkojoba/PriceVision',
      liveUrl: 'https://pricevision-production.up.railway.app/',
      image: '/images/pricevision.jpeg',
      imagePosition: 'center 25%',
    },
    {
      id: 4,
      name: 'MedsConnect',
      icon: '💊',
      description: 'A cross-platform mobile healthcare application enabling patients and caregivers to seamlessly track medication adherence, manage schedules, and coordinate care in real-time.',
      techStack: ['C#', 'XAML', '.NET MAUI', 'MVVM', 'SQLite', 'Entity Framework Core'],
      githubUrl: 'https://github.com/hirkojoba/MedsConnect?tab=readme-ov-file',
      liveUrl: 'https://github.com/hirkojoba/MedsConnect/releases/tag/v1.0.0',
      image: '/images/medsconnect.png',
      imagePosition: 'center 35%',
    },
  ];

  // Offset tuning for each card (rotation, scale, fine-tune position)
  const OFFSET_TUNING = {
    'project-1': { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    'project-2': { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    'project-3': { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    'project-4': { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -50, dy: isMobile ? -110 : -10 },
  };

  // Combine raw offsets with tuning
  const offsets = Object.fromEntries(
    projectIds.map((id) => {
      const base = rawOffsets[id] || { x: 0, y: 0 };
      const t = OFFSET_TUNING[id];
      return [
        id,
        {
          x: base.x + t.dx,
          y: base.y + t.dy,
          rot: t.rot,
          s: t.s ?? 1,
        },
      ];
    })
  );

  return (
    <section className={`${styles.projects} section`} id="projects" ref={ref}>
      <div className="container">
        <AnimatedText element="h2" delay={0.1} className="section-title">
          Latest Projects
        </AnimatedText>

        {/* Background Decorative Text */}
        <div className={styles.backgroundText} aria-hidden="true">
          Latest Projects
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <AnimatedProjectCard
              key={project.id}
              project={project}
              offset={offsets[`project-${project.id}`]}
              progress={progress}
              gridId={`project-${project.id}`}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
