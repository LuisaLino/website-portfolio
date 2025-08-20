import img1 from '../../assets/images/Via-Map/Via-Map-1.png';
import img2 from '../../assets/images/Via-Map/Via-Map-2.png';
import img3 from '../../assets/images/Via-Map/Via-Map-3.png';
import img4 from '../../assets/images/Via-Map/Via-Map-4.png';
import headerImg from '../../assets/images/Via-Map/via-map-header.png';
import ProjectDetails from './ProjectDetails';

export default function ViaMap() {
  return (
    <ProjectDetails data={data}>
      {/* My Role */}
      <div className='flex flex-col gap-3 mb-16 max-w-[830px]'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>My Role</h3>
        <div>
          <p className='text-lg font-light leading-tight mb-4'>
            As the lead UX/UI Designer, I collaborated closely with Product
            Owners, Project Managers, Engineers, and Workflow Experts to define
            user needs and translate them into a seamless design.
          </p>
          <p className='text-lg font-light leading-tight'>
            I facilitated design workshops, created wireframes, interactive
            prototypes, and iterated designs based on feedback, ensuring
            alignment with business goals and technical feasibility.
          </p>
        </div>
      </div>

      {/* UX Priorities */}
      <div className='flex flex-col gap-6 mb-16'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          UX Priorities
        </h3>
        <div className='space-y-3'>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg font-light leading-tight'>
              Visual-first interface for intuitive drag-and-drop building
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg font-light leading-tight'>
              Scalable canvas that supports everything from simple to complex
              workflows
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg font-light leading-tight'>
              Focused UI that avoids overwhelming the user
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg font-light leading-tight'>
              Technical compliance without compromising usability
            </span>
          </div>
        </div>

        {/* <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6'>
            <div className='flex items-start'>
              <span className='text-yellow-600 mr-2'>⚠️</span>
              <div>
                <span className='font-semibold text-yellow-800'>Note:</span>
                <span className='text-yellow-800 text-sm ml-1'>
                  Inputs and outputs were a required part of each step due to
                  backend constraints. While technically necessary, they often
                  confused users or cluttered the UI. We reduced their
                  visibility where possible, grouping advanced properties into
                  collapsible sections — and plan to simplify further in future
                  releases.
                </span>
              </div>
            </div>
          </div> */}

        <div className='mt-6'>
          <div className='flex items-start'>
            <div>⚠️</div>
            <div className='text-md font-light ml-2'>
              <span>Note:</span>
              <span className='ml-1'>
                Inputs and outputs were a required part of each step due to
                backend constraints. While technically necessary, they often
                confused users or cluttered the UI. We reduced their visibility
                where possible, grouping advanced properties into collapsible
                sections — and plan to simplify further in future releases.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* UI Design Highlights */}
      <div className='flex flex-col gap-6 !mb-16 max-w-[830px]'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          UI Design Highlights
        </h3>
        <div className='space-y-4'>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <div className='text-lg leading-tight font-light'>
              <span>Color proposal:</span>
              <span>
                {' '}
                The color palette was carefully chosen to balance clarity and
                calm. Soft blues and greens promote concentration and
                confidence, while vibrant accent colors (pink and purple)
                highlight actionable elements, such as decision-making tasks and
                workflows, drawing the user's attention.
              </span>
            </div>
          </div>

          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Clean typography and generous spacing improve readability and
              reduce cognitive load.
            </span>
          </div>

          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Modular card layouts help organize workflow steps distinctly but
              cohesively.
            </span>
          </div>
        </div>
      </div>

      {/* High-Fidelity Snapshots */}
      <div className='flex flex-col gap-3 mb-16'>
        <h3 className='!text-xl !font-bold font-body text-[#565656] mb-6'>
          High-Fidelity Snapshots
        </h3>

        <div className='space-y-3 mb-6'>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Workflow steps are color-coded by type and status
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Step configuration is inline and contextual
            </span>
          </div>
          <div className='flex items-start'>
            <span className='font-title mr-3'>→</span>
            <span className='text-lg leading-tight font-light'>
              Workflow logic is easily scannable and editable
            </span>
          </div>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
          {data.images.map((item, index) => (
            <div key={index} className='text-center'>
              <img src={item.src} />
              <p className='text-sm text-gray-700'>{item.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Went Well & Opportunities */}
      <div className='flex flex-col gap-16 mb-16'>
        <div>
          <h3 className='!text-2xl font-body font-semibold !mb-6'>
            What Went Well
          </h3>
          <div className='space-y-3'>
            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg leading-tight font-light'>
                Fast and intuitive workflow creation
              </span>
            </div>
            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg leading-tight font-light'>
                Visual logic helped bridge technical and non-technical users
              </span>
            </div>
            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg leading-tight font-light'>
                Onboarding became easier with visual guidance
              </span>
            </div>
            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg leading-tight font-light'>
                Strong collaboration with PO/PMs kept scope aligned with needs
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className='!text-2xl font-body font-semibold !mb-6'>
            Opportunities for Improvement
          </h3>
          <div className='space-y-3'>
            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg leading-tight font-light'>
                Simplify step configuration (esp. inputs/outputs)
              </span>
            </div>
            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg leading-tight font-light'>
                Add a "simple" vs "advanced" editing mode
              </span>
            </div>
            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg leading-tight font-light'>
                More usability testing in production contexts
              </span>
            </div>
          </div>
        </div>
      </div>
    </ProjectDetails>
  );
}

const data = {
  title: 'VIA-MAP | Workflow Designer',
  headerImg,
  type: 'Technology',
  year: '2024/2025',
  description:
    'First-time design of VIA-MAP’s Workflow Designer — a flexible interface for creating media workflows. Designed to empower broadcast engineers and operations teams to visually orchestrate ingest, QC, transcode, and playout processes without writing code.',
  problem:
    'Many organizations struggle with inefficient workflow management due to lack of clear visualization and customization options, leading to communication gaps, delays, and errors in process execution.',
  solution:
    'Workflow Designer provides an easy-to-use, visual platform where users can design, modify and monitor workflows dynamically. It bridges the gap between business requirements and technical execution.',
  tags: [
    {
      text: 'Visual Design',
      color: 'yellow',
    },
    {
      text: 'UX/UI Design',
      color: 'blue',
    },
    {
      text: 'User Research',
      color: 'green',
    },
  ],
  images: [
    {
      src: img1,
      caption: 'Fully embedded within the VIA-MAP ecosystem.',
    },
    {
      src: img2,
      caption:
        'New workflow initialized with input and output nodes pre-placed.',
    },
    {
      src: img3,
      caption: 'Visual representation of multiple task types in a workflow.',
    },
    {
      src: img4,
      caption: 'Example of a complete and correctly connected workflow.',
    },
  ],
  reflection:
    'Designing this tool from scratch required close alignment with technical constraints and user expectations. Despite some unavoidable complexity, we created a scalable, visual-first experience that empowers a wider range of users to manage media workflows effectively.',
};
