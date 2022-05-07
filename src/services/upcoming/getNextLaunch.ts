import { DateTime } from "luxon";

import api from "../api";
import { IApiQuery } from "../../interfaces";

export default async () => {
  const body = {
    query: {
			upcoming: true,
      date_utc: {
        '$gt': DateTime.now().toUTC().toString()
      }
		},
    options: {
			sort: 'asc'
    }
  };

  const response = await api.post('/launches/query', body);
  const data: IApiQuery = response.data;
  const { name, date_utc, date_local, id, upcoming } = data.docs[0];

  return { name, date_utc, date_local, id, upcoming };
}
