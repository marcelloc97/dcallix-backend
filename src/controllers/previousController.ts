import { Request, Response } from 'express';

import { getPreviousLaunch, getLatestLaunches } from '../services/previous';

/**
 * GET the next launch based on current date
 */
const index = async (req: Request, res: Response) => {
  const response = await getPreviousLaunch();

  return res.json(response);
}

/**
 * GET the upcoming launches within this year or specified year from request
 * @param {String} req.body.date the date for request (must be in utc format)
 */
const list = async (req: Request, res: Response) => {
  const response = await getLatestLaunches(req.body, req.query);

  return res.json(response);
}

export default {
  index,
  list
}
