import backofficeInterface from '../../assets/images/True/Backoffice-Interface.png';
import interface1 from '../../assets/images/True/Interface-1.png';
import interface2 from '../../assets/images/True/Interface-2.png';
import interface3 from '../../assets/images/True/Interface-3.png';
import interface4 from '../../assets/images/True/Interface-4.png';
import templateExample from '../../assets/images/True/Template-Example.png';
import headerImg from '../../assets/images/True/True-Header.png';
import img1 from '../../assets/images/True/True-Project-1.png';
import img2 from '../../assets/images/True/True-Project-2.png';
import img3 from '../../assets/images/True/True-Project-3.png';
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
        <div className='grid grid-cols-2 gap-6'>
          <img
            className='lg:aspect-auto col-span-2 aspect-square object-cover'
            src={img1}
          />
          <img
            className='lg:aspect-auto aspect-square object-cover'
            src={img2}
          />
          <img
            className='lg:aspect-auto aspect-square object-cover'
            src={img3}
          />
        </div>
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
        <div className='grid grid-cols-2'>
          <img
            className='lg:aspect-auto aspect-square object-cover'
            src={interface1}
          />
          <img
            className='lg:aspect-auto aspect-square object-cover'
            src={interface2}
          />
          <img
            className='lg:aspect-auto aspect-square object-cover'
            src={interface3}
          />
          <img
            className='lg:aspect-auto aspect-square object-cover'
            src={interface4}
          />
        </div>
      </div>

      {/* Backoffice Interface */}
      <div className='flex flex-col gap-3 mb-16'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          Backoffice Interface
        </h3>
        <img
          className='lg:aspect-auto aspect-square object-cover'
          src={backofficeInterface}
        />
      </div>

      {/* Template Example */}
      <div className='flex flex-col gap-3 mb-16'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>
          Template Example
        </h3>
        <img
          className='lg:aspect-auto aspect-square object-cover'
          src={templateExample}
        />
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
  reflection:
    'This project was a UX/UI challenge that required balancing consistency with flexibility. From defining a visual identity to designing an intuitive backoffice and customizable templates, every step was guided by user needs. Collaborating closely with stakeholders and incorporating feedback helped ensure a solution that was both functional and user-friendly.',
};
