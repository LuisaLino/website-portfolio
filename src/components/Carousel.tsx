import { easeInOut, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ArrowButton from './Button';
import Tag, { type Colors } from './Tag/tag';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-46%'], {
    ease: easeInOut,
  });

  return (
    <section ref={targetRef} className='relative h-[400vh]'>
      <div className='sticky top-0 grid grid-rows-2 h-screen items-center overflow-hidden'>
        <div className='flex max-w-screen px-8  items-center justify-between'>
          <h2 className='text-[40px] font-body'>Selected Projects</h2>
          <ArrowButton link='/projects' text='View All' />
        </div>

        <motion.div
          style={{
            x,
            transform: `translate3d(${x}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          }}
          className='flex gap-4 -mt-[230px]'
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  card,
}: {
  card: {
    id: number;
    link: string;
    imgUrl: string;
    title: string;
    tags: Array<{ color: Colors; text: string }>;
  };
}) => {
  return (
    <a href={`/projects/${card.link}`}>
      <div
        key={card.id}
        className='group relative lg:h-[514px] lg:w-[688px] w-[345px] overflow-hidden '
      >
        <div className='absolute top-4 left-4 flex gap-2'>
          {card.tags.map((item) => (
            <Tag color={item.color} text={item.text} small />
          ))}
        </div>
        <div
          style={{
            backgroundImage: `url(${card.imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='lg:h-[472px] h-[300px] rounded-xl bg-neutral-200 inset-0 z-0'
        ></div>
        <div className='inset-0 z-10 grid pt-2'>
          <p className='bg-gradient-to-br from-white/20 to-white/0 text-lg  text-black backdrop-blur-lg'>
            {card.title}
          </p>
        </div>
      </div>
    </a>
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
