import { DateTime } from "luxon";

import api from "../api";
import { IApiQuery } from "../../interfaces";

export default async ({ date }) => {
  const body = {
    query: {
			upcoming: true,
			date_utc: {
				'$gt': DateTime.now().toUTC().toString(),
				'$lte': date ?? '2022-12-31T00:00:00.000Z'
			}
		},
    options: {
			sort: 'desc'
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
