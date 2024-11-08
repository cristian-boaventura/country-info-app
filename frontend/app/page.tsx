import CountryList from '@/components/CountryList';

export default async function Home() {
  const fetchCountries = async () => {
    const response = await fetch('http://localhost:3000/countries');
    const data = await response.json();
    return data;
  };

  const countries = await fetchCountries();

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl mt-8 mb-4 font-bold leading-none text-gray-900 dark:text-white'>
        Available Countries
      </h1>
      <CountryList countries={countries} />
    </div>
  );
}
