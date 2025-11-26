import vizziUi1 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-2-1.png';
import vizziUi2 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-2-2.png';
import vizziUi3 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-2-3.png';
import vizziUi4 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-2-4.png';
import vizziUi5 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-2-5.png';
import vizziUi6 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-2-6.png';

import vizziDashboard1 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-1-1.png';
import vizziDashboard2 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-1-2.png';
import vizziDashboard3 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-1-3.png';
import vizziDashboard4 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-1-4.png';
import vizziDashboard5 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-1-5.png';
import vizziDashboard6 from '../../assets/images/Vizzi/Vizzi-Backoffice-Dashboard-1-6.png';

import HighFidelity1 from '../../assets/images/S4NG/high-fidelity-1.png';
import HighFidelity2 from '../../assets/images/S4NG/high-fidelity-2.png';
import HighFidelity3 from '../../assets/images/S4NG/high-fidelity-3.png';

import Persona1 from '../../assets/images/S4NG/persona-1.png';
import Persona2 from '../../assets/images/S4NG/persona-2.png';
import Persona3 from '../../assets/images/S4NG/persona-3.png';
import Persona4 from '../../assets/images/S4NG/persona-4.png';

import Presentation1 from '../../assets/images/S4NG/presentation-1.png';
import Presentation2 from '../../assets/images/S4NG/presentation-2.png';
import Presentation3 from '../../assets/images/S4NG/presentation-3.png';
import Presentation4 from '../../assets/images/S4NG/presentation-4.png';

import UserResearch1 from '../../assets/images/S4NG/user-research-1.png';
import UserResearch2 from '../../assets/images/S4NG/user-research-2.png';
import UserResearch3 from '../../assets/images/S4NG/user-research-3.png';
import UserResearch4 from '../../assets/images/S4NG/user-research-4.png';
import UserResearch5 from '../../assets/images/S4NG/user-research-5.png';

import Wireflow1 from '../../assets/images/S4NG/wireflow-1.png';
import Wireflow2 from '../../assets/images/S4NG/wireflow-2.png';

import Prototype1 from '../../assets/images/S4NG/prototype-1.png';
import Prototype2 from '../../assets/images/S4NG/prototype-2.png';

import GameCard from '../../assets/images/S4NG/card-game.png';
import GameApp from '../../assets/images/S4NG/game-app.png';
import MindMap from '../../assets/images/S4NG/mind-map.png';
import Problem from '../../assets/images/S4NG/problem.png';
import headerImg from '../../assets/images/S4NG/S4NG-Header.png';
import Solution from '../../assets/images/S4NG/solution.png';
import ProjectDetails from './ProjectDetails';

