import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://essential-mart-server.vercel.app/",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
