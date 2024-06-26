import apiClient from "./api-client";

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    const controller = new AbortController();
    const request = apiClient.get(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  //   delete(id:number) {
  //     apiClient.delete(``)
  //   }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
