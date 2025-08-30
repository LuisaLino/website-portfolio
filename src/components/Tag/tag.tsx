import './tag.css';

export type Colors = 'pink' | 'blue' | 'green' | 'yellow';

interface TagProp {
  color: Colors;
  text: string;
  small?: boolean;
}

export default function Tag({ color, text, small }: TagProp) {
  return (
    <div
      className={`tag-container flex items-center rounded-xl justify-center p-[0.5rem_0.75rem] ${color}`}
    >
      <div
        className={small ? 'lg:text-base text-[13px]' : 'lg:text-xl text-base'}
      >
        {text}
      </div>
    </div>
  );
}
