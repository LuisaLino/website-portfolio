import { default as HorizontalScrollCarousel } from '../components/Carousel';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className='page-wrapper'>
        <div className='main-wrapper'>
          <Hero />

          <HorizontalScrollCarousel />

          {/* HOW WE WORK SECTION */}
          <div className='grid mx-auto grid-cols-5 px-[10rem] pt-[8rem]'>
            <h4 className='col-span-2'>↳ How I work</h4>
            <div className='flex col-span-3 gap-20'>
              <div className='flex max-w-[50ch] flex-col gap-6'>
                <div className='display-2xl'>My Approach</div>
                <p>
                  I see design as a way of transforming spaces, creating objects
                  and providing experiences. I like to think that my work can
                  help improve people's lives and I'm always looking for new
                  ways to communicate, contributing my personal stamp.
                </p>
              </div>

              <div className='flex max-w-[50ch] flex-col gap-6'>
                <div className='display-2xl'>What to Expect</div>
                <p>
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
        <div className='section'>
          <div className='container'>
            <div className='text-wrap'>
              <h2 className='font-body !text-[40px]'>What I Do</h2>
            </div>
            <div className='service-cards-wrap'>
              <div className='service-cards-row'>
                <div
                  data-delay='0'
                  data-hover='true'
                  className='service-card-item w-dropdown'
                >
                  <div className='service-card _1 w-dropdown-toggle'>
                    <div className='card-top-wrapper'>
                      <h3 className='display-2xl'>Graphic Design</h3>
                      <div>
                        Design is more than just making things look good — it's
                        about clear communication, creating emotion, and
                        building connection. As a graphic designer, I help
                        brands and individuals bring their ideas to life through
                        thoughtful, intentional visuals.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  data-delay='0'
                  data-hover='true'
                  className='service-card-item w-dropdown'
                >
                  <div className='service-card _2 w-dropdown-toggle'>
                    <div className='card-top-wrapper'>
                      <h3 className='display-2xl'>User Research</h3>
                      <div>
                        Every design begins with understanding. I dive into
                        people’s stories, needs, and behaviors to uncover the
                        quiet truths that guide meaningful solutions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='service-cards-row'>
                <div
                  data-delay='0'
                  data-hover='true'
                  className='service-card-item w-dropdown'
                >
                  <div className='service-card _3 w-dropdown-toggle'>
                    <div className='card-top-wrapper'>
                      <h3 className='display-2xl'>UI/UX Design</h3>
                      <div>
                        Involves designing the structure and interface of
                        digital products to provide intuitive, accessible, and
                        meaningful user experiences.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-delay='0'
                  data-hover='true'
                  className='service-card-item w-dropdown'
                >
                  <div className='service-card _4 w-dropdown-toggle'>
                    <div className='card-top-wrapper'>
                      <h3 className='display-2xl'>Visual Design</h3>
                      <div>
                        Focuses on the aesthetics of a product or interface,
                        ensuring visual harmony, consistency, and clarity
                        through the use of color, typography, imagery, and
                        layout.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
