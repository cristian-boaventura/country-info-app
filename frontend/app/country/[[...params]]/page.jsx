import Image from 'next/image';
import PopulationChart from '@/components/PopulationChart';
import BorderCountries from '@/components/BorderCountries';
import { fetchCountryInfo } from '@/utils/dataFetching';

export default async function Page({ params }) {
  const countryCode = (await params).params[0];
  const countryName = (await params).params[1];

  const countryInfo = await fetchCountryInfo(countryCode, countryName);
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <div className='flex self-center gap-4 items-center mt-10'>
        <h1 className='text-4xl tracking-tight font-bold text-gray-900 dark:text-white'>
          {countryName}
        </h1>
        <Image
          width={60}
          height={30}
          src={countryInfo.flagUrl}
          alt={countryName}
          className='h-fit'
        />
      </div>
      <div className='flex flex-col md:flex-row w-full gap-10 md:gap-0 items-center md:items-start md:justify-evenly mx-8'>
        <BorderCountries borderCountries={countryInfo.borderCountries} />
        <div className='w-[100vw] md:w-[50vw]'>
          <PopulationChart data={countryInfo.populationData} />
        </div>
      </div>
    </div>
  );
}
