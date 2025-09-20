import type { AxiosResponse } from "axios";
import api from "../api/api";
import type Image from "../types/schema";
import type { ImageData } from "../types/schema";

export default class Gallery {
  static async getImages(): Promise<AxiosResponse<Image[]>> {
    return await api.get("/images");
  }

  static async getImage(id: number): Promise<AxiosResponse<ImageData>> {
    return await api.get(`image/${id}`);
  }

  static async postComment(comment: string, id: number) {
    return await api.post(`/image/${id}/comments`, { comment });
  }
}
