// 첫 번째 데이터 (기준 시간)
const data1 = [
  ["Jul/09/2024 08:26:16 +09:00", 0.6468843720256409],
  ["Jul/09/2024 11:53:11 +09:00", 0.6754266478090544],
  ["Jul/09/2024 12:07:59 +09:00", 0.6757765461866179],
  ["Jul/09/2024 12:13:31 +09:00", 0.6767762548397588],
  ["Jul/09/2024 12:21:53 +09:00", 0.5986454898770505],
  ["Jul/09/2024 13:04:01 +09:00", 0.6508333653454268],
  ["Jul/09/2024 15:26:00 +09:00", 0.6527828615522282],
  ["Jul/09/2024 15:31:05 +09:00", 0.6508333653454268],
  ["Jul/09/2024 15:45:20 +09:00", 0.6513332366044364],
  ["Jul/09/2024 15:56:40 +09:00", 0.6514831979236645],
  ["Jul/09/2024 16:15:14 +09:00", 0.6521294588113845]
];

// 두 번째 데이터
const data2 = [
  ["Jul/09/2024 08:26:00 +09:00", 0.6638689602582768],
  ["Jul/09/2024 11:53:03 +09:00", 0.6826781115081167],
  ["Jul/09/2024 12:21:58 +09:00", 0.6117415888992928],
  ["Jul/09/2024 13:03:57 +09:00", 0.6617679111862912],
  ["Jul/09/2024 14:45:36 +09:00", 0.6077594019102223],
  ["Jul/09/2024 15:02:36 +09:00", 0.6617679111862912]
];

// 날짜 파서
const parseDate = str => new Date(str.replace(/(\w+)\/(\d{2})\/(\d{4})/, '$2 $1 $3'));

// 가장 가까운 시간 찾기
const findClosestValue = (targetTime, dataset) => {
  let minDiff = Infinity;
  let closestValue = null;
  for (const [timeStr, value] of dataset) {
    const time = parseDate(timeStr);
    const diff = Math.abs(targetTime - time);
    if (diff < minDiff) {
      minDiff = diff;
      closestValue = value;
    }
  }
  return closestValue;
};

// 기준 시간으로 테이블 구성
const resultTable = data1.map(([timeStr, val1]) => {
  const time = parseDate(timeStr);
  const val2 = findClosestValue(time, data2);
  return {
    time: timeStr,
    value1: val1,
    value2: val2
  };
});

// 출력
console.table(resultTable);
