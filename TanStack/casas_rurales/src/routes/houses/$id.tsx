import { createFileRoute } from '@tanstack/react-router';
import { HouseDetail } from '../../components/HouseDetail';
import { House } from '../../models/house';

const getHouseById = async (id: string): Promise<{ house: House }> => {
  const response = await fetch(`http://localhost:3001/api/houses/${id}`).then(
    (res) => res.json()
  );

  return { house: response };
};

export const Route = createFileRoute('/houses/$id')({
  loader: ({ params }) => getHouseById(params.id),
  component: RouteComponent,
});

function RouteComponent() {
  const { house } = Route.useLoaderData();

  return <HouseDetail house={house} />;
}
