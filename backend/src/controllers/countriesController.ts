import { Request, Response } from 'express';
import axios from 'axios';
const countryListBaseUrl = process.env.COUNTRY_LIST_BASE_URL;
const countryInfoBaseUrl = process.env.COUNTRY_INFO_BASE_URL;

export const getAllCountries = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `${countryListBaseUrl}/api/v3/AvailableCountries`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getCountryInfo = async (req: Request, res: Response) => {
  const { countryCode, countryName } = req.query;
  if (!countryCode || !countryName) {
    res
      .status(400)
      .json({ message: 'Invalid input: Must provide country code and name' });
    return;
  }

  try {
    const borderCountries = await axios.get(
      `${countryListBaseUrl}/api/v3/CountryInfo/${countryCode}`
    );

    const populationData = await axios.post(
      `${countryInfoBaseUrl}/api/v0.1/countries/population`,
      { country: countryName }
    );

    const flagUrl = await axios.post(
      `${countryInfoBaseUrl}/api/v0.1/countries/flag/images`,
      { iso2: countryCode }
    );

    if (
      !borderCountries.data.borders ||
      !populationData.data.data ||
      !flagUrl.data.data
    ) {
      res.status(404).json({ message: 'Country not found' });
      return;
    }

    res.json({
      borderCountries: borderCountries.data.borders,
      populationData: populationData.data.data.populationCounts,
      flagUrl: flagUrl.data.data.flag
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};
