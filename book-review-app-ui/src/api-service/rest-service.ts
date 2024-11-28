import axios, { AxiosInstance, AxiosResponse } from 'axios';
class RestService {
    private axiosInstance: AxiosInstance;
  
    constructor(baseURL: string) {
      this.axiosInstance = axios.create({
        baseURL: baseURL,
        timeout: 5000, 
      });
    }
  
    async get<T>(url: string): Promise<AxiosResponse<T>> {
      return this.axiosInstance.get<T>(url);
    }
  
    async post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
      return this.axiosInstance.post<T>(url, data);
    }
  
    async put<T>(url: string, data: any): Promise<AxiosResponse<T>> {
      return this.axiosInstance.put<T>(url, data);
    }
  
    async delete<T>(url: string): Promise<AxiosResponse<T>> {
      return this.axiosInstance.delete<T>(url);
    }
  }
  
  export default RestService;