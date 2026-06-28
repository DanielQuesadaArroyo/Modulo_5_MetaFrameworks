import { HouseCard } from './HouseCard';
import { House } from '../models/house';

type Props = {
  house: House;
};

export function HouseDetail({ house }: Props) {
  return (
    <>
      <div className="container mx-auto px-6 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-8 text-white md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              {house.name}
            </h1>

            <img
              className="w-full rounded-2xl shadow-lg object-cover aspect-video"
              src={house.image}
              alt="Prueba"
              loading="lazy"
            />
          </div>
          <div>
            <div className="flex flex-col items-end">
              <h1 className="text-3xl font-bold tracking-tight mb-4">
                {house.price} €/noche
              </h1>
            </div>
            <div>
              <p className="text-white-900 font-bold text-lg leading-relaxed mb-6">
                Descripción:
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {house.description}
              </p>
              <p className="text-white-900 font-bold text-lg leading-relaxed mb-6">
                Dirección:
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {house.address}
              </p>
              <p className="text-white-900 font-bold text-lg leading-relaxed mb-6">
                Habitaciones:
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {house.bedrooms}
              </p>
              <p className="text-white-900 font-bold text-lg leading-relaxed mb-6">
                Camas:
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {house.beds}
              </p>
              <p className="text-white-900 font-bold text-lg leading-relaxed mb-6">
                Baños:
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {house.bathrooms}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="pt-8 ml-8 text-white-900 font-bold text-lg leading-relaxed mb-6">
          Reviews:
        </p>
        {house.reviews.map((review) => (
          <div
            key={review.id}
            className="p-4 ml-8 mr-8 border-2 border-white-500 mb-6"
          >
            <p>{review.date}</p>
            <p>
              {review.author}: {review.comment}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
