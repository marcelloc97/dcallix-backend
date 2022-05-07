import { Request, Response } from 'express';

// import getPreviousLaunch from '../services/previous/getPreviousLaunch';
// import getPastLaunches from '../services/previous/getPastLaunches';

/**
 * GET the next launch based on current date
 */
const index = async (req: Request, res: Response) => {
  // const response = await getPreviousLaunch();

  // return res.json(response);
}

/**
 * GET the upcoming launches within this year or specified year from request
 * @param {String} req.body.date the date for request (must be in utc format)
 */
const list = async (req: Request, res: Response) => {
  // const response = await getPastLaunches(req.body);

  // return res.json(response);
}

export default {
  index,
  list
}
