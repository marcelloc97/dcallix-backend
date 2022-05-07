import IApiResponse from "./IApiResponse";

export default interface IApiQueryStructure {
  docs: Array<IApiResponse>,
  totalDocs: number,
  offset: number,
  limit: number,
  totalPages: number,
  pages: number,
  pagingCounter: number,
  hasPrevPage: boolean,
  hasNextPage: boolean,
  prevPage?: number,
  nextPage?: number
}
