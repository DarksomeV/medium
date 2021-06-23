import { IGetTagsResponse } from "./get-tags-response.interface";

export interface ITagsState {
  isLoading: boolean;
  error: string;
  data: IGetTagsResponse;
}
