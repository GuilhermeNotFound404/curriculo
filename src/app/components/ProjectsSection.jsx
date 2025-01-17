"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Auxiliar Adm. Grupo Martinelli",
    description: "Grupo Martinelli · Estágio",
    image: "/images/projects/martinelli.png",
    tag: ["Tudo", "Adm"],
    gitUrl: "/",
    previewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7286090606857117696/",
  },
  {
    id: 2,
    title: "Auxiliar Adm. 4TR Soluções",
    description: "4TR Soluções · Estágio",
    image: "/images/projects/solu.jpg",
    tag: ["Tudo", "Adm"],
    gitUrl: "/",
    previewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7286092415956832256/",
  },
  {
    id: 3,
    title: "Auxiliar Herbicida - Tietê Agroindustrial",
    description: "Tietê Agroindustrial S.A. · Tempo integral",
    image: "/images/projects/herbi.jpg",
    tag: ["Tudo", "Outros"],
    gitUrl: "/",
    previewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7286093605566357504/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Tudo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Experiências
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Tudo"
          isSelected={tag === "Tudo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Adm"
          isSelected={tag === "Adm"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Outros"
          isSelected={tag === "Outros"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
