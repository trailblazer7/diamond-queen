import Image from 'next/image';
import { Title } from '@/components';
import clsx from 'clsx';

type CreatorCard = {
  id?: number;
  name: string;
  gamesCount: number;
  imageUrl: string;
};

type Props = CreatorCard & {
  className?: string;
};

const CreatorCard: React.FC<Props> = ({
  name,
  gamesCount,
  imageUrl,
  className,
}) => {
  return (
    <div className={clsx('bg-gray-50 p-4 rounded-md', className)}>
      <div className="flex justify-center relative">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="Creator Card"
          src={imageUrl}
        />
      </div>
      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
      <div className="flex justify-between items-center mt-4">
        <span>
          Games Count: <b>{gamesCount}</b>
        </span>
      </div>
    </div>
  );
};

export default CreatorCard;
