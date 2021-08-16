import { Point } from "geojson";
import ProviderResponse from "./provider-response";

export default interface LocationResponse {
  readonly id: number;
  readonly locationName: string;
  readonly locationTypes: string[];
  readonly googleMapsUrl: string;
  readonly locationUrl: string;
  readonly latitude: string;
  readonly longitude: string;
  readonly phone: string;
  readonly address: string;
  readonly googlePlaceId: string;
  readonly providers: ProviderResponse[];
  readonly locationPoint: Point;
}
