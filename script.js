const posts = [
  {
    title: "문 앞 배송 완료 떴는데 택배가 없다면, 누구에게 먼저 책임을 물어야 할까?",
    category: "소비자",
    date: "2026.06.17",
    read: "5분",
    image: "assets/images/used-market-fraud.jpg",
    summary:
      "온라인 주문 상품이 문 앞 배송 완료로 찍혔는데 실제로는 보이지 않을 때, 판매자·택배사·플랫폼 중 누구에게 먼저 말해야 하는지와 예외를 쉬운 순서로 정리했습니다.",
    scenario:
      "퇴근길에 택배 앱을 보니 '배송 완료'가 떠 있는데 집 앞에는 상자가 없습니다. 판매자는 택배사에 문의하라고 하고, 택배사는 문 앞에 두었다고만 말할 때 소비자가 바로 챙겨야 할 순서를 묻는 상황입니다.",
    checklist: [
      "문 앞 보관에 내가 미리 동의했는지부터 확인합니다. 동의 없이 임의로 두고 갔다면 택배사 책임을 물을 여지가 커집니다.",
      "주문내역, 배송완료 화면, 문자나 통화기록, 현관 CCTV나 공동현관 출입기록처럼 배송과 분실 시점을 보여주는 자료를 바로 모읍니다.",
      "통신판매라면 우선 판매자에게 미수령 사실을 알리고 재배송 또는 환급 요구를 남깁니다. 판매자가 배송사를 통해 해결하더라도 소비자는 판매자와 바로 이야기할 수 있습니다.",
      "플랫폼이 단순 중개인지 직접 판매자인지도 확인합니다. 단순 통신판매중개업자는 책임이 제한될 수 있어 판매자와 배송사업자를 구분해 연락해야 합니다."
    ],
    nextAction:
      "오늘 바로 주문내역과 배송완료 증거를 캡처하고, 판매자에게 '미수령' 사실을 문자나 채팅으로 남기세요. 문 앞 보관에 동의한 적이 없다면 그 문장도 함께 적어 두는 편이 좋습니다.",
    sourceNote:
      "전자상거래법은 통신판매업자가 재화 공급 조치를 해야 한다고 보고, 생활법령은 부재 중 특정 장소 보관에 동의하지 않았다면 임의 배송 뒤 분실에 대해 배상 책임을 물을 수 있다고 설명합니다. 한국소비자원 분쟁사례도 문 앞 배송 분실 사건에서 플랫폼, 판매자, 배송사업자의 책임을 나눠 판단했습니다.",
    sources: [
      {
        label: "국가법령정보센터 · 전자상거래 등에서의 소비자보호에 관한 법률 제15조",
        url: "https://www.law.go.kr/LSW//lsLawLinkInfo.do?chrClsCd=010202&lsId=009318&lsJoLnkSeq=1000527527&print=print"
      },
      {
        label: "찾기쉬운 생활법령정보 · 받는 사람이 없어 특정장소에 둔 택배가 분실된 경우",
        url: "https://www.easylaw.go.kr/CSP/CSP/OnhunqueansLstRetrieve.laf?onhunqnaAstSeq=88&pageType=20&sortType=11"
      },
      {
        label: "국가법령정보센터 · 전자상거래법 시행령 제11조(배송사업자 등의 분쟁해결 협조)",
        url: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=127878"
      },
      {
        label: "한국소비자원 · 문 앞 배송 후 고가 물품 분실 분쟁조정 사례",
        url: "https://www.kca.go.kr/bizinfo/csmDetailView.do?boardid=00000007&brdata_no=1003246010"
      }
    ]
  },
  {
    title: "전입신고는 했는데 확정일자를 아직 못 받았다면, 보증금 순서가 밀릴까?",
    category: "주거",
    date: "2026.06.16",
    read: "5분",
    image: "assets/images/housing-register.jpg",
    summary:
      "전입신고만으로 생기는 대항력과 확정일자를 받아야 생기는 우선변제권은 다릅니다. 이사 직후 무엇을 먼저 챙겨야 하는지 사례형으로 정리했습니다.",
    scenario:
      "새 전셋집에 이사한 직장인이 전입신고는 마쳤지만 확정일자는 며칠 뒤 받으려는 상황입니다. '이미 전입신고했으니 괜찮겠지'라고 생각하지만, 보증금 순서가 밀릴까 걱정됩니다.",
    checklist: [
      "실제로 입주했고 전입신고도 마쳤는지 먼저 확인합니다. 이 두 요건을 갖춘 다음 날부터 대항력이 생깁니다.",
      "보증금을 다른 채권자보다 먼저 돌려받는 우선변제권은 대항요건에 더해 확정일자까지 있어야 생긴다는 점을 구분합니다.",
      "임대차계약서 원본과 신분증을 챙겨 주택 소재지 주민센터, 출장소, 등기소 등에서 확정일자를 받습니다.",
      "신고 대상 계약이라면 체결일로부터 30일 안에 주택임대차 신고를 하고, 계약서를 첨부하면 확정일자가 자동 부여되는지도 확인합니다."
    ],
    nextAction:
      "오늘 이미 입주와 전입신고를 마쳤다면 계약서 원본을 들고 가능한 가장 빠른 날 확정일자를 받으세요. 보증금이 큰 계약이라면 임대차 신고 대상인지까지 함께 확인해 두는 편이 안전합니다.",
    sourceNote:
      "주택임대차보호법상 대항력은 '주택의 인도 + 주민등록'을 갖춘 다음 날 발생하고, 우선변제권은 여기에 확정일자까지 갖춰야 인정됩니다. 국토교통부 안내에 따르면 신고 대상 임대차는 30일 내 신고하면서 계약서를 첨부하면 확정일자가 자동 부여됩니다.",
    sources: [
      {
        label: "국가법령정보센터 · 주택임대차보호법 제3조(대항력 등)",
        url: "https://www.law.go.kr/lsLinkCommonInfo.do?ancYnChk=&chrClsCd=010202&lsJoLnkSeq=1018577211"
      },
      {
        label: "찾기쉬운 생활법령 · 대항력 및 우선변제권 취득",
        url: "https://easylaw.go.kr/CSP/CnpClsMain.laf?ccfNo=2&cciNo=3&cnpClsNo=1&csmSeq=629&popMenu=ov"
      },
      {
        label: "찾기쉬운 생활법령 · 확정일자 받기",
        url: "https://www.easylaw.go.kr/CSP/OnhunqueansInfoRetrieve.laf?onhunqnaAstSeq=84&onhunqueSeq=3029"
      },
      {
        label: "부동산거래관리시스템 · 주택임대차신고 서비스안내",
        url: "https://rtms.molit.go.kr/main/serviceInfo.do"
      }
    ]
  },
  {
    title: "카페 알바를 1년 채웠는데 '파트타이머는 퇴직금 없다'고 하면?",
    category: "노동",
    date: "2026.06.03",
    read: "5분",
    image: "assets/images/part-time-work.jpg",
    summary:
      "아르바이트라도 1년 이상 계속 일했고 4주 평균 주 15시간 이상이면 퇴직금 대상이 될 수 있다는 기준을 사례형으로 정리했습니다.",
    scenario:
      "주 4일, 하루 4시간씩 카페에서 일한 대학생이 1년을 채우고 그만두려는데 사장이 '알바는 퇴직금이 없다'고 말하는 상황입니다.",
    checklist: [
      "근무 시작일과 마지막 근무일을 기준으로 계속근로기간이 1년 이상인지 먼저 계산합니다.",
      "최근 4주 기준으로 1주 소정근로시간 평균이 15시간 이상인지 근무표와 계약서로 확인합니다.",
      "근로계약서, 급여명세서, 출근기록, 통장 입금내역을 한 폴더에 모아 둡니다.",
      "퇴직 뒤 14일이 지나도 지급이 없고 연장 합의도 없다면 관할 고용노동지청 진정 준비를 시작합니다."
    ],
    nextAction:
      "근무표와 급여내역으로 주 15시간 이상 근무 사실을 먼저 계산한 뒤, 퇴직일과 지급기한 14일을 적어 사업주에게 문자로 남기세요.",
    sourceNote:
      "근로자퇴직급여 보장법은 1년 미만 근로자와 4주 평균 주 15시간 미만 근로자를 제외하고, 퇴직금은 1년에 대해 30일분 이상의 평균임금을 퇴직 후 14일 내 지급하도록 정합니다.",
    sources: [
      {
        label: "국가법령정보센터 · 근로자퇴직급여 보장법 제4조",
        url: "https://www.law.go.kr/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=900196650"
      },
      {
        label: "찾기쉬운 생활법령 · 퇴직금 지급",
        url: "https://easylaw.go.kr/CSP/CnpClsMain.laf?ccfNo=3&cciNo=2&cnpClsNo=1&csmSeq=999&menuType=cnpcls&popMenu=ov"
      },
      {
        label: "찾기쉬운 생활법령 · 퇴직급여 설정 Q&A",
        url: "https://www.easylaw.go.kr/CSP/OnhunqueansInfoRetrieve.laf?onhunqnaAstSeq=82&onhunqueSeq=4841"
      }
    ]
  },
  {
    title: "퇴사했는데 월급이 2주째 안 들어온다면, 언제 바로 신고할까?",
    category: "노동",
    date: "2026.05.31",
    read: "5분",
    image: "assets/images/wage-documents.jpg",
    summary:
      "퇴직한 날부터 14일 안에 임금·퇴직금 등을 지급해야 한다는 원칙, 예외, 바로 챙길 증거를 한 번에 정리했습니다.",
    scenario:
      "사장님이 '다음 주에 줄게'라고 미루는데, 퇴사일은 이미 지났고 마지막 월급과 퇴직금이 비어 있는 상황입니다.",
    checklist: [
      "퇴직일과 미지급 항목을 문자나 메일로 남겼는지 확인합니다.",
      "근로계약서, 급여명세서, 출근기록, 통장 입금내역을 모읍니다.",
      "14일 연장에 대한 명시적 합의가 있었는지 먼저 봅니다.",
      "합의가 없다면 사업장 관할 고용노동지청 진정 준비를 시작합니다."
    ],
    nextAction:
      "퇴직일, 미지급 금액, 지급 약속 메시지를 한 장으로 정리한 뒤 14일이 지나면 고용노동부 진정 경로를 바로 밟으세요.",
    sourceNote:
      "근로기준법 제36조는 퇴직 후 14일 내 금품 지급 원칙을 두고, 찾기쉬운 생활법령과 고용노동부 안내도 같은 기준으로 설명합니다.",
    sources: [
      {
        label: "국가법령정보센터 · 근로기준법 제36조",
        url: "https://www.law.go.kr/LSW/lsLawLinkInfo.do?ancYnChk=0&chrClsCd=010202&lsJoLnkSeq=1012828349"
      },
      {
        label: "찾기쉬운 생활법령 · 금품청산",
        url: "https://www.easylaw.go.kr/CSP/CSP/CnpClsMain.laf?ccfNo=6&cciNo=2&cnpClsNo=1&csmSeq=514&popMenu=ov"
      },
      {
        label: "고용노동부 상담사례 · 퇴직 후 14일 내 미지급",
        url: "https://www.moel.go.kr/minwon/fastcounsel/fastcounselView.do?inetDcssMngId=202411110440093970328"
      }
    ]
  },
  {
    title: "집주인이 전세금을 늦춘다면, 세입자의 첫 수는?",
    category: "주거",
    date: "2026.05.13",
    read: "6분",
    image: "assets/images/housing-deposit.jpg",
    summary:
      "내용증명부터 임차권등기명령까지, 당황한 세입자가 순서대로 확인할 행동만 추렸습니다."
  },
  {
    title: "등기부등본에서 빨간 줄보다 먼저 봐야 할 칸",
    category: "주거",
    date: "2026.05.12",
    read: "5분",
    image: "assets/images/housing-register.jpg",
    summary:
      "근저당, 가압류, 전세권이 보일 때 계약 전에 어느 줄부터 읽어야 하는지 빠르게 짚어봅니다."
  },
  {
    title: "월급이 비었는데 사장이 '다음 주'만 말한다면",
    category: "노동",
    date: "2026.05.11",
    read: "7분",
    image: "assets/images/wage-documents.jpg",
    summary:
      "임금체불 신고 전 모아둘 자료와 노동청 진정 흐름을 실제 대응 순서대로 정리했습니다."
  },
  {
    title: "알바도 퇴직금을 받을 수 있는 시간",
    category: "노동",
    date: "2026.05.10",
    read: "4분",
    image: "assets/images/part-time-work.jpg",
    summary:
      "1주 15시간, 계속근로 1년 같은 기준을 사례형 질문으로 가볍게 확인합니다."
  },
  {
    title: "부모님의 빚까지 상속받게 될까 걱정된다면",
    category: "가족",
    date: "2026.05.09",
    read: "8분",
    image: "assets/images/inheritance-family.jpg",
    summary:
      "상속포기와 한정승인의 차이를 가족회의 자리에서 바로 설명할 수 있게 정리했습니다."
  },
  {
    title: "이혼 전 재산목록, 감정이 아니라 자료로 정리하기",
    category: "가족",
    date: "2026.05.08",
    read: "6분",
    image: "assets/images/divorce-assets.jpg",
    summary:
      "예금, 부동산, 보험, 퇴직금을 빼먹지 않도록 재산분할 준비표로 묶었습니다."
  },
  {
    title: "교통사고 합의서에 서명하기 전 더 늦기 전에 볼 것",
    category: "교통",
    date: "2026.05.07",
    read: "6분",
    image: "assets/images/traffic-accident.jpg",
    summary:
      "치료비, 휴업손해, 과실비율이 빠진 상태로 보험사 제안에 서두르지 않는 법을 설명합니다."
  },
  {
    title: "음주운전은 벌금 하나로 끝나지 않는 이유",
    category: "교통",
    date: "2026.05.06",
    read: "5분",
    image: "assets/images/drunk-driving.jpg",
    summary:
      "형사처벌, 면허, 보험 문제가 한 번에 움직이는 구조를 초보자 눈높이로 풀었습니다."
  },
  {
    title: "중고거래 사기, 입금하기 전에 캡처해야 할 것들",
    category: "소비자",
    date: "2026.05.05",
    read: "5분",
    image: "assets/images/used-market-fraud.jpg",
    summary:
      "채팅, 계좌, 상품글, 배송정보를 증거로 남기는 순서를 체크사인처럼 짚어드립니다."
  },
  {
    title: "헬스장 환불 계산, 며칠 치 차감인지 따져보기",
    category: "소비자",
    date: "2026.05.04",
    read: "4분",
    image: "assets/images/gym-refund.jpg",
    summary:
      "위약금, 이용일수, 공제 기준을 헷갈리지 않도록 항목별로 나눠봤습니다."
  },
  {
    title: "프리랜서 계약서에서 먼저 체크해야 할 문장",
    category: "창업",
    date: "2026.05.03",
    read: "7분",
    image: "assets/images/freelance-contract.jpg",
    summary:
      "검수 횟수, 지급일, 수정 범위 같은 실무 분쟁 포인트를 계약 문장으로 바꿔봅니다."
  },
  {
    title: "가게를 닫기 전 법적으로 챙겨야 할 문서들",
    category: "창업",
    date: "2026.05.02",
    read: "6분",
    image: "assets/images/business-closing.jpg",
    summary:
      "임대차, 직원, 미수금, 세금 문제를 폐업 전 체크리스트로 정리했습니다."
  }
];

