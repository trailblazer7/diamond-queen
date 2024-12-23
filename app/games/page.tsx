import { Container, GameCard, Title } from '@/components';
import { dateFormatter } from '@/lib/utils';
import { Game } from '@/types';

export default async function Games() {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page=1`
  );
  const { results: games } = await response.json();

  return (
    <>
      <Container className="mt-6">
        <Title size="lg" text="Games" className="font-extrabold" />
      </Container>
      {/* Top Bar */}
      <Container className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
          {games.map((game: Game) => {
            const { id, name, background_image, released } = game;
            return (
              <GameCard
                key={id}
                id={id}
                name={name}
                imageUrl={background_image}
                released={dateFormatter(released)}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
}
