import { FavouriteContext } from '../context';
import { useLocalStorage } from '../hooks';

export default function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage('favourites', []);
 
  function addToFavourites(latitude, longitude, location) {
    setFavourites([...favourites, { latitude, longitude, location }]);
  }

  function removeToFavourites(location) {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  }

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeToFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
