const posts = [
  {
    title: "집주인이 전세금을 늦춘다면, 세입자의 첫 수는?",
    category: "주거",
    date: "2026.05.13",
    read: "6분",
    image: "assets/images/housing-deposit.jpg",
    summary: "내용증명부터 임차권등기명령까지, 당황한 세입자가 순서대로 확인할 행동을 이야기처럼 풀었습니다."
  },
  {
    title: "등기부등본에 낯선 단어가 보일 때",
    category: "주거",
    date: "2026.05.12",
    read: "5분",
    image: "assets/images/housing-register.jpg",
    summary: "근저당, 압류, 신탁이라는 단어가 계약서보다 먼저 보내는 위험 신호를 쉽게 읽어봅니다."
  },
  {
    title: "월급이 밀렸는데 사장님은 다음 주만 말한다면",
    category: "노동",
    date: "2026.05.11",
    read: "7분",
    image: "assets/images/wage-documents.jpg",
    summary: "임금체불 신고 전 모아둘 자료와 노동청 진정 흐름을 실제 대화 장면처럼 정리했습니다."
  },
  {
    title: "알바도 퇴직금을 받을 수 있는 순간",
    category: "노동",
    date: "2026.05.10",
    read: "4분",
    image: "assets/images/part-time-work.jpg",
    summary: "1년, 주 15시간, 계속근로라는 세 가지 기준을 생활 예시로 가볍게 짚습니다."
  },
  {
    title: "부모님의 빚까지 상속받게 될까 걱정된다면",
    category: "가족",
    date: "2026.05.09",
    read: "8분",
    image: "assets/images/inheritance-family.jpg",
    summary: "상속포기와 한정승인의 차이를 가족회의에서 바로 설명할 수 있을 만큼 쉽게 풀었습니다."
  },
  {
    title: "이혼 전 재산목록, 감정이 아니라 자료로 정리하기",
    category: "가족",
    date: "2026.05.08",
    read: "6분",
    image: "assets/images/divorce-assets.jpg",
    summary: "예금, 부동산, 보험, 퇴직금을 빠뜨리지 않도록 재산분할 준비표로 정리합니다."
  },
  {
    title: "교통사고 합의서에 서명하기 전, 잠깐 멈춰야 할 이유",
    category: "교통",
    date: "2026.05.07",
    read: "6분",
    image: "assets/images/traffic-accident.jpg",
    summary: "치료비, 휴업손해, 위자료를 나눠 보며 보험사 제안을 읽는 법을 설명합니다."
  },
  {
    title: "음주운전은 벌금 하나로 끝나지 않는다",
    category: "교통",
    date: "2026.05.06",
    read: "5분",
    image: "assets/images/drunk-driving.jpg",
    summary: "형사처벌, 면허, 보험 문제가 한꺼번에 움직이는 구조를 한 장면씩 따라갑니다."
  },
  {
    title: "중고거래 사기, 화나기 전에 캡처해야 할 것들",
    category: "소비자",
    date: "2026.05.05",
    read: "5분",
    image: "assets/images/used-market-fraud.jpg",
    summary: "채팅, 계좌, 상품글, 배송정보를 증거로 남기는 순서와 신고 전 체크포인트를 알려드립니다."
  },
  {
    title: "헬스장 환불 거절, 약관 한 줄에 겁먹지 않기",
    category: "소비자",
    date: "2026.05.04",
    read: "4분",
    image: "assets/images/gym-refund.jpg",
    summary: "위약금, 이용일수, 사은품 공제처럼 환불액을 줄이는 항목을 차근차근 따져봅니다."
  },
  {
    title: "프리랜서 계약서에서 돈이 새는 문장",
    category: "창업",
    date: "2026.05.03",
    read: "7분",
    image: "assets/images/freelance-contract.jpg",
    summary: "검수, 수정 횟수, 지급일, 저작권 이전 시점을 계약 전에 선명하게 만드는 법을 봅니다."
  },
  {
    title: "가게를 접기 전 법적으로 닫아야 할 문들",
    category: "창업",
    date: "2026.05.02",
    read: "6분",
    image: "assets/images/business-closing.jpg",
    summary: "임대차, 직원, 미수금, 신고 문제를 폐업 전 체크리스트로 정리했습니다."
  }
];

const perPage = 6;
let currentPage = 1;
let currentTopic = "전체";
let currentQuery = "";

const grid = document.querySelector("#postGrid");
const pagination = document.querySelector("#pagination");
const resultCount = document.querySelector("#resultCount");
const searchForm = document.querySelector(".hero-search");
const searchInput = document.querySelector("#searchInput");
const chips = [...document.querySelectorAll(".topic-chip")];

function filteredPosts() {
  return posts.filter((post) => {
    const topicMatch = currentTopic === "전체" || post.category === currentTopic;
    const query = currentQuery.trim().toLowerCase();
    const queryMatch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.summary.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query);

    return topicMatch && queryMatch;
  });
}

function renderPosts() {
  const matches = filteredPosts();
  const totalPages = Math.max(1, Math.ceil(matches.length / perPage));
  currentPage = Math.min(currentPage, totalPages);

  const start = (currentPage - 1) * perPage;
  const visiblePosts = matches.slice(start, start + perPage);

  resultCount.textContent = `${matches.length}개의 글`;

  if (visiblePosts.length === 0) {
    grid.innerHTML = `<div class="empty-state">조건에 맞는 글이 없습니다. 검색어를 조금 더 넓혀보세요.</div>`;
  } else {
    grid.innerHTML = visiblePosts
      .map(
        (post) => `
          <article class="post-card">
            <img src="${post.image}" alt="" />
            <div class="post-body">
              <div class="post-meta">
                <span class="category">${post.category}</span>
                <span>${post.date} · ${post.read}</span>
              </div>
              <h3>${post.title}</h3>
              <p>${post.summary}</p>
              <a class="post-link" href="#" aria-label="${post.title} 읽기">재미있게 읽기</a>
            </div>
          </article>
        `
      )
      .join("");
  }

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const buttons = [];
  buttons.push(pageButton("이전", currentPage - 1, currentPage === 1));

  for (let page = 1; page <= totalPages; page += 1) {
    buttons.push(pageButton(String(page), page, false, page === currentPage));
  }

  buttons.push(pageButton("다음", currentPage + 1, currentPage === totalPages));
  pagination.innerHTML = buttons.join("");

  pagination.querySelectorAll("button[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = Number(button.dataset.page);
      renderPosts();
      document.querySelector("#posts").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function pageButton(label, page, disabled, current = false) {
  const currentAttr = current ? ' aria-current="page"' : "";
  return `<button class="page-button" data-page="${page}" ${disabled ? "disabled" : ""}${currentAttr}>${label}</button>`;
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    currentTopic = chip.dataset.topic;
    currentPage = 1;
    renderPosts();
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  currentQuery = searchInput.value;
  currentPage = 1;
  renderPosts();
  document.querySelector("#posts").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
});

renderPosts();