export default function S4NG() {
  return (
    <ProjectDetails data={data}>
      {/* User Research */}
      <div className='flex flex-col gap-3'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          User Research
        </h3>
        <div>
          <p className='text-lg font-light leading-tight mb-4 max-w-[830px]'>
            Led a comprehensive research process using interviews, focus groups,
            shadowing, online surveys, and digital cultural probes to uncover
            user needs and identify pain points in inclusive education.
          </p>

          <div className='grid md:grid-cols-5 grid-cols-2 text-center gap-6 md:my-14 my-10'>
            <div className='space-y-4'>
              <div className='h-[72px] font-semibold w-full rounded-xl text-center flex items-center justify-center bg-[#B8FFD4]'>
                Interviews
              </div>
              <img src={UserResearch1} className='aspect-square object-cover' />
            </div>
            <div className='space-y-4'>
              <div className='h-[72px] font-semibold w-full rounded-xl text-center flex items-center justify-center bg-[#FFAA81]'>
                Focus Group
              </div>
              <img src={UserResearch2} className='aspect-square object-cover' />
            </div>
            <div className='space-y-4'>
              <div className='h-[72px] font-semibold w-full rounded-xl text-center flex items-center justify-center bg-[#B0BDF2]'>
                Shadowing Observation
              </div>
              <img src={UserResearch3} className='aspect-square object-cover' />
            </div>
            <div className='space-y-4'>
              <div className='h-[72px] font-semibold w-full rounded-xl text-center flex items-center justify-center bg-[#FFE380]'>
                Online Surveys
              </div>
              <img src={UserResearch4} className='aspect-square object-cover' />
            </div>
            <div className='space-y-4'>
              <div className='h-[72px] font-semibold w-full rounded-xl text-center flex items-center justify-center bg-[#FFD7FC]'>
                Digital Cultural Probes
              </div>
              <img src={UserResearch5} className='aspect-square object-cover' />
            </div>
          </div>
        </div>
      </div>

      {/* Information Architecture */}
      <div className='flex flex-col gap-6 md:mb-16 mb-8'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          Information Architecture
        </h3>

        {/* User Personas */}
        <div className='flex items-start'>
          <span className='text-lg leading-tight font-semibold text-[#565656]'>
            User Personas
          </span>
        </div>
        <p className='text-lg font-light leading-tight md:mb-14 max-w-[830px]'>
          Based on the personas, six different scenarios were created to
          illustrate how users might interact with the platform in real-life
          situations. Each scenario focuses on a specific feature or goal—like
          sharing personal stories, exploring gamified learning tools, receiving
          support for inclusive teaching, or accessing helpful resources. These
          scenarios were key to identifying user expectations and shaping the
          platform’s functionality around their needs.
        </p>

        <div className='md:my-14 my-10 grid md:grid-cols-2 grid-cols-1 gap-y-9 gap-x-6'>
          <div className='space-y-4'>
            <img src={Persona1} />
            <div className='font-light'>
              Flora is a blind Master's student in Mathematics who faces
              difficulties in accessing study materials. She wants to become a
              high school teacher and build a supportive and inclusive social
              circle.
            </div>
          </div>

          <div className='space-y-4'>
            <img src={Persona2} />
            <div className='font-light'>
              Marco, a member of the LGBTQIA+ community, seeks a respectful and
              accepting environment where his identity is recognized by both
              peers and faculty.
            </div>
          </div>
          <div className='space-y-4'>
            <img src={Persona3} />
            <div className='font-light'>
              Artur, a Philosophy professor, wants to make his classes more
              inclusive but struggles with a lack of guidance and the large
              number of students.
            </div>
          </div>
          <div className='space-y-4'>
            <img src={Persona4} />
            <div className='font-light'>
              Carla, a staff member, experiences mobility issues when accessing
              the library and aims to improve accessibility and comfort for all
              students.
            </div>
          </div>
        </div>
      </div>

      {/* User Scenarios */}
      <div className='space-y-3 mb-6'>
        <div className='flex items-start'>
          <span className='text-lg leading-tight font-semibold text-[#565656]'>
            User Scenarios
          </span>
        </div>
        <p className='text-lg font-light leading-tight md:mb-14 max-w-[830px]'>
          Based on the personas, six different scenarios were created to
          illustrate how users might interact with the platform in real-life
          situations. Each scenario focuses on a specific feature or goal—like
          sharing personal stories, exploring gamified learning tools, receiving
          support for inclusive teaching, or accessing helpful resources. These
          scenarios were key to identifying user expectations and shaping the
          platform’s functionality around their needs.
        </p>
      </div>

      {/* Requirements */}
      <div className='flex flex-col gap-3 md:mb-16 mb-8'>
        <h3 className='!text-xl !font-bold font-body text-[#565656] mb-6'>
          Requirements
        </h3>

        <div className='space-y-4 mb-6 max-w-[830px]'>
          <div className='flex items-start'>
            <span className='text-lg leading-tight font-light'>
              The platform's structure was designed around the following needs:
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Functional: Defines the main features and actions within the
              platform.
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Informational: Identifies what kind of content each page should
              display.
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Refined typography and spacing for dense data views.
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Usability & Experience: Ensures accessibility, compatibility with
              assistive technologies, keyboard navigation, and an intuitive user
              interface.
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Environment & Context: Adapts to different screen sizes, works
              with or without a camera or audio, and maintains high contrast for
              visibility.
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              User Needs: Simple and direct language, easy interaction, and
              tailored for students, professors, and staff from the University
              of Porto.
            </span>
          </div>

          <div className='flex flex-col items-start pt-10 space-y-1'>
            <span className='text-lg leading-tight mb-3 font-light'>
              The platform's structure was designed around the following needs:
            </span>

            <div className='flex items-start'>
              <span className='font-light mr-2 ml-1'>1.</span>
              <span className='text-lg leading-tight font-light'>
                Teaching & Learning
              </span>
            </div>
            <div className='flex items-start'>
              <span className='font-light mr-2 ml-1'>2.</span>
              <span className='text-lg leading-tight font-light'>
                Testimonials
              </span>
            </div>
            <div className='flex items-start'>
              <span className='font-light mr-2 ml-1'>3.</span>
              <span className='text-lg leading-tight font-light'>Games</span>
            </div>
            <div className='flex items-start'>
              <span className='font-light mr-2 ml-1'>4.</span>
              <span className='text-lg leading-tight font-light'>
                Literature
              </span>
            </div>
          </div>
        </div>

        <img src={MindMap} />
      </div>

      {/* Interface Design */}
      <div className='flex flex-col gap-3 md:mb-16 mb-8'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          Interface Design
        </h3>

        <div className='space-y-3 md:mb-14'>
          <div className='flex items-start'>
            <span className='text-lg leading-tight font-semibold text-[#565656]'>
              Wireflows
            </span>
          </div>
          <p className='text-lg font-light leading-tight md:mb-14 mb-6 max-w-[830px]'>
            Wireflows were developed to map out user journeys and reduce the
            number of clicks needed to reach content. The goal was to make
            access as simple and intuitive as possible.
          </p>

          <div className='flex flex-col gap-4'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mb-1'>
              <img src={Wireflow1} />
              <img src={Wireflow2} />
            </div>
            <p className='text-sm text-center'>
              Pages for sharing user stories and accessing inclusive teaching
              guidelines.
            </p>
          </div>
        </div>

        <div className='space-y-3 '>
          <div className='flex items-start'>
            <span className='text-lg leading-tight font-semibold text-[#565656]'>
              High-Fidelity Prototypes
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              University of Porto Branding and Selected Color Palette for the
              Platform
            </span>
          </div>
          <p className='text-lg font-light leading-tight md:mb-14 max-w-[830px]'>
            The chosen color palette aligns with the visual identity and
            branding guidelines of the University of Porto. It ensures
            consistency across the platform while promoting accessibility and
            inclusivity. The selected colors were carefully balanced to provide
            sufficient contrast, support readability, and maintain a clean,
            professional look suitable for an academic context.
          </p>

          <div className='flex flex-col gap-4'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mb-1'>
              <img src={Prototype1} />
              <img src={Prototype2} />
            </div>
            <p className='text-sm text-gray-700 text-center'>
              University of Porto Branding Guidelines and the Color Palette
              Chosen for the Platform
            </p>
          </div>
        </div>

        <p className='text-lg font-light leading-tight max-w-[830px] md:my-14 my-10'>
          By creating a high-fidelity prototype in Figma based on the wireflows
          and the low-fidelity version, the platform was given a more polished
          and realistic appearance. This allowed the project to move forward to
          initial usability testing. The prototype was tested with 8 potential
          users, including 3 professors and 5 students.
        </p>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mb-1'>
          <img src={HighFidelity1} />
          <img src={HighFidelity2} />
        </div>
        <div className='flex flex-col gap-4'>
          <img src={HighFidelity3} />
          <p className='text-sm text-gray-700 text-center'>
            High-Fidelity Prototype of the Skills for a Next Generation Platform
          </p>
        </div>
      </div>

      {/* Gamified Content */}
      <div className='flex flex-col gap-3 md:mb-16 mb-8'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          Gamified Content
        </h3>

        <div className='space-y-3 md:mb-14'>
          <p className='text-lg font-light leading-tight md:mb-14 max-w-[830px]'>
            The game development process began with collaborative sessions
            involving the Skills for a Next Generation team, using a
            brainstorming approach. These in-person sessions focused on
            presenting, discussing, and prototyping game concepts.
          </p>

          <div className='flex flex-col gap-4'>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-4 mb-1'>
              <img src={GameApp} />
              <img src={GameCard} />
            </div>
            <p className='text-sm text-center'>
              Game Co-Creation Session with the Skills for a Next Generation
              Design Team (Axis 4.2), Held In-Person
            </p>
          </div>
        </div>

        <div className='space-y-3'>
          <p className='text-lg font-light leading-tight mb-6 max-w-[830px]'>
            As part of the project, a game co-creation session was held with a
            sample of academic community members to test the games developed.
            This method encourages empathy and raises awareness among
            participants about the topics addressed in the games, while also
            supporting the learning of inclusive best practices in various
            contexts.
          </p>

          <p className='text-lg font-light leading-tight md:mb-14 max-w-[830px]'>
            All the games created by the Skills for a Next Generation team were
            presented and tested during the session, including the Treasure Hunt
            and Role Play games.
          </p>

          <div className='flex flex-col gap-4'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mb-1'>
              <img src={Presentation1} />
              <img src={Presentation2} />
              <img src={Presentation3} />
              <img src={Presentation4} />
            </div>
            <p className='text-sm text-gray-700 text-center'>
              Presentation and testing of the digital Treasure Hunt game and the
              Role Play card game
            </p>
          </div>
        </div>
      </div>
    </ProjectDetails>
  );
}

