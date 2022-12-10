import axios from "axios";

const baseUrl = "https://worldtimeapi.org/api/timezone/Europe";

const getTime = async (city) => {
  const time = await axios.get(`${baseUrl}/${city}`);
  const currentTime = time.data.unixtime + time.data.raw_offset;
  return currentTime;
};

const timeService = { getTime };
export default timeService;
