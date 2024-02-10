import { useContext, useEffect, useState } from 'react';
import { FavouriteContext, WeatherContext } from '../../context';

export default function AddFavourite() {
  const { favourites, addToFavourites, removeToFavourites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);

  const [isFavourite, toggleFavourite] = useState(false);

  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleFavourite(found);
  }, []);

  function handleFavourites() {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeToFavourites(location);
    }
    toggleFavourite(!isFavourite);
  }

  return (
    <div className='md:col-span-2'>
      <div className='flex items-center justify-end space-x-6'>
        <button
          onClick={handleFavourites}
          className='text-sm md:text-base cursor-pointer inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]'
        >
          {isFavourite ? (
            <>
              <span>Remove to Favourite</span>
              <img
                src='./assets/heart-red.svg'
                alt=''
              />
            </>
          ) : (
            <>
              <span>Add to Favourite</span>
              <img
                src='./assets/heart.svg'
                alt=''
              />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
