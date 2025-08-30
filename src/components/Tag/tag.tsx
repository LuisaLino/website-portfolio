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
        className={small ? 'lg:text-lg text-[13px]' : 'lg:text-[24px] text-xl'}
      >
        {text}
      </div>
    </div>
  );
}
