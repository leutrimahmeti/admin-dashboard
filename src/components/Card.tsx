import { AiOutlineDelete } from "react-icons/ai";

interface CardProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  onDelete?: () => void;
}

export function Card({ style, children, onDelete }: CardProps): JSX.Element {
  return (
    <div
      style={style}
      className="p-6 relative rounded-xl font-semibold text-center text-xl"
    >
      {children}
      <button
        onClick={onDelete}
        className="absolute top-4 right-2 w-10 h-10 hover:scale-110 flex justify-center items-center rounded-full p-1"
      >
        <AiOutlineDelete className="w-4 h-4" />
      </button>
    </div>
  );
}
