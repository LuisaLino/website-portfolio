import classNames from 'classnames';
import { Link } from 'react-router-dom';
import type { Colors } from './Tag/tag';
import Tag from './Tag/tag';

export const ProjectItem = ({
  card,
  fullWidth,
}: {
  card: {
    id: number;
    link: string;
    imgUrl: string;
    title: string;
    tags: Array<{ color: Colors; text: string }>;
  };
  fullWidth?: boolean;
}) => {
  return (
    <Link to={`/projects/${card.link}`}>
      <div
        key={card.id}
        className={classNames(
          'group relative lg:h-[514px] lg:w-[688px] w-full overflow-hidden',
          fullWidth && 'lg:w-full'
        )}
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
          className='lg:h-[472px] h-[300px] rounded-xl bg-neutral-200 inset-0 z-0 w-full'
        ></div>
        <div className='inset-0 z-10 grid pt-2'>
          <p className='bg-gradient-to-br from-white/20 to-white/0 text-lg  text-black backdrop-blur-lg'>
            {card.title}
          </p>
        </div>
      </div>
    </Link>
  );
};
