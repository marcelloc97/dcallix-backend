import IApiPayload from "./IApiPayload";

export default interface IApiResponse {
  payloads: IApiPayload[],
  name: string,
  flight_number: number,
  date_utc: string,
  date_local: string,
  id: string
}
