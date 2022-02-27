import axios from "axios";
import apiKey from "./apiKey";

export function FetchData() {
  const DATE = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[DATE.getMonth()];
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = DATE.getDate() + " " + month + " " + DATE.getFullYear();
  const dateTime = time + ", " + date;

  axios
    .get(`https://api.ipdata.co/?api-key=${apiKey}`)
    .then((res) => {
      const IP_PC = "103.215.225.169";
      const IP_M = "223.223.6.252";
      if (res.data.ip != IP_PC && res.data.ip != IP_M) {
        console.log("yess");
        axios.post(
          "https://my-website-f197b-default-rtdb.firebaseio.com/users.json",
          { date: dateTime, info: res.data }
        );
      }
    })
    .catch((err) => {
      console.log("ERROR - > API" + err);
      return;
    });
}
