import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type Props = {
  data?: {
    name: string;
    description: string;
    link: string;
  }[];

  works?: {
    other?: boolean;
  };
};

type Project = {
  name: string;
  description: string;
  link: string;
};

export default function Projects({ data, works }: Props) {
  const [activeProject, setActiveProject] = useState<Project | null>(
    null
  );
  const [isDescriptionVisible, setDescriptionVisible] =
    useState<boolean>(false);

  useEffect(() => {
    // Set the first project as active on component mount
    setActiveProject(data ? data[0] : null);
    setDescriptionVisible(true); // Show description on mount
  }, [data]); // Update dependency array to 'data'

  const handleProjectClick = (project: Project) => {
    setDescriptionVisible(false); // Hide description before changing project
    setTimeout(() => {
      setActiveProject(project);
      setDescriptionVisible(true); // Show description after changing project
    }, 200); // Use a delay to avoid flickering during the transition
  };

  return (
    <section
      className={`projects `}
      id={`${works?.other ? 'other-works' : 'projects'}`}
    >
      <div className="container">
        <h2
          className={`text-fs-title leading-none ${
            works?.other ? 'text-right' : ''
          }`}
        >
          {works?.other ? 'Other Works' : 'Projects'}
        </h2>
        <p
          className={`font-regular text-fs-medium md:w-1/2 ${
            works?.other ? 'text-right ml-auto' : ''
          }`}
        >
          {works?.other
            ? 'front-end libraries / 3rd party integrations'
            : <>
              front-end libraries / 3rd party integrations
              <br />
              custom WordPress websites / PHP
            </>}
        </p>
        <div
          className={`flex gap-10 ${works?.other ? 'flex-row-reverse' : ''}`}
        >
          <div className={`projects__list md:w-3/5`}>
            <ul className="text-fs-list">
              {data?.map((project) => (
                <li key={project.name}>
                  <button
                    className={`hidden md:block text-left project-title`}
                    onClick={() =>
                      activeProject?.name !== project.name
                        ? handleProjectClick(project)
                        : null
                    }
                  >
                    <span
                      className={
                        activeProject?.name === project.name
                          ? 'active'
                          : 'inactive'
                      }
                    >
                      {project.name}
                    </span>
                  </button>
                  <a
                    className={`inactive md:hidden`}
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            className={`projects__description hidden md:block text-grey-light font-regular relative md:w-2/5`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isDescriptionVisible ? 1 : 0 }}
            transition={{ duration: 0.2, ease: 'circOut' }}
          >
            {activeProject && (
              <div className={`project-wrapper sticky top-[63px]`}>
                <div className={`project`}>
                  <p className="!mb-1 text-fs-medium">
                    {' '}
                    {activeProject.description}
                  </p>
                  <a
                    href={activeProject.link}
                    className="relative link-underline text-fs-normal"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
