'use client';

import { motion } from 'framer-motion';
import { SiAmazonwebservices, SiSnowflake, SiDbt, SiGit, SiMysql, SiApacheairflow } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

const TECH_STACK = [
  { id: 'python', name: 'Python', icon: <FaPython size={64} />, color: 'hover:text-blue-600' },
  { id: 'aws', name: 'AWS', icon: <SiAmazonwebservices size={64} />, color: 'hover:text-orange-500' },
  { id: 'snowflake', name: 'Snowflake', icon: <SiSnowflake size={64} />, color: 'hover:text-blue-400' },
  { id: 'dbt', name: 'dbt', icon: <SiDbt size={64} />, color: 'hover:text-orange-400' },
  { id: 'git', name: 'Git', icon: <SiGit size={64} />, color: 'hover:text-red-500' },
  { id: 'sql', name: 'SQL', icon: <SiMysql size={64} />, color: 'hover:text-blue-600' },
  { id: 'airflow', name: 'Airflow', icon: <SiApacheairflow size={64} />, color: 'hover:text-green-500' },
  { id: 'gcp', name: 'GCP', icon: <SiGooglecloud size={64} />, color: 'hover:text-blue-600 hover:drop-shadow-lg' },
];

export default function SponsorGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', 'Space Grotesk Fallback', sans-serif" }}>Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and platforms I use for building data solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TECH_STACK.map((tech) => (
            <motion.div
              key={tech.id}
              className="card flex flex-col items-center justify-center p-8 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`transition-all duration-300 ${tech.color}`}>
                {tech.icon}
              </div>
              <span className="mt-4 text-lg font-semibold group-hover:text-foreground transition-colors duration-300" style={{ fontFamily: "'Space Grotesk', 'Space Grotesk Fallback', sans-serif" }}>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}