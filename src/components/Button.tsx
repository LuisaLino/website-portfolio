import { Link } from 'react-router-dom';

const ArrowButton = ({
  link,
  text,
}: {
  link: string;
  text: string;
  small?: boolean;
}) => {
  return (
    <Link to={link}>
      <div className='flex bg-black gap-2.5 text-white rounded-lg items-center justify-center md:p-[12px_24px] p-[8px_18px]'>
        <div className='md:text-xl text-base'>{text}</div>
        <img src='src/assets/images/arrow-up-right.svg' />
      </div>
    </Link>
  );
};

export default ArrowButton;
