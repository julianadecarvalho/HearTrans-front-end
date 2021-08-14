export default interface ReviewResponse {
  id: number;
  rating: number;
  reviewBody: string;
  contentWarnings: string[];
}
