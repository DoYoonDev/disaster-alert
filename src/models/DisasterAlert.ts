export interface DisasterAlert {
  loc: string;     // 발생 위치
  fcTp: string;    // 속보 타입 (예: '조기', '정식')
  tmEqk: string;   // 발생 시각
}

export interface AirQualityItem {
  stationName: string; // 측정소 이름
  pm10Value: string;   // PM10 (미세먼지)
  pm25Value: string;   // PM2.5 (초미세먼지)
  dataTime: string;    // 측정 시간
}