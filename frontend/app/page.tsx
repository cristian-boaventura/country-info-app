import CountryList from '@/components/CountryList';
import { fetchCountries } from '@/utils/dataFetching';

export default async function Home() {
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
