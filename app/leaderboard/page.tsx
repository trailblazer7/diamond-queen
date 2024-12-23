import { Container, CreatorCard, Title } from '@/components';
import { Creator } from '@/types';

export default async function Games() {
  const response = await fetch(
    `https://api.rawg.io/api/creators?key=${process.env.RAWG_API_KEY}&page=1&page_size=10`
  );
  const { results: creators } = await response.json();

  return (
    <>
      <Container className="mt-6">
        <Title size="lg" text="Leaderboard" className="font-extrabold" />
      </Container>
      {/* Top Bar */}
      <Container className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
          {creators.map((creator: Creator) => {
            const { id, name, image_background, games_count } = creator;
            return (
              <CreatorCard
                key={id}
                id={id}
                name={name}
                imageUrl={image_background}
                gamesCount={games_count}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
}
