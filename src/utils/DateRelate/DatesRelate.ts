// src/utils/DateRelate.ts
const DateRelate = {
  getTodayString: (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 다른 시간 관련 유틸리티 함수들을 여기에 추가할 수 있습니다.
};

export default DateRelate;
