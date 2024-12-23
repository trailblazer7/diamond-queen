import { Container, Title } from '@/components';
import Image from 'next/image';

export default async function Game({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const response = await fetch(
    `https://api.rawg.io/api/games/${slug}?key=${process.env.RAWG_API_KEY}`
  );
  const { name, description, background_image } = await response.json();

  return (
    <>
      <Container className="mt-6">
        <Title size="lg" text={`${name} Game`} className="font-extrabold" />
      </Container>
      {/* Top Bar */}
      <Container className="mt-4">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%',
            height: '350px',
            objectFit: 'cover',
          }}
          alt="Game Card"
          src={background_image}
        />
        <div className="flex mt-6">{description}</div>
      </Container>
    </>
  );
}