const state = {
  currentPage: 1,
  currentTopic: "전체",
  currentQuery: ""
};

const perPage = 6;
const root = document.querySelector("#root");
const topics = ["전체", "주거", "노동", "가족", "교통", "소비자", "창업"];

document.title = "OK Blog | 생활법률을 재미있게 읽는 곳";
const description = document.querySelector('meta[name="description"]');
if (description) {
  description.setAttribute(
    "content",
    "전세, 임금체불, 상속, 교통사고처럼 생활 속 법률 이슈를 사례와 체크리스트로 쉽게 읽는 한국어 블로그"
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function filteredPosts() {
  return posts.filter((post) => {
    const topicMatch = state.currentTopic === "전체" || post.category === state.currentTopic;
    const query = state.currentQuery.trim().toLowerCase();
    const haystack = [post.title, post.summary, post.category, post.nextAction, post.scenario]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return topicMatch && (!query || haystack.includes(query));
  });
}

function featuredMarkup(post) {
  const checklist = (post.checklist || [])
    .map(
      (item) => `
        <li class="flex gap-3 rounded-2xl bg-white/80 p-4 shadow-card">
          <span class="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-butter text-[0.8rem] font-extrabold text-ink">✓</span>
          <span class="text-sm leading-7 text-ink/80">${escapeHtml(item)}</span>
        </li>
      `
    )
    .join("");

  const sources = (post.sources || [])
    .map(
      (source) => `
        <li>
          <a class="font-semibold text-violet underline-offset-4 hover:underline" href="${source.url}" target="_blank" rel="noreferrer">
            ${escapeHtml(source.label)}
          </a>
        </li>
      `
    )
    .join("");

  return `
    <section id="today-post" class="mx-auto grid max-w-6xl gap-6 px-5 pb-6 md:px-8">
      <div class="overflow-hidden rounded-[2rem] border border-violet/15 bg-white/75 shadow-card backdrop-blur">
        <div class="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div class="relative overflow-hidden border-b border-violet/10 bg-gradient-to-br from-lavender via-white to-butter/70 p-7 md:p-10 lg:border-b-0 lg:border-r">
            <div class="soft-grid absolute inset-0 opacity-50"></div>
            <div class="relative">
              <div class="mb-4 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.16em] text-violet/80">
                <span class="rounded-full bg-violet px-3 py-1 text-white">${escapeHtml(post.category)}</span>
                <span class="rounded-full bg-white px-3 py-1">${escapeHtml(post.date)}</span>
                <span class="rounded-full bg-white px-3 py-1">읽기 ${escapeHtml(post.read)}</span>
              </div>
              <p class="display-font mb-3 text-lg text-ink/70">오늘의 새 글</p>
              <h2 class="display-font max-w-3xl text-3xl leading-tight text-ink md:text-5xl">${escapeHtml(post.title)}</h2>
              <div class="mt-6 space-y-4 text-[15px] leading-8 text-ink/80 md:text-base">
                <p><strong class="text-ink">상황:</strong> ${escapeHtml(post.scenario || post.summary)}</p>
                <p><strong class="text-ink">쉬운 요약:</strong> ${escapeHtml(post.summary)}</p>
                <p><strong class="text-ink">다음 행동:</strong> ${escapeHtml(post.nextAction || "")}</p>
              </div>
            </div>
          </div>
          <div class="grid gap-5 bg-white/85 p-7 md:p-10">
            <div>
              <h3 class="display-font mb-4 text-2xl text-ink">핵심 체크리스트</h3>
              <ul class="grid gap-3">${checklist}</ul>
            </div>
            <div class="rounded-[1.5rem] bg-lavender/70 p-5">
              <h3 class="display-font mb-3 text-2xl text-ink">근거 메모</h3>
              <p class="mb-4 text-sm leading-7 text-ink/75">${escapeHtml(post.sourceNote || "")}</p>
              <ul class="space-y-2 text-sm leading-7 text-ink/75">${sources}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function cardMarkup(post, featuredTitle) {
  const isTodayPost = post.title === featuredTitle;

  return `
    <article class="group flex min-h-[100%] flex-col overflow-hidden rounded-[1.75rem] border border-violet/15 bg-white/85 shadow-card transition duration-200 hover:-translate-y-1">
      <img class="aspect-[16/10] w-full object-cover" src="${post.image}" alt="" />
      <div class="flex flex-1 flex-col p-6">
        <div class="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-ink/55">
          <span class="rounded-full bg-lavender px-3 py-1 text-violet">${escapeHtml(post.category)}</span>
          <span>${escapeHtml(post.date)}</span>
          <span>·</span>
          <span>${escapeHtml(post.read)}</span>
        </div>
        <h3 class="display-font text-2xl leading-tight text-ink">${escapeHtml(post.title)}</h3>
        <p class="mt-3 text-sm leading-7 text-ink/75">${escapeHtml(post.summary)}</p>
        ${
          post.nextAction
            ? `<p class="mt-4 rounded-2xl bg-butter/70 px-4 py-3 text-sm leading-6 text-ink/80"><strong class="text-ink">다음 행동:</strong> ${escapeHtml(post.nextAction)}</p>`
            : ""
        }
        <a class="mt-auto pt-5 text-sm font-extrabold text-violet underline-offset-4 hover:underline" href="${isTodayPost ? "#today-post" : "#post-list"}">
          ${isTodayPost ? "오늘 글 자세히 보기" : "주제 카드로 읽기"}
        </a>
      </div>
    </article>
  `;
}

function paginationMarkup(totalPages) {
  const buttons = [];
  buttons.push(pageButton("이전", state.currentPage - 1, state.currentPage === 1));

  for (let page = 1; page <= totalPages; page += 1) {
    buttons.push(pageButton(String(page), page, false, page === state.currentPage));
  }

  buttons.push(pageButton("다음", state.currentPage + 1, state.currentPage === totalPages));
  return buttons.join("");
}

function pageButton(label, page, disabled, current = false) {
  const base =
    "inline-flex h-11 min-w-[44px] items-center justify-center rounded-2xl border px-4 text-sm font-bold transition";
  const stateClass = current
    ? "border-violet bg-violet text-white"
    : "border-violet/15 bg-white text-ink hover:border-violet/40";

  return `<button class="${base} ${stateClass}" data-page="${page}" ${
    disabled ? "disabled aria-disabled='true'" : ""
  } ${current ? "aria-current='page'" : ""}>${label}</button>`;
}

function appMarkup() {
  const matches = filteredPosts();
  const totalPages = Math.max(1, Math.ceil(matches.length / perPage));
  state.currentPage = Math.min(state.currentPage, totalPages);

  const start = (state.currentPage - 1) * perPage;
  const visiblePosts = matches.slice(start, start + perPage);
  const featuredPost = posts[0];
  const cards =
    visiblePosts.length > 0
      ? visiblePosts.map((post) => cardMarkup(post, featuredPost.title)).join("")
      : `
        <div class="rounded-[1.75rem] border border-dashed border-violet/25 bg-white/70 p-10 text-center text-ink/65">
          조건에 맞는 글이 없습니다. 검색어를 조금 바꿔보세요.
        </div>
      `;

  const topicButtons = topics
    .map((topic) => {
      const active = state.currentTopic === topic;
      return `
        <button
          class="rounded-full border px-4 py-2 text-sm font-bold transition ${
            active
              ? "border-violet bg-violet text-white"
              : "border-violet/15 bg-white/80 text-ink hover:border-violet/40"
          }"
          data-topic="${topic}"
        >
          ${topic}
        </button>
      `;
    })
    .join("");

  return `
    <div class="min-h-screen pb-16 text-ink">
      <header class="mx-auto flex max-w-6xl flex-col gap-5 px-5 pb-6 pt-7 md:flex-row md:items-center md:justify-between md:px-8">
        <a href="#" class="flex items-center gap-3 no-underline">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-lg font-black text-white">OK</span>
          <span>
            <strong class="display-font block text-2xl text-ink">생활법률 블로그</strong>
            <span class="text-sm text-ink/60">사례로 읽고, 오늘 바로 행동하는 법률 메모</span>
          </span>
        </a>
        <nav class="flex flex-wrap gap-2 text-sm font-semibold text-ink/65">
          <a class="rounded-full bg-white/70 px-4 py-2 no-underline hover:text-violet" href="#today-post">오늘 글</a>
          <a class="rounded-full bg-white/70 px-4 py-2 no-underline hover:text-violet" href="#topic-filter">주제별 보기</a>
          <a class="rounded-full bg-white/70 px-4 py-2 no-underline hover:text-violet" href="#post-list">전체 카드</a>
        </nav>
      </header>

      <main class="space-y-8">
        <section class="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-[1.08fr_0.92fr] md:px-8">
          <div class="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-9 text-white shadow-card md:px-10 md:py-12">
            <div class="absolute -right-8 top-8 h-28 w-28 rounded-full bg-violet/45 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-butter/25 blur-2xl"></div>
            <p class="mb-3 text-sm font-black uppercase tracking-[0.18em] text-butter">법은 어렵지만, 글은 쉽게</p>
            <h1 class="display-font max-w-xl text-4xl leading-tight md:text-6xl">생활법률을 오늘의 사례로 읽다.</h1>
            <p class="mt-5 max-w-2xl text-[15px] leading-8 text-white/80 md:text-base">
              전세, 임금체불, 상속, 교통사고, 환불 분쟁처럼 갑자기 찾아오는 생활법률 이슈를 한국어로 쉽고 재미있게 풀어드립니다.
            </p>
            <form id="searchForm" class="mt-7 grid gap-3 rounded-[1.5rem] bg-white/10 p-3 backdrop-blur sm:grid-cols-[1fr_auto]">
              <input
                id="searchInput"
                class="form-control min-h-[54px] px-4"
                type="search"
                value="${escapeHtml(state.currentQuery)}"
                placeholder="임금체불, 전세금, 상속포기처럼 찾아보세요"
              />
              <button class="rounded-[1.2rem] bg-butter px-5 py-3 font-black text-ink shadow-button transition hover:-translate-y-[1px]" type="submit">
                찾기
              </button>
            </form>
          </div>

          <div class="grid gap-4">
            ${[
              ["01", "사례로 시작", "내 얘기 같은 장면부터 보여주고, 그 다음에 법적 기준을 붙입니다."],
              ["02", "체크리스트로 정리", "읽고 끝나지 않게 필요한 서류, 날짜, 순서를 짧게 남깁니다."],
              ["03", "공식 근거까지 확인", "법령과 공공기관 자료를 확인한 뒤 링크를 함께 붙입니다."]
            ]
              .map(
                ([number, title, body]) => `
                  <article class="rounded-[1.75rem] border border-violet/15 bg-white/80 p-6 shadow-card">
                    <p class="mb-2 text-sm font-black uppercase tracking-[0.16em] text-violet/80">${number}</p>
                    <h2 class="display-font text-2xl text-ink">${title}</h2>
                    <p class="mt-3 text-sm leading-7 text-ink/72">${body}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        ${featuredMarkup(featuredPost)}

        <section id="topic-filter" class="mx-auto max-w-6xl px-5 md:px-8">
          <div class="rounded-[2rem] border border-violet/15 bg-white/70 p-6 shadow-card md:p-8">
            <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p class="text-sm font-black uppercase tracking-[0.16em] text-violet/80">주제별 법률 탐색</p>
                <h2 class="display-font mt-2 text-3xl text-ink md:text-4xl">내 상황과 가장 가까운 글부터</h2>
              </div>
              <p class="text-sm text-ink/60">${matches.length}개의 글이 보입니다.</p>
            </div>
            <div class="mt-5 flex flex-wrap gap-2">${topicButtons}</div>
          </div>
        </section>

        <section id="post-list" class="mx-auto max-w-6xl px-5 md:px-8">
          <div class="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm font-black uppercase tracking-[0.16em] text-violet/80">새로 올라온 생활법률</p>
              <h2 class="display-font mt-2 text-3xl text-ink md:text-4xl">읽기 쉬운 법률 카드</h2>
            </div>
            <p class="text-sm text-ink/60">페이지 ${state.currentPage} / ${totalPages}</p>
          </div>
          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">${cards}</div>
          <nav class="mt-8 flex flex-wrap justify-center gap-2" aria-label="포스트 페이지">
            ${paginationMarkup(totalPages)}
          </nav>
        </section>

        <section class="mx-auto max-w-6xl px-5 md:px-8">
          <div class="rounded-[2rem] bg-gradient-to-br from-violet via-[#705ad3] to-ink p-7 text-white shadow-card md:p-9">
            <p class="text-sm font-black uppercase tracking-[0.16em] text-butter">안내</p>
            <h2 class="display-font mt-2 text-3xl md:text-4xl">오늘 해야 할 행동이 남는 글만 올립니다.</h2>
            <p class="mt-4 max-w-3xl text-sm leading-7 text-white/82 md:text-base">
              이 블로그는 일반적인 법률정보 안내용입니다. 실제 사실관계와 계약 내용에 따라 결론이 달라질 수 있으니, 분쟁이 이미 진행 중이면 변호사나 관할 기관 상담을 함께 검토하세요.
            </p>
          </div>
        </section>
      </main>
    </div>
  `;
}

function bindEvents() {
  const searchForm = document.querySelector("#searchForm");
  const searchInput = document.querySelector("#searchInput");

  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    state.currentQuery = searchInput?.value || "";
    state.currentPage = 1;
    render();
    document.querySelector("#post-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.querySelectorAll("[data-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentTopic = button.dataset.topic;
      state.currentPage = 1;
      render();
    });
  });

  document.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextPage = Number(button.dataset.page);
      if (!Number.isNaN(nextPage)) {
        state.currentPage = nextPage;
        render();
        document.querySelector("#post-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function render() {
  if (!root) {
    return;
  }

  root.innerHTML = appMarkup();
  bindEvents();
}

render();
