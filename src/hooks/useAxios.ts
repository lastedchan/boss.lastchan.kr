import axios, { AxiosRequestConfig } from "axios";

export default function useAxios<T>() {
  return (url: string, config?: AxiosRequestConfig) =>
    axios<T>(url, { ...config })
      .then(res => res.data)
      .catch(res => res.response);
}
