import { createFileRoute } from '@tanstack/react-router';
import { HouseList } from '../../components/HouseList';
import { House } from '../../models/house';

const getListHouses = async (): Promise<{ houses: House[] }> => {
  const response = await fetch('http://localhost:3001/api/houses').then((res) => res.json());

  return { houses: response };
};

export const Route = createFileRoute('/houses/')({
  loader: () => getListHouses(),
  component: RouteComponent,
});

function RouteComponent() {
  const { houses } = Route.useLoaderData();

  return <HouseList house={houses} />;
}
