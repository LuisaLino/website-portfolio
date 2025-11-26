import { ProjectItem } from '../../components/ProjectItem';
import { cards } from '../../constants/project-card';

export default function Projects() {
  return (
    <div className='page-wrapper'>
      <div className='main-wrapper'>
        <div className='md:py-[8rem] py-[6rem]'>
          <div className='px-4'>
            <div className='_50ch-headline-wrap md:mb-8 mb-6'>
              <h1 className='md:!text-3xl !text-xl md:!leading-13 leading-9'>
                Selected Projects
              </h1>
            </div>

            <div className='pt-[4px] pb-[4rem] md:pb-[8rem] md:pt-[3rem] md:pl-28 pl-0'>
              <div className='lg:grid lg:grid-cols-5 flex flex-col gap-4 md:gap-8 '>
                <h4 className='col-span-2 font-title'>↳ My work</h4>
                <div className='flex flex-col lg:flex-row lg:col-span-3 gap-12 lg:gap-20'>
                  <div className='flex max-w-[50ch] flex-col md:gap-6 gap-2'>
                    <p className='!text-base md:!text-lg'>
                      With a foundation in web design and visual principles, my
                      work is rooted in UX best practices — blending aesthetics
                      with clarity, structure, and purpose to craft digital
                      experiences that are intuitive, scalable, and
                      user-centered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-y-22 gap-y-7 gap-x-5'>
              {cards.map((item) => (
                <ProjectItem card={item} key={item.title} fullWidth />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
