import cn from 'classnames';

interface Props {
  buttonText: string;
  textSize?: string;
}

export function CustomLinkText({ buttonText, textSize }: Props) {
  return (
    <div className='inline-block group'>
      <p
        className={cn(
          'relative overflow-hidden cursor-pointer',
          textSize ?? 'text-xl md:text-2xl'
        )}
      >
        {buttonText}
        <span className='absolute bottom-0 left-0 w-full h-[2px] bg-black rounded transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100'></span>
      </p>
    </div>
  );
}
