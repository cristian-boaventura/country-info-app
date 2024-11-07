import express from 'express';
import {
  getAllCountries,
  getCountryInfo,
} from '../controllers/countriesController';

const router = express.Router();

router.get('/', getAllCountries);
router.get('/country-info', getCountryInfo);

export default router;
