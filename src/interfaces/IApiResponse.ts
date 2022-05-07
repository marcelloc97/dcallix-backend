
export default interface IApiResponse {
  rocket: string,
  launchpad: string,
  flight_number: number,
  name: string,
  date_utc: string,
  date_local: string,
  upcoming: boolean,
  tbd: string,
  id: string
}
