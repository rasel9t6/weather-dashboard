import Header from './components/header/Header';

import WeatherBoard from './components/weatherBoard/Weather';

export default function Page() {
  return (
    <>
      <div className='grid place-items-center h-screen bg-no-repeat bg-cover'>
        <Header />
        <WeatherBoard />
      </div>
    </>
  );
}
