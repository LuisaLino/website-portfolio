import './tag.css';

interface TagProp {
  color: 'pink' | 'blue' | 'green' | 'yellow';
  text: string;
  small?: boolean;
}

export default function Tag({ color, text, small }: TagProp) {
  return (
    <div
      className={`tag-container flex items-center rounded-xl justify-center p-[0.5rem_0.75rem] ${color}`}
    >
      <div
        className={small ? 'lg:text-xl text-base' : 'lg:text-[28px] text-xl'}
      >
        {text}
      </div>
    </div>
  );
}
