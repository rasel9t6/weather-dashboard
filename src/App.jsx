import Page from './Page';
import { FavouriteProvider, WeatherProvider } from './provider';

function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <Page />
      </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
