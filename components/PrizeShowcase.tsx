"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Shuffle } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Real-Time Data Pipeline",
    description: "Built a scalable real-time data pipeline using Apache Kafka and Spark Streaming to process millions of events per day.",
    icon: <Shuffle className="w-12 h-12 text-blue-400" />,
  },
  {
    id: 2,
    title: "Cloud Data Lakehouse",
    description: "Designed and implemented a cloud-based data lakehouse on AWS with Glue, S3, and Redshift for unified analytics.",
    icon: <Cloud className="w-12 h-12 text-green-400" />,
  },
  {
    id: 3,
    title: "Automated ETL Framework",
    description: "Developed a modular ETL framework in Python and Airflow to automate data ingestion, transformation, and loading.",
    icon: <Database className="w-12 h-12 text-yellow-400" />,
  },
];

export default function PrizeShowcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', 'Space Grotesk Fallback', sans-serif" }}>
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of impactful data engineering projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg p-8 flex flex-col items-center border shadow-md"
            >
              {project.icon}
              <h3 className="text-2xl font-bold mt-4 mb-2" style={{ fontFamily: "'Space Grotesk', 'Space Grotesk Fallback', sans-serif" }}>{project.title}</h3>
              <p className="text-muted-foreground text-center">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
