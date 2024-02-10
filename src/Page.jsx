import Header from './components/header/Header';
import Weather from './components/weather/Weather';

export default function Page() {
  return (
    <>
      <div className='grid place-items-center h-screen bg-no-repeat bg-cover'>
        <Header />
        <Weather />
      </div>
    </>
  );
}
