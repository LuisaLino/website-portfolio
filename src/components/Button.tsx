const ArrowButton = ({
  link,
  text,
  small,
}: {
  link: string;
  text: string;
  small?: boolean;
}) => {
  return (
    <a href={link}>
      <div className='flex bg-black gap-2.5 text-white rounded-lg items-center justify-center p-[12px_24px]'>
        <div className='text-xl'>{text}</div>
        <img src='src/assets/images/arrow-up-right.svg' />
      </div>
    </a>
  );
};

export default ArrowButton;
