export default function CountryItem({ countryCode, countryName }) {
  return (
    <li className=' text-center'>
      <a
        className='w-full py-2 md:py-4 block hover:bg-gray-400 dark:hover:bg-gray-900 rounded'
        href={`/country/${countryCode}/${countryName}`}
      >
        {countryName}
      </a>
    </li>
  );
}
