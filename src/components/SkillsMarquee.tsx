import React from 'react';
import { motion } from 'motion/react';

const skills = [
  { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "Go", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "GraphQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" },
  { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "Redis", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" },
  { name: "Vite", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" },
  { name: "Linux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
];

export const SkillsMarquee: React.FC = () => {
  // Duplicate the skills to create a seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden py-12">
      <motion.div
        className="flex gap-20 items-center whitespace-nowrap"
        animate={{
          x: [0, -3000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center justify-center group"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center transition-all duration-500 hover:scale-125">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
