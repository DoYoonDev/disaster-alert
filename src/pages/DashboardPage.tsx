import React, { useEffect, useState } from 'react';
import { fetchAirQuality } from '../apis/airQualityApi';
import type { AirQualityItem } from '../models/DisasterAlert';

const DashboardPage = () => {
  const [data, setData] = useState<AirQualityItem[]>([]);

  useEffect(() => {
    fetchAirQuality()
      .then((items) => {
        setData(items);
      })
      .catch((err) => {
        console.error('미세먼지 API 오류:', err);
      });
  }, []);

  return (
    <div>
      <h2>🌫 실시간 미세먼지 정보 (서울)</h2>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            📍 {item.stationName} | PM10: {item.pm10Value}㎍/㎥ | PM2.5: {item.pm25Value}㎍/㎥ <br />
            ⏰ 측정시각: {item.dataTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
