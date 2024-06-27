import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "221443b1e41c4d63ae899493147a8ee0",
  },
});

export { CanceledError };
