import { DateTime } from "luxon";

import api from "../api";
import { IApiQuery } from "../../interfaces";

export default async () => {
  const body = {
    query: {
      date_utc: {
        '$lte': DateTime.now().toUTC().toString()
      }
		},
    options: {
			sort: { date_utc: 'desc' },
      limit: 1,
      select: [
        'payloads',
        'name',
        'flight_number',
        'date_utc',
        'date_local',
        'id'
      ],
      populate: [
        'payloads'
      ]
    }
  };

  const response = await api.post('/launches/query', body);
  const data: IApiQuery = response.data;
  
  return data.docs[0];
}
