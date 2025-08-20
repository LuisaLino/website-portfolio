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

import headerImg from '../../assets/images/Vizzi/Vizzi-Header.png';
import vizziHighFidelity from '../../assets/images/Vizzi/Vizzi-High-Fidelity.png';
import newBackoffice from '../../assets/images/Vizzi/Vizzi-New-Backoffice.png';
import oldBackoffice from '../../assets/images/Vizzi/Vizzi-Old-Backoffice.png';
import ProjectDetails from './ProjectDetails';

export default function Vizzi() {
  return (
    <ProjectDetails data={data}>
      {/* My Role */}
      <div className='flex flex-col gap-3 mb-16 max-w-[830px]'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>My Role</h3>
        <div>
          <p className='text-lg font-light leading-tight mb-4'>
            As a UX/UI Designer on this project, I worked across the backoffice
            aspects of the platform. <br />
            My responsibilities included:
          </p>
          <div className='space-y-3'>
            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg font-light leading-tight'>
                Mapping and redesigning key user flows across the backoffice.
              </span>
            </div>

            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg font-light leading-tight'>
                Creating wireframes to define a scalable, modular architecture.
              </span>
            </div>

            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg font-light leading-tight'>
                Designing high-fidelity mockups that modernized the interface
                while maintaining functionality.
              </span>
            </div>

            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg font-light leading-tight mb-4'>
                Aligning design patterns across the system for a consistent,
                professional experience.
              </span>
            </div>

            <div className='flex items-start'>
              <span className='text-lg font-light leading-tight'>
                While I also contributed to frontend user interface concepts,
                the majority of my focus was on the backoffice used by
                administrators and content managers.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* UX Strategy */}
      <div className='flex flex-col gap-6 mb-16 max-w-[830px]'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>UX Strategy</h3>
        <div className='space-y-3'>
          <div className='flex items-start'>
            <span className='text-lg leading-tight font-semibold text-[#565656]'>
              Development Team Collaboration
            </span>
          </div>
          <p className='text-lg font-light leading-tight'>
            Worked with developers and support teams to understand administrator
            pain points, prioritize core tasks, and identify overlooked UX
            issues.
          </p>
        </div>

        <div className='space-y-3'>
          <div className='flex items-start'>
            <span className='text-lg leading-tight font-semibold text-[#565656]'>
              <strong>Architecture & Workflow Mapping</strong>
            </span>
          </div>
          <p className='text-lg font-light leading-tight'>
            Redefined the navigation by analyzing the current information
            structure to create clearer paths to Content Management, User Roles
            & Permissions, and Settings & Configurations.
          </p>
        </div>
      </div>

      {/* UI Design Execution */}
      <div className='flex flex-col gap-6 mb-8 max-w-[830px]'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          UI Design Execution
        </h3>
        <div className='space-y-4'>
          <div className='flex items-start'>
            <div className='text-lg leading-tight font-light'>
              <span className='font-semibold text-[#565656]'>Wireframes</span>
            </div>
          </div>
          <div>
            <p className='text-lg leading-tight font-light'>
              Created wireframes to validate simplified layouts, including:
            </p>
          </div>

          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Sidebar-based navigation
            </span>
          </div>

          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Editable content tables with inline actions
            </span>
          </div>

          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Tabbed settings interface to declutter complex forms
            </span>
          </div>
        </div>
      </div>

      {/* Design System Grid */}
      <div className='flex flex-col gap-3 mb-16'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-8'>
          {data.designExecution.map((item, index) => (
            <div key={index} className='text-center'>
              <img src={item.imgSrc} />
            </div>
          ))}
        </div>
      </div>

      {/* High-Fidelity UI */}
      <div className='flex flex-col gap-3 mb-16'>
        <h3 className='!text-xl !font-bold font-body text-[#565656] mb-6'>
          High-Fidelity UI
        </h3>

        <div className='space-y-3 mb-6'>
          <div className='flex items-start'>
            <span className='text-lg leading-tight font-light'>
              Focused on improving clarity, space usage, and visual hierarchy.
              Key UI Changes:
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Restructured the dashboard to highlight recent activity and quick
              actions.
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Consolidated tools under clear sections with consistent
              interaction patterns.
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
              Used color, iconography, and feedback states to guide user
              actions.
            </span>
          </div>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
          {data.images.map((item, index) => (
            <div key={index} className='text-center'>
              <img src={item.imgSrc} />
              <p className='text-sm text-gray-700'>{item.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Frontend UI Changes */}
      <div className='flex flex-col gap-3 mb-16'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          Additional Frontend UI Changes
        </h3>
        <p className='text-lg font-light leading-tight mb-6 max-w-[830px]'>
          In addition to the backoffice, I contributed with wireframe screens
          and high-fidelity UI mockups for the end-user frontend experience.
        </p>

        <div>
          <div className='grid grid-cols-3 gap-4 mb-4'>
            {data.additionalFeatures.map((item, index) => (
              <div key={`additional_ui_${index}`} className='text-center'>
                <img src={item.imgSrc} alt={item.alt} />
              </div>
            ))}
          </div>
          <p className='text-sm text-gray-700 text-center'>
            Frontend Wireframes
          </p>
        </div>
      </div>

      {/* Final Designs */}
      <div className='flex flex-col gap-4 mb-16'>
        <img src={vizziHighFidelity} />
        <p className='text-sm text-gray-700 text-center'>
          High-Fidelity Frontend Template for Vizzi
        </p>
      </div>
    </ProjectDetails>
  );
}

const data = {
  title: 'Vizzi | Backoffice UI Redesign',
  headerImg,
  type: 'Technology',
  year: '2024',
  description:
    'I led the redesign of Vizzi’s backoffice interface — the admin platform for managing video content and distribution. The goal was to enhance clarity, structure, and usability in an otherwise complex environment used by content managers and administrators.',
  problem:
    'Vizzi’s backoffice was functionally complete but visually outdated, with fragmented navigation and cluttered interfaces that made content management and workflows difficult for administrators.',
  solution:
    'Redesigned the backoffice with simplified workflows, clearer navigation, and a consistent visual hierarchy to improve usability and scalability.',
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
  images: [
    {
      imgSrc: oldBackoffice,
      caption: 'Old Backoffice UI Screenshot',
    },
    {
      imgSrc: newBackoffice,
      caption: 'New Designed UI Mockup',
    },
  ],
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
  reflection: `Redesigning Vizzi´s backoffice required balancing technical complexity with design simplicity. By focusing on workflows and clarity rather than just aesthetics, I helped create a system that supports both power users and new admins.

  If I had more time, I would have conducted usability tests with a different range of client types, small creators and enterprise broadcasters, to further validate cross-tier flexibility.`,
};
