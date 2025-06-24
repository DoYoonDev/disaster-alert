import axios from 'axios';

const SERVICE_KEY = import.meta.env.VITE_API_KEY; // .env에 저장한 인증키

export const fetchAirQuality = async () => {
  const response = await axios.get(
    `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty`,
    {
      params: {
        serviceKey: SERVICE_KEY,
        returnType: 'json',
        numOfRows: 10,
        pageNo: 1,
        sidoName: '서울',
        ver: '1.0',
      },
    }
  );

  return response.data.response.body.items;
};
