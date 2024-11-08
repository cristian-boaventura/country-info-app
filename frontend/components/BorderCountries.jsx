import CountryItem from '@/components/CountryItem';

export default function BorderCountries({ borderCountries }) {
  return (
    <div>
      <h5 className='my-4 text-center text-xl font-bold leading-none text-gray-900 dark:text-white'>
        Border Countries
      </h5>
      <div className='w-[60vw] md:w-[20vw] max-h-[40vh] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
          {borderCountries.map((border) => (
            <CountryItem
              key={border.countryCode}
              countryCode={border.countryCode}
              countryName={border.commonName}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
