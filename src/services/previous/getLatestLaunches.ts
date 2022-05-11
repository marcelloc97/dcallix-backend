import { DateTime } from "luxon";

import api from "../api";
import { IApiQuery } from "../../interfaces";

export default async (reqBody, reqQuery) => {
  let date = reqBody?.date ?? '2021-12-31T00:00:00.000Z';
  let limit = reqQuery?.limit ?? 10;

  const body = {
    query: {
      date_utc: {
        '$lte': DateTime.now().toUTC().toString(),
        '$gte': date
      }
		},
    options: {
			sort: { date_utc: 'desc' },
      limit,
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
  const { docs, pages, totalDocs, nextPage, pagingCounter, prevPage } = data;

  return {
    docs,
    pages,
    totalDocs,
    pagingCounter,
    nextPage,
    prevPage
  };
}
