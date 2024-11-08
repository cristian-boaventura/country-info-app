const API_URL = process.env.API_URL;

export const fetchCountries = async () => {
  const response = await fetch(`${API_URL}/countries`);
  const data = await response.json();
  return data;
};

export const fetchCountryInfo = async (countryCode, countryName) => {
  const response = await fetch(
    `${API_URL}/countries/country-info?countryCode=${encodeURIComponent(
      countryCode
    )}&countryName=${encodeURIComponent(countryName)}`
  );
  const data = await response.json();
  return data;
};
