import React, { useEffect, useMemo, useState } from 'react';

type Props = {};

type Project = {
  name: string;
  description: string;
  link: string;
};

export default function Projects({}: Props) {
  const projects: Project[] = useMemo(
    () => [
      {
        name: 'AMYP',
        description:
          'Venture capital fund focused on the mobility, space, blockchain, and artificial intelligence sectors',
        link: 'https://amyp-ventures.com',
      },
      {
        name: 'Pollitt & Partners',
        description:
          'Brand, design and creative agency, delivering inspiring work which drives progress: for business, people, culture and society',
        link: 'https://pollittandpartners.com',
      },
      {
        name: 'Duke & Duck',
        description:
          'Emmy award-winning content studio focused on brand, editorial, and documentary animation and motion graphics',
        link: 'https://dukeduck.com',
      },
      {
        name: 'Adero Partners',
        description:
          'Wealth management services provider to high-net-worth individuals and families',
        link: 'https://aderopartners.com',
      },
      {
        name: 'Stonewall Housing',
        description:
          'Specialist LGBTQ+ housing advice and support provider',
        link: 'https://stonewallhousing.org',
      },
      {
        name: 'Earlsgate',
        description:
          'Developer specialising in country houses and estates',
        link: 'https://earlsgate.com',
      },
      {
        name: 'Intersoft',
        description:
          'Custom tool for carrier management for eCommerce',
        link: 'https://intersoft.co.uk/partner-matching-tool/',
      },
    ],
    []
  );

  const [activeProject, setActiveProject] = useState<Project | null>(
    null
  );
  const [isDescriptionVisible, setDescriptionVisible] =
    useState<boolean>(false);

  useEffect(() => {
    // Set the first project as active on component mount
    setActiveProject(projects[0]);
    setDescriptionVisible(true); // Show description on mount
  }, [projects]); // Empty dependency array ensures this effect runs only once on mount

  const handleProjectClick = (project: Project) => {
    setDescriptionVisible(false); // Hide description before changing project
    setActiveProject(project);
    setDescriptionVisible(true); // Show description after changing project
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="text-fs-title">Recent Projects</h2>
        <p className="font-regular text-fs-medium md:w-1/2">
          custom wordpress websites / php / front-end libraries / 3rd
          party integrations
        </p>
        <div className="flex font-fs-list gap-10">
          <div className="projects__list md:w-3/5">
            <ul className="text-fs-list">
              {projects.map((project) => (
                <li key={project.name}>
                  <button
                    className="hidden md:block text-left project-title"
                    onClick={() => handleProjectClick(project)}
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
                    className={'text-outline md:hidden'}
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="projects__description hidden md:block text-grey-light md:w-2/5 font-regular relative">
            {projects.map((project) => (
              <div
                key={project.name}
                className={`project-wrapper sticky top-[63px]`}
              >
                <div
                  className={`project absolute top-0 left-0 duration-200 ease-in-out ${
                    activeProject?.name === project.name
                      ? 'opacity-1'
                      : 'opacity-0 pointer-events-none invisible'
                  }`}
                >
                  <p className="!mb-1 text-fs-medium">
                    {' '}
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="relative link-underline text-fs-normal"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
