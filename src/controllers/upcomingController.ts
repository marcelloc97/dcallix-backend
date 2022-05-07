import { Request, Response } from 'express';
import { DateTime } from 'luxon';

import api from '../services/api';
import IApiQueryStructure from '../interfaces/IApiQueryStructure';

/**
 * GET the next launch based on current date
 */
const index = async (req: Request, res: Response) => {
  const body = {
    query: {
			upcoming: true,
      date_utc: {
        '$gt': DateTime.now().toUTC().toString()
      }
		},
    options: {
			sort: 'asc',
      populate: [
        'payloads'
      ]
    }
  };

  const response = await api.post('/launches/query', body);
  const data: IApiQueryStructure = response.data;

  // return only the first in the array (if you limit the request to 1, will come a different information)
  return res.json(data.docs[0]);
}

/**
 * GET the upcoming launches within this year or specified year from request
 */
const list = async (req: Request, res: Response) => {
  const body = {
    query: {
			upcoming: true,
			date_utc: {
				'$gt': DateTime.now().toUTC().toString(),
				'$lte': '2022-12-31T00:00:00.000Z'
			}
		},
    options: {
			sort: 'desc',
      populate: [
        'payloads'
      ]
    }
  };

  const response = await api.post('/launches/query', body);

  return res.json(response.data);
}

export default {
  index,
  list
}