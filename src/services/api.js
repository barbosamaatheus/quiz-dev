import axios from "axios";

const api = axios.create({
  baseURL: "https://quizapi.io/api/v1",
  headers: {
    "X-Api-Key": "dx1n9vzMbzLbvgoI3kfY7TGAW5WyYvnFYfmaeDVD",
  },
  params: {
    limit: 10,
  },
});

export default api;
