import { Link } from '@tanstack/react-router';
import { House } from '../models/house';

type Props = {
  house: House;
};

export function HouseCard({ house }: Props) {
  return (
    <div className="bg-dark rounded-xl">
      <Link
        to="/houses/$id"
        params={{ id: house.id }}
        className="block max-w-sm rounded-xl overflow-hidden border border-dark-border bg-dark-card shadow-md transition-transform duration-300 hover:scale-[1.02]"
      >
        <div className="aspect-video w-full overflow-hidden bg-gray-800">
          <img
            className="h-full w-full object-cover"
            src={house.image}
            alt="Prueba"
            loading="lazy"
          />
        </div>
        <div className="px-5 py-4">
          <h3 className="font-bold text-xl text-white tracking-tight line-clamp-1">
            {house.name}
          </h3>
        </div>
      </Link>
    </div>
  );
}
