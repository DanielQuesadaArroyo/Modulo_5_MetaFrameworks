import { HouseCard } from './HouseCard';
import { House } from '../models/house';

type Props = {
  house: House[];
};

export function HouseList({ house }: Props) {
  return (
    <>
      <section className="container mx-auto px-6 py-8 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {house.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </section>
    </>
  );
}
