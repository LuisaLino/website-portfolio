import heroImg from '../assets/images/Hero.svg';
import luisaImg from '../assets/images/Luisa_Lino.png';

import Tag, { type Colors } from './Tag/tag';

const tags: Array<{ text: string; color: Colors }> = [
  {
    text: 'Graphic Design',
    color: 'pink',
  },
  {
    text: 'User Research',
    color: 'green',
  },
  {
    text: 'UX/UI Design',
    color: 'blue',
  },
  {
    text: 'Visual Design',
    color: 'yellow',
  },
];

export default function Hero() {
  return (
    <div id='Hero' className='md:pt-[215px] pt-[8rem] relative overflow-hidden'>
      <div className='relative flex justify-center bottom-0 w-full h-full items-stretch'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-8'>
          <div className='align-center'>
            <div className='flex flex-col mx-auto items-center text-center justify-center lg:gap-[2rem] gap-[1rem]'>
              <h1 className='max-w-[840px] md:!text-5xl !text-3xl md:!leading-14 leading-10'>
                Hi!{' '}
                <span>
                  <img loading='lazy' src={luisaImg} alt='luisa-lino-image' />
                </span>{' '}
                My name is Luísa. I design with intention, empathy, and an eye
                for detail. My areas of specialization are:
              </h1>
              <div className='flex flex-wrap justify-center items-center gap-3 lg:max-w-[924px]'>
                {tags.map((tag) => (
                  <Tag color={tag.color} text={tag.text} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute overflow-hidden inset-0 -z-10 w-full h-full '>
        <img
          loading='lazy'
          src={heroImg}
          alt='hero-colored-background'
          className='object-cover w-full h-full -mt-1 sm:mt-0'
        />
      </div>
    </div>
  );
}
