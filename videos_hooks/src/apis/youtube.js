import axios from "axios";

const KEY = "AIzaSyC1IGerJCjHMTx7Pp2SqOT7tHp2FEc9xys";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
