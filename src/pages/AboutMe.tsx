import LuisaCv from '../assets/LuisaLino-CV-2025.pdf';
import iconLavender from '../assets/images/Icon_Lavender.svg';
import iconSky from '../assets/images/Icon_Sky.svg';
import iconSand from '../assets/images/Icon_sand.svg';
import imgGrid1 from '../assets/images/grid_image_1.png';
import imgGrid2 from '../assets/images/grid_image_2.png';
import imgGrid3 from '../assets/images/grid_image_3.png';
import imgGrid4 from '../assets/images/grid_image_4.png';
import imgGrid5 from '../assets/images/grid_image_5.png';
import imgGrid6 from '../assets/images/grid_image_6.png';
import imgLuisa from '../assets/images/luisa_lino_about.png';

export default function AboutMe() {
  return (
    <div className='page-wrapper max-w-7xl px-4 md:px-8 flex flex-col gap-8 mx-auto'>
      <div className='main-wrapper '>
        {/* INTRO */}
        <div className='section'>
          <div>
            <div className='flex lg:flex-row flex-col-reverse gap-5'>
              <img alt='luisa-lino-about-me' src={imgLuisa} className='lg:aspect-auto aspect-square rounded-lg object-cover' />
              <div className='flex flex-col gap-6 max-w-[688px] justify-center'>
                <div className='max-w-[520px]'>
                  <h1>Welcome to my little corner of the internet! 👋🏽</h1>
                </div>
                <div className='flex flex-col gap-4 font-light text-lg md:text-xl tracking-normal'>
                  <p>
                    With a multidisciplinary background, I bring a creative and
                    flexible approach to problem-solving in design.
                  </p>
                  <p>
                    I thrive in dynamic environments, where variety and new
                    challenges push me to think critically and grow. I’m a
                    positive, thoughtful person who values clear communication
                    and a strong team culture.
                  </p>
                  <p>
                    Above all, I care about designing with purpose — guided by
                    empathy, social responsibility, and the desire to create
                    meaningful user experiences.
                  </p>
                </div>
                <a className='md:text-2xl text-xl w-fit cursor-pointer' target='_blank' href={LuisaCv}>
                  <div className='border-1 border-black rounded-lg px-6 py-3'>
                    View CV
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DESIGN PHILOSOPHY */}
        <div className='py-[3rem] md:py-[5rem]'>
          <div className='container '>
            <div className='_50ch-headline-wrap md:mb-8'>
              <h2 className='display-2xl'>Design Philosophy</h2>
            </div>

            <div className='grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-8'>
              <div className='flex flex-col gap-4'>
                <img
                  src={iconLavender}
                  loading='lazy'
                  alt=''
                  className='w-12 h-12'
                />
                <div className='flex flex-col gap-4 md:gap-6'>
                  <div className='display-large'>{philosophy[0].title}</div>
                  <p>{philosophy[0].description}</p>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <img
                  src={iconSky}
                  loading='lazy'
                  alt=''
                  className='w-12 h-12'
                />
                <div className='flex flex-col gap-4 md:gap-6'>
                  <div className='display-large'>{philosophy[1].title}</div>
                  <p>{philosophy[1].description}</p>
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                <img
                  src={iconSand}
                  loading='lazy'
                  alt=''
                  className='w-12 h-12'
                />
                <div className='flex flex-col gap-4 md:gap-6'>
                  <div className='display-large'>{philosophy[2].title}</div>
                  <p>{philosophy[2].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHEN I'M NOT DESIGNING */}
        <div className='py-[3rem] md:py-[5rem]'>
          <div>
            <div>
              <div className='_50ch-headline-wrap mb-4 md:mb-8'>
                <h2 className='display-2xl'>When I’m not designing...</h2>
              </div>

              <div className='grid sm:grid-cols-3 max-h-[920px] sm:grid-rows-3 gap-x-5 gap-y-5'>
                <div className='sm:row-span-2 sm:col-span-1' >
                  <img
                    className='h-full w-full object-cover aspect-square sm:aspect-auto rounded-lg'
                    src={imgGrid1}
                  />
                </div>
                <div className='row-span-1 col-span-1 hidden sm:flex'>
                  <img
                    className='h-full w-full object-cover rounded-lg'
                    src={imgGrid2}
                  />
                </div>
                <div className='row-span-1 col-span-1 hidden sm:flex'>
                  <img
                    className='h-full w-full object-cover rounded-lg'
                    src={imgGrid3}
                  />
                </div>
                <div className='row-span-1 col-span-1 hidden sm:flex'>
                  <img
                    className='h-full w-full object-cover rounded-lg'
                    src={imgGrid4}
                  />
                </div>
                <div className='row-span-2 hidden sm:flex'>
                  <img
                    className='h-full w-full object-cover rounded-lg'
                    src={imgGrid5}
                  />
                </div>
                <div className='col-span-2 hidden sm:flex'>
                  <img
                    className='h-full w-full object-cover rounded-lg'
                    src={imgGrid6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT DIFFERENTIATES ME AS A DESIGNER  */}
        <div className='py-[3rem] md:py-[5rem]'>
          <div>
            <div className=' md:mb-8 mb-4'>
              <h2 className='display-2xl'>
                What Differentiates Me As a Designer
              </h2>
            </div>

            <div className='grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-8'>
              {highlights.map((item) => (
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-4'>
                    <div className='text-xl md:text-2xl'>{item.title}</div>
                    <p className='font-light font-body'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHAT DIFFERENTIATES ME AS A DESIGNER  */}
        <div className='py-[3rem] md:py-[5rem]'>
          <div>
            <div>
              <div className='_50ch-headline-wrap mb-5 md:mb-8'>
                <h2 className='display-2xl'>Testimonials</h2>
              </div>

              <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5'>
                {testimonials.map((item) => (
                  <div
                    className='flex flex-col rounded-lg gap-4 p-6'
                    style={{ backgroundColor: `var(--colors-${item.color})` }}
                  >
                    <div className='flex flex-col gap-1'>
                      <p className='text-lg md:text-xl'>{item.name}</p>
                      <p className='text-base md:text-lg text-[#565656]'>
                        ↳ {item.role} at {item.company}
                      </p>
                    </div>
                    <div>
                      <p className='text-lg md:text-xl font-light'>
                        “{item.testimonial}”
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const philosophy = [
  {
    title: 'Design is a Team Sport',
    description:
      'Great design is built through collaboration and shared vision. I believe ideas grow stronger when shaped with others, resulting in solutions that are not only beautiful, but also smart and impactful.',
  },
  {
    title: 'Forever Curious',
    description:
      'I stay curious and open-minded, always learning from tools, trends, challenges, and people. This helps me stay flexible and ready to grow with every new experience.',
  },
  {
    title: 'Purpose in Every Pixel',
    description:
      'Every design decision I make is intentional — from layout to color. My goal is to create experiences that balance aesthetics, function, and meaning.',
  },
];

const highlights = [
  {
    title: 'Feedback is Fuel',
    description:
      'I actively seek out feedback from teammates and stakeholders. I believe honest input is the key to growth, so I create space for open conversations and never hesitate to ask how I can improve.',
  },
  {
    title: 'Flexible Problem Solver',
    description:
      'I know that no project is perfect. Instead of sticking rigidly to processes, I adapt to the situation at hand, finding creative ways to move forward with the resources available and evolving ideas as needed.',
  },
  {
    title: 'Design Meets Code',
    description:
      'Having a basic foundation in HTML and CSS means I understand the technical side, which helps me communicate better with developers and design with empathy for implementation realities.',
  },
];

const testimonials = [
  {
    name: 'Jennifer Travanca',
    role: 'Product Owner',
    company: 'EVS Broadcast Equipment',
    testimonial:
      'Working with Luisa has been an incredibly enriching experience, both on a personal and professional level.  On a personal level, she’s a genuinely kind, positive person with contagious energy, which makes the work environment much more enjoyable. She’s someone you can truly rely on—always supportive, collaborative, and transparent in the way she communicates and works within a team.  Professionally, Luisa stands out for her dedication, attention to detail, and strong sense of responsibility. As a UX/UI designer, she has a sharp intuition for user needs and consistently applies a user-centered approach to her work.  She is proactive and takes real initiative in the projects she’s involved in. She’s not afraid to challenge ideas or ask questions in order to fully understand the broader context and strategic goals behind a project.  I truly enjoyed working with her, it was always smooth and collaborative, and I knew I could fully trust the quality and reliability of her work. Luisa brings value not only through her skills, but also through her mindset and presence on a team.',
    color: 'pink',
  },
  {
    name: 'Name Surname',
    role: 'Role',
    company: 'Company',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur. Felis nulla etlaoreet nunc. Mi ipsum tempus nulla hendrerit ut leo dolor quam aliquam. Ac urna pulvinar fames id pretium ac. Egestas lorem lobortis tempus tempor ut viverra dictum mattis.',
    color: 'blue',
  },
];
