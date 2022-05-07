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
        'rocket',
        'launchpad',
        'flight_number',
        'name',
        'date_utc',
        'date_local',
        'upcoming',
        'tbd',
        'id'
      ]
    }
  };

  const response = await api.post('/launches/query', body);
  const data: IApiQuery = response.data;
  
  return data;
}
