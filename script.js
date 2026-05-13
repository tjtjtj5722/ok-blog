const posts = [
  {
    title: "전세보증금이 늦어질 때 가장 먼저 확인할 5가지",
    category: "주거",
    date: "2026.05.13",
    read: "6분",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    summary: "내용증명, 임차권등기명령, 보증보험 청구 전 확인해야 할 순서를 정리했습니다."
  },
  {
    title: "월세 계약 전 등기부등본에서 봐야 하는 표시",
    category: "주거",
    date: "2026.05.12",
    read: "5분",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    summary: "근저당, 압류, 신탁 여부처럼 계약 전에 놓치기 쉬운 위험 신호를 사례로 설명합니다."
  },
  {
    title: "임금체불 신고 전 준비하면 좋은 자료",
    category: "노동",
    date: "2026.05.11",
    read: "7분",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    summary: "근로계약서가 없어도 출퇴근 기록, 급여명세, 대화 내용으로 사실관계를 정리할 수 있습니다."
  },
  {
    title: "알바 퇴직금, 1년만 채우면 무조건 받을까",
    category: "노동",
    date: "2026.05.10",
    read: "4분",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    summary: "계속근로기간과 주 소정근로시간 기준을 중심으로 자주 틀리는 지점을 짚었습니다."
  },
  {
    title: "상속포기와 한정승인, 선택 기준은 무엇일까",
    category: "가족",
    date: "2026.05.09",
    read: "8분",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=80",
    summary: "빚이 있는 상속에서 3개월 기간, 필요서류, 가족 간 순서를 한 번에 볼 수 있게 정리했습니다."
  },
  {
    title: "이혼 전 재산분할 자료를 정리하는 방법",
    category: "가족",
    date: "2026.05.08",
    read: "6분",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    summary: "예금, 부동산, 보험, 퇴직금처럼 빠뜨리기 쉬운 재산 목록을 체크리스트로 모았습니다."
  },
  {
    title: "교통사고 합의 전 치료비와 위자료를 보는 법",
    category: "교통",
    date: "2026.05.07",
    read: "6분",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    summary: "보험사 제안을 받기 전 손해 항목을 나눠 보고, 서두르면 놓치는 부분을 확인합니다."
  },
  {
    title: "음주운전 처벌 기준, 벌금만 보면 안 되는 이유",
    category: "교통",
    date: "2026.05.06",
    read: "5분",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80",
    summary: "형사처벌, 면허취소, 보험처리 제한이 함께 움직이는 구조를 쉽게 풀었습니다."
  },
  {
    title: "중고거래 사기, 경찰 신고 전에 캡처할 것들",
    category: "소비자",
    date: "2026.05.05",
    read: "5분",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    summary: "계좌, 채팅, 상품글, 배송정보를 증거로 남기는 순서와 환불 요구 문구를 정리했습니다."
  },
  {
    title: "헬스장 환불 거절, 약관보다 먼저 봐야 할 기준",
    category: "소비자",
    date: "2026.05.04",
    read: "4분",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    summary: "위약금, 이용일수, 사은품 공제처럼 환불액을 줄이는 항목을 따져봅니다."
  },
  {
    title: "프리랜서 계약서에서 대금 지급 조항 읽는 법",
    category: "창업",
    date: "2026.05.03",
    read: "7분",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    summary: "검수, 수정 횟수, 지연손해금, 저작권 이전 시점을 계약 전에 선명하게 만드는 방법입니다."
  },
  {
    title: "개인사업자 폐업 전 놓치면 곤란한 법적 정리",
    category: "창업",
    date: "2026.05.02",
    read: "6분",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    summary: "임대차, 직원, 미수금, 세금 신고를 닫는 순서를 현실적인 체크리스트로 제공합니다."
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
    grid.innerHTML = `<div class="empty-state">조건에 맞는 포스트가 없습니다.</div>`;
  } else {
    grid.innerHTML = visiblePosts
      .map(
        (post) => `
          <article class="post-card">
            <img src="${post.image}" alt="" loading="lazy" />
            <div class="post-body">
              <div class="post-meta">
                <span class="category">${post.category}</span>
                <span>${post.date} · ${post.read}</span>
              </div>
              <h3>${post.title}</h3>
              <p>${post.summary}</p>
              <a class="post-link" href="#" aria-label="${post.title} 읽기">읽어보기</a>
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
