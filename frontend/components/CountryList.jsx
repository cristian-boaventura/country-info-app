import CountryItem from '@/components/CountryItem';

const CountryList = ({ countries }) => {
  return (
    <div className='w-full max-w-md max-h-[80vh] overflow-y-scroll bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
        {countries.map((country, i) => (
          <CountryItem
            key={i}
            countryCode={country.countryCode}
            countryName={country.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
