import LocationResponse from "./location-response";
import ReviewResponse from "./review-response";

export default interface ProviderResponse {
  readonly id: number;
  readonly fullName: string;
  readonly otherNames: string[];
  readonly pronouns: string;
  readonly titles: string[];
  readonly specialties: string[];
  readonly languages: string[];
  readonly services: string[];
  readonly remoteVisits?: boolean;
  readonly slidingScalePay?: boolean;
  avgRating: string;
  locations?: LocationResponse[];
  reviews?: ReviewResponse[];
}
