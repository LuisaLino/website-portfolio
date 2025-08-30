import ArrowButton from '../components/Button';
import { default as HorizontalScrollCarousel } from '../components/Carousel';
import Hero from '../components/Hero';
import { ProjectItem } from '../components/ProjectItem';
import { cards } from '../constants/project-card';

const serviceCard =
  'rounded-lg flex p-8 md:h-[350px] h-[300px] items-center flex-col whitespace-normal justify-center';

const serviceCardItem = 'flex flex-col gap-4';

export default function Homepage() {
  return (
    <div>
      <Hero />

      <div className='page-wrapper max-w-[1700px] mx-auto md:flex hidden'>
        <HorizontalScrollCarousel />
      </div>

      <div className='px-4 md:hidden flex flex-col my-[8rem] gap-4'>
        <h2 className='md:!text-[40px] !text-3xl font-body'>
          Selected Projects
        </h2>
        <div className='flex flex-col gap-5'>
          {cards.slice(0, 2).map((card) => {
            return <ProjectItem card={card} key={card.id} />;
          })}
        </div>
        <ArrowButton link='/projects' text='View All' />
      </div>

      <div className='page-wrapper max-w-[1700px] px-4 md:px-6 flex flex-col gap-8 mx-auto'>
        {/* HOW I WORK SECTION */}
        <div className='pt-[4px] md:pb-[8rem] md:pt-[3rem] px-4 md:px-20 py-20 md:py-24'>
          <div className='lg:grid lg:grid-cols-5 flex flex-col gap-8 '>
            <h4 className='col-span-2'>↳ How I work</h4>
            <div className='flex flex-col lg:flex-row lg:col-span-3 gap-12 lg:gap-20'>
              <div className='flex max-w-[50ch] flex-col md:gap-6 gap-2'>
                <div className='md:display-2xl text-xl font-medium'>
                  My Approach
                </div>
                <p className='!text-base md:!text-lg'>
                  I see design as a way of transforming spaces, creating objects
                  and providing experiences. I like to think that my work can
                  help improve people's lives and I'm always looking for new
                  ways to communicate, contributing my personal stamp.
                </p>
              </div>

              <div className='flex max-w-[50ch] flex-col md:gap-6 gap-2'>
                <div className='md:display-2xl text-xl font-medium'>
                  What to Expect
                </div>
                <p className='!text-base md:!text-lg'>
                  Thoughtful, purpose-driven design process that goes beyond
                  aesthetics. I bring creativity, responsibility, and
                  sensitivity to everything I do — always aiming to contribute
                  in ways that are both innovative and socially conscious.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT I DO SECTION */}
        <div className='py-20 md:py-24'>
          <div className='flex flex-col gap-8'>
            <h2 className='font-body md:!text-[40px] !text-3xl'>What I Do</h2>
            <div className='grid mx-auto grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='service-cards-row grid grid-rows-2 gap-6'>
                <div
                  className={serviceCard}
                  style={{ backgroundColor: 'var(--colors-pink)' }}
                >
                  <div className={serviceCardItem}>
                    <h3 className='md:display-2xl text-xl font-medium'>
                      Graphic Design
                    </h3>
                    <div className='!text-base md:!text-xl'>
                      Design is more than just making things look good — it's
                      about clear communication, creating emotion, and building
                      connection. As a graphic designer, I help brands and
                      individuals bring their ideas to life through thoughtful,
                      intentional visuals.
                    </div>
                  </div>
                </div>

                <div
                  className={serviceCard}
                  style={{ backgroundColor: 'var(--colors-green)' }}
                >
                  <div className={serviceCardItem}>
                    <h3 className='md:display-2xl text-xl font-medium'>
                      User Research
                    </h3>
                    <div className='!text-base md:!text-xl'>
                      Every design begins with understanding. I dive into
                      people’s stories, needs, and behaviors to uncover the
                      quiet truths that guide meaningful solutions.
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid grid-rows-2 gap-6'>
                <div
                  className={serviceCard}
                  style={{ backgroundColor: 'var(--colors-blue)' }}
                >
                  <div className={serviceCardItem}>
                    <h3 className='md:display-2xl text-xl font-medium'>
                      UI/UX Design
                    </h3>
                    <div className='!text-base md:!text-xl'>
                      Involves designing the structure and interface of digital
                      products to provide intuitive, accessible, and meaningful
                      user experiences.
                    </div>
                  </div>
                </div>

                <div
                  className={serviceCard}
                  style={{ backgroundColor: 'var(--colors-yellow)' }}
                >
                  <div className={serviceCardItem}>
                    <h3 className='md:display-2xl text-xl font-medium'>
                      Visual Design
                    </h3>
                    <div className='!text-base md:!text-xl'>
                      Focuses on the aesthetics of a product or interface,
                      ensuring visual harmony, consistency, and clarity through
                      the use of color, typography, imagery, and layout.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
