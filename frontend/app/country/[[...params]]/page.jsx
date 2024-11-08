import Image from 'next/image';
import PopulationChart from '@/components/PopulationChart';
import CountryItem from '@/components/CountryItem';

export default async function Page({ params }) {
  const countryCode = (await params).params[0];
  const countryName = (await params).params[1];

  const fetchCountryInfo = async () => {
    const response = await fetch(
      `http://localhost:3000/countries/country-info?countryCode=${encodeURIComponent(
        countryCode
      )}&countryName=${encodeURIComponent(countryName)}`
    );
    const data = await response.json();
    return data;
  };

  const countryInfo = await fetchCountryInfo();
  console.log(countryInfo);
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
        <div>
          <h5 className='my-4 text-center text-xl font-bold leading-none text-gray-900 dark:text-white'>
            Border Countries
          </h5>
          <div className='w-[60vw] md:w-[20vw] max-h-[40vh] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
              {countryInfo.borderCountries.map((border) => (
                <CountryItem
                  key={border.countryCode}
                  countryCode={border.countryCode}
                  countryName={border.commonName}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className='w-[100vw] md:w-[50vw]'>
          <PopulationChart data={countryInfo.populationData} />
        </div>
      </div>
    </div>
  );
}
