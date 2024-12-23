import { Container, StoreCard, Title } from '@/components';
import { Store } from '@/types';

export default async function Games() {
  const response = await fetch(
    `https://api.rawg.io/api/stores?key=${process.env.RAWG_API_KEY}&page=1`
  );
  const { results: stores } = await response.json();

  console.log(stores);

  return (
    <>
      <Container className="mt-6">
        <Title size="lg" text="Stores" className="font-extrabold" />
      </Container>
      {/* Top Bar */}
      <Container className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
          {stores.map((store: Store) => {
            const { id, name, image_background, games_count, domain } = store;
            return (
              <StoreCard
                key={id}
                name={name}
                imageUrl={image_background}
                gamesCount={games_count}
                domain={domain}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
}
