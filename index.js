// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "미리 메리크리스마스!" },
  { "number": 2, "message": "행복한 연말 보내세요." },
  { "number": 3, "message": "벌써 2023년 마지막 달이에요~" },
  { "number": 4, "message": "올해도 잘 마무리하시고 고생 많으셨습니다!!" },
  { "number": 5, "message": "한 살 더 드시는 소감은 어떠신지요,," },
  { "number": 6, "message": "행복한 12월 되세요." },
  { "number": 7, "message": "앞으로 뭐 먹고 살지" },
  { "number": 8, "message": "날씨도 추운데 따뜻하게 입고 다니세요." },
  { "number": 9, "message": "감기 조심하세요! 행복한 하루 되세요!!" },
  { "number": 10, "message": "연말은 가족들과 보내는게 최고지요." },
  { "number": 11, "message": "소중한 사람과 오늘 하루를 공유하세요~" },
  { "number": 12, "message": "시간이 너무 빨리 지나네요" },
  { "number": 13, "message": "사랑합니다!" },
  { "number": 14, "message": "성숙한 사람에 한발자국 더 다가가는 시간이 되길." },
  { "number": 15, "message": "쿠키 먹고싶당." },
  { "number": 16, "message": "겨울하면 떠오르는 음식은 뭔가요?" },
  { "number": 17, "message": "눈 오면 길바닥 조심하세요" },
  { "number": 18, "message": "저는 오늘 시험이 끝났어요. 큰 산 하나 넘겼당" },
  { "number": 19, "message": "요번주도 화이팅하시고 행복하세요" },
  { "number": 20, "message": "12월, 당신과 나누는 특별한 행복의 순간들." },
  { "number": 21, "message": "모두에게 다가오는 24일, 행복이 함께하기를!" },
  { "number": 22, "message": "벌써 월말이 됐네요. 올해 마무리는 잘 돼가시나요?" },
  { "number": 23, "message": "곧 크리스마스 이브네요. 행복한 하루 보내세요" },
  { "number": 24, "message": "미리 메리크리스마스~~ 이브도 행복하게 보내세용♥" }
];

