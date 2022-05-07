
export default interface IApiResponse {
  rocket: string,
  payloads: Array<object>,
  launchpad: string,
  flight_number: number,
  name: string,
  date_utc: string,
  upcoming: boolean,
  tbd: string,
  id: string
}