const data = {
  title: 'S4NG U.Porto | Accessible Platform',
  type: 'Eduction',
  year: '2024',
  headerImg,
  description:
    'Project carried out in the context of the master´s dissertation. This work addresses the creation of an accessible platform that aims to provide tools, informative and gamified content, to support the academic community in exclusive contexts.',
  problem:
    'The Skills for a Next Generation platform must offer an intuitive and accessible interface that enables University of Porto faculty to share and discover inclusive educational strategies, ensuring ease of use for diverse user needs.',
  problemImg: Problem,
  solution:
    'The solution offers a user-centred platform that facilitates content sharing among students, teachers and staff. It includes a feedback portal, sections for digital and physical games, and data-driven infographics presenting University of Porto statistics about inclusion and diversity.',
  solutionImg: Solution,
  tags: [
    {
      text: 'Visual Design',
      color: 'yellow',
    },
    {
      text: 'UX/UI Design',
      color: 'blue',
    },
  ],
  designExecution: [
    {
      imgSrc: vizziDashboard1,
      alt: 'Vizzi-Wireframe-Login',
    },
    {
      imgSrc: vizziDashboard2,
      alt: 'Vizzi-Wireframe-Main-Dashboard',
    },
    {
      imgSrc: vizziDashboard3,
      alt: 'Vizzi-Wireframe-Dashboard-2',
    },
    {
      imgSrc: vizziDashboard4,
      alt: 'Vizzi-Wireframe-Dashboard-3',
    },
    {
      imgSrc: vizziDashboard5,
      alt: 'Vizzi-Wireframe-Dashboard-4',
    },
    {
      imgSrc: vizziDashboard6,
      alt: 'Vizzi-Wireframe-Player',
    },
  ],
  // images: [
  //   {
  //     imgSrc: oldBackoffice,
  //     caption: 'Old Backoffice UI Screenshot',
  //   },
  //   {
  //     imgSrc: newBackoffice,
  //     caption: 'New Designed UI Mockup',
  //   },
  // ],
  additionalFeatures: [
    {
      imgSrc: vizziUi1,
      alt: 'Vizzi-Wireframe-Login',
    },
    {
      imgSrc: vizziUi2,
      alt: 'Vizzi-Wireframe-Main-Dashboard',
    },
    {
      imgSrc: vizziUi3,
      alt: 'Vizzi-Wireframe-Dashboard-2',
    },
    {
      imgSrc: vizziUi4,
      alt: 'Vizzi-Wireframe-Dashboard-3',
    },
    {
      imgSrc: vizziUi5,
      alt: 'Vizzi-Wireframe-Dashboard-4',
    },
    {
      imgSrc: vizziUi6,
      alt: 'Vizzi-Wireframe-Player',
    },
  ],
  finalDesigns: [
    {
      imgSrc: '',
      caption: 'The Backoffice in Streamlined',
    },
    {
      imgSrc: '',
      caption: 'New Designed UI Modular',
    },
  ],
  reflection: `Design plays a crucial role in promoting social inclusion by creating solutions that respect diversity and involve users throughout the process. Successful inclusive design relies on collaboration, continuous user research, and ethical practices to develop accessible, engaging, and meaningful experiences.

  Continuous feedback loops and iterative design will be essential to refine the platform and ensure it effectively meets the evolving needs of its community.`,
};
