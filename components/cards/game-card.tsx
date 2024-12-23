import Image from 'next/image';
import Link from 'next/link';
import { Title } from '@/components';
import clsx from 'clsx';

type GameCard = {
  id: number;
  name: string;
  released: string;
  imageUrl: string;
};

type Props = GameCard & {
  className?: string;
};

const GameCard: React.FC<Props> = ({
  id,
  name,
  released,
  imageUrl,
  className,
}) => {
  return (
    <div className={clsx('bg-gray-50 p-4 rounded-md', className)}>
      <Link href={`/games/${id}`}>
        <div className="flex justify-center relative">
          <Image
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              width: '100%',
              height: 'auto',
              minHeight: '200px',
              objectFit: 'cover',
            }}
            alt="Game Card"
            src={imageUrl}
          />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <div className="flex justify-between items-center mt-4">
          <span>
            Released: <b>{released}</b>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
