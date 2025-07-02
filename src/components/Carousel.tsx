import { easeInOut, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ArrowButton from './Button';
import { ProjectItem } from './ProjectItem';
import { type Colors } from './Tag/tag';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-46%'], {
    ease: easeInOut,
  });

  return (
    <section
      ref={targetRef}
      className='relative md:py-30 h-[300vh] md:h-[400vh]'
    >
      <div className='sticky top-0 flex flex-col h-screen  justify-center items-start overflow-hidden'>
        <div className='flex max-w-screen w-[100%] md:px-8 px-4 items-center justify-between'>
          <h2 className='md:!text-[40px] !text-3xl font-body'>
            Selected Projects
          </h2>
          <ArrowButton link='/projects' text='View All' />
        </div>

        <motion.div
          style={{
            x,
            transform: `translate3d(${x}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          }}
          className='flex gap-4 mt-8'
        >
          {cards.map((card) => {
            return <ProjectItem card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;

const cards: Array<{
  id: number;
  link: string;
  imgUrl: string;
  title: string;
  tags: Array<{ color: Colors; text: string }>;
}> = [
  {
    link: '1',
    imgUrl: 'src/assets/images/carousel_image_1.png',
    title: 'Title Lorem ipsum egestas at in pellentesque eu.',
    id: 1,
    tags: [
      {
        text: 'Graphic Design',
        color: 'pink',
      },
      {
        text: 'UX/UI Design',
        color: 'blue',
      },
    ],
  },
  {
    link: '2',
    imgUrl: 'src/assets/images/carousel_image_2.png',
    title: 'Lorem ipsum egestas at in pellentesque eu.',
    id: 2,
    tags: [
      {
        text: 'Graphic Design',
        color: 'pink',
      },
      {
        text: 'UX/UI Design',
        color: 'blue',
      },
    ],
  },
  {
    link: 'vizzi-backoffice-ui-redesign',
    imgUrl: 'src/assets/images/carousel_image_vizzi.png',
    title: 'Vizzi | Backoffice UI Redesign',
    id: 3,
    tags: [
      {
        text: 'Graphic Design',
        color: 'pink',
      },
      {
        text: 'UX/UI Design',
        color: 'blue',
      },
    ],
  },
  {
    link: '3',
    imgUrl: 'src/assets/images/carousel_image_1.png',
    title: 'Lorem ipsum egestas at in pellentesque eu.',
    id: 4,
    tags: [
      {
        text: 'Graphic Design',
        color: 'pink',
      },
      {
        text: 'UX/UI Design',
        color: 'blue',
      },
    ],
  },
];
