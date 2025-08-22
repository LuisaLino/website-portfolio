import headerImg from '../../assets/images/True/True-Header.png';
import img1 from '../../assets/images/Via-Map/Via-Map-1.png';
import img2 from '../../assets/images/Via-Map/Via-Map-2.png';
import img3 from '../../assets/images/Via-Map/Via-Map-3.png';
import img4 from '../../assets/images/Via-Map/Via-Map-4.png';
import ProjectDetails from './ProjectDetails';

export default function TrueProject() {
  return (
    <ProjectDetails data={data}>
      {/* My Role */}
      <div className='flex flex-col gap-3 mb-16 max-w-[830px]'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>My Role</h3>
        <div>
          <p className='text-lg font-light leading-tight mb-4'>
            I contributed to multiple phases of the project, including:
          </p>
          <div className='space-y-3'>
            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg font-light leading-tight'>
                Developing the <strong>project's visual identity</strong>.
              </span>
            </div>

            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg font-light leading-tight'>
                Identifying and understanding the needs of different user types.
              </span>
            </div>

            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg font-light leading-tight'>
                Defining the <strong>information architecture</strong>.
              </span>
            </div>

            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg font-light leading-tight mb-4'>
                Designing a simple and intuitive <strong>backoffice</strong> for
                managing users, news, and the newspapers themselves.
              </span>
            </div>

            <div className='flex items-start'>
              <span className='font-title mr-3'>→</span>
              <span className='text-lg font-light leading-tight mb-4'>
                Creating flexible{' '}
                <strong>design templates for school newspapers</strong> ,
                enabling each school to customize and build their own version.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Identity */}
      <div className='flex flex-col gap-6 mb-16'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          Visual Identity
        </h3>
      </div>

      {/* Configuration Interface */}
      <div className='flex flex-col gap-6 !mb-16 max-w-[830px]'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          Configuration Interface
        </h3>
        <p className='text-lg font-light leading-tight'>
          A configuration interface was designed to manage the User Profile,
          School Profile, Contacts, Headline Template, and Sections Template all
          in one place.
        </p>
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
  title: 'True Project | Platform for Creating School Newspapers  ',
  headerImg,
  type: 'Education',
  year: '2021',
  description:
    'The TRUE Project is a platform that helps in the construction of school newspapers in Portuguese. The objective was to promote the revitalisation of writing by using tools to evaluate the veracity of published news and to contextualise new content.',
  problem:
    'Students working on Portuguese school newspapers face challenges verifying news accuracy and providing context, which impacts the quality and trustworthiness of their writing.',
  solution:
    'The TRUE Project offers a platform with tools that help students assess news credibility and contextualize information, supporting the creation of more reliable and engaging school newspapers.',
  tags: [
    {
      text: 'Visual Design',
      color: 'yellow',
    },
    {
      text: 'Graphic Design',
      color: 'pink',
    },
    {
      text: 'UX/UI Design',
      color: 'blue',
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
    'This project was a UX/UI challenge that required balancing consistency with flexibility. From defining a visual identity to designing an intuitive backoffice and customizable templates, every step was guided by user needs. Collaborating closely with stakeholders and incorporating feedback helped ensure a solution that was both functional and user-friendly.',
};
