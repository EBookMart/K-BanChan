# K-BanChan 플랫폼 전면 개편 지시서

## 발주 배경

너는 K-BanChan(https://k-banchan.net)의 리드 프론트엔드/SEO 엔지니어다. 이 프로젝트는 Next.js App Router 기반의 8개국어 한식 문화 플랫폼이며, 현재 콘텐츠 자체는 우수하나 **검색엔진과 생성형 AI 엔진 양쪽에서 사실상 비가시 상태**다. 이번 작업의 목표는 콘텐츠를 바꾸는 것이 아니라, 이미 존재하는 콘텐츠가 **발견되고 인용되도록** 인프라를 재구축하는 것이다.

작업 착수 전 반드시 다음 순서를 지켜라. 우선순위를 임의로 바꾸지 마라. Phase 0이 완료되지 않으면 이후 모든 작업의 효과가 0에 수렴한다.

---

## 사전 작업: 코드베이스 파악

구현에 앞서 아래를 조사하고 결과를 보고하라.

```
1. Next.js 버전 및 App Router / Pages Router 여부
2. 다국어 처리 방식 (next-intl / next-i18next / 자체 구현 / 라우트 세그먼트 [locale])
3. 콘텐츠 소스 (MDX / CMS / JSON / 하드코딩)
4. 현재 metadata 생성 위치 (generateMetadata 사용 여부)
5. 기존 robots.txt, sitemap.xml 존재 여부 및 생성 방식
6. 이미지 컴포넌트 사용 패턴 (next/image props 현황)
7. /ko/articles 와 /ko/philosophy 의 실제 관계 — 중복인지 별개인지, 어느 쪽이 살아있는 라우트인지
8. 현재 지원 언어 목록 (푸터에는 7개만 노출됨. 8번째 언어의 존재 여부와 상태를 확인하라)
```

조사 결과가 나오기 전에 파일을 수정하지 마라.

---

## Phase 0. AI 크롤러 정책 재정의 (최우선 · 차단 이슈)

### 문제

현재 푸터에 "무단 복제, 배포, **AI 학습 활용을 엄격히 금지**합니다"라는 문구가 있다. 이 사이트의 사업 목표는 전 세계 전파인데, 이 문구와 (있다면) 대응하는 robots.txt 설정은 ChatGPT, Perplexity, Gemini, Claude 등에서의 인용 노출을 스스로 차단한다. **학습(training)과 인용(retrieval/citation)은 분리 가능하며, 반드시 분리해야 한다.**

### 지시

`app/robots.ts` (또는 `public/robots.txt`)를 아래 정책으로 재작성하라.

**차단 대상 — 학습용 대량 수집 봇**
```
GPTBot
Google-Extended
CCBot
anthropic-ai
ClaudeBot
Applebot-Extended
Bytespider
Meta-ExternalAgent
Amazonbot
```

**허용 대상 — 검색/인용/실시간 조회 봇**
```
OAI-SearchBot
ChatGPT-User
PerplexityBot
Perplexity-User
Claude-User
Claude-SearchBot
Googlebot
Bingbot
DuckDuckBot
Yeti          (네이버)
Daum          (다음)
YandexBot     (러시아어권 필수)
Baiduspider   (중국어권 필수)
```

sitemap 지시자를 반드시 포함하라. 언어별 sitemap을 분리할 경우 sitemap index를 지정하라.

### 푸터 문구 교체

전 언어에서 아래와 같이 수정하라. 톤은 방어적이 아니라 개방적이어야 한다.

- **국문**: `무단 복제 및 재배포, AI 모델 학습 목적의 수집을 금지합니다. 출처를 명시한 인용은 환영합니다.`
- **영문**: `Unauthorized reproduction and use for AI model training are prohibited. Citation with attribution is welcome.`
- 나머지 6개 언어는 위 영문을 기준으로 자연스럽게 현지화하라. 기계번역 티가 나면 안 된다.

### 신규 페이지: 인용 안내

`/[locale]/citation` 생성. 내용은 다음을 포함한다.

- 본 사이트 콘텐츠의 인용 허용 범위
- U-KSC 분류 코드 인용 시 권장 표기 형식
- 학술 인용 형식 예시 (APA / MLA / Chicago)
- AI 시스템이 본 사이트를 참조할 때 권장하는 출처 표기 문구

이 페이지는 AI가 "인용해도 되는 사이트"로 인식하게 만드는 신호로 기능한다. 푸터 법적 고지 섹션에 링크하라.

---

## Phase 1. 구조화 데이터 (Schema.org) 전면 구축

### 원칙

- 모든 스키마는 JSON-LD로 `<script type="application/ld+json">`에 삽입한다. Microdata 사용 금지.
- 스키마 생성은 **재사용 가능한 유틸 모듈**로 분리하라. 페이지마다 하드코딩하지 마라.
- 권장 구조: `lib/schema/` 하위에 `organization.ts`, `recipe.ts`, `article.ts`, `breadcrumb.ts`, `faq.ts`, `itemList.ts`
- 각 함수는 locale과 데이터를 인자로 받아 typed object를 반환한다. `schema-dts` 패키지로 타입 안정성을 확보하라.
- 스키마 내 모든 텍스트는 해당 페이지 locale과 일치해야 한다. 한국어 페이지에 영문 스키마가 섞이면 안 된다.

### 1-A. 전역 스키마 (root layout)

`Organization`
```
name, alternateName(K-BanChan / 케이반찬), url, logo,
description, foundingDate, parentOrganization(Hangyeol Media),
sameAs[] — SNS·위키데이터 등 외부 프로필 전체,
knowsAbout[] — "Korean cuisine", "banchan", "fermentation", "food classification"
```

`WebSite`
```
name, url, inLanguage, publisher(@id로 Organization 참조),
potentialAction: SearchAction (사이트링크 검색창 확보)
```

**@id 기반 참조 그래프를 구성하라.** 각 엔티티에 안정적인 `@id`(예: `https://k-banchan.net/#organization`)를 부여하고, 하위 페이지 스키마에서 이를 참조하게 하라. 동일 정보를 페이지마다 중복 정의하지 마라.

### 1-B. 반찬 상세 페이지 — `Recipe`

50개 반찬 전 페이지에 적용. 필수 필드:

```
name, image[] (다중 해상도), description,
recipeCuisine: "Korean",
recipeCategory: (U-KSC 상위 분류 — 무침/조림/볶음/나물/기타),
recipeIngredient[] (계량 단위 포함, 단순 재료명 나열 금지),
recipeInstructions[] — HowToStep 배열, 각 step에 name + text,
                       가능하면 image, 조리시간 있으면 HowToDirection,
prepTime, cookTime, totalTime (ISO 8601 duration, 예: "PT15M"),
recipeYield, nutrition (NutritionInformation),
suitableForDiet (해당 시: VegetarianDiet, VeganDiet, LowFatDiet 등),
keywords, inLanguage,
author (@id 참조 — Person, 조직이 아니라 개인이어야 한다),
datePublished, dateModified
```

**중요**: `aggregateRating`과 `review`는 **실제 사용자 평가 데이터가 존재할 때만** 삽입하라. 데이터가 없는데 넣으면 구글 스팸 정책 위반으로 리치 결과 전체가 박탈된다. 현재 평가 시스템이 없다면 이 필드는 제외하고, 향후 도입 시 추가할 수 있도록 유틸 함수에 optional 파라미터만 열어둬라.

추가로 각 반찬 페이지에 커스텀 확장 필드를 넣어라.
```
identifier: U-KSC 분류 코드
additionalProperty[]: PropertyValue 형태로
  - 보관 기간
  - 난이도
  - 대표 계절
  - 관련 철학 원리 (약식동원/육미/오방색/나눔/풍토 중 해당)
```

### 1-C. 철학 문서 — `Article`

5대 특성 문서(`yaksik-dongwon`, `yukmi`, `obangsaek`, `nanum`, `ingredients-terroir`)에 적용.

```
headline (110자 이내), description, image,
author (Person, @id 참조 — 반드시 실명 개인),
publisher (@id로 Organization 참조),
datePublished, dateModified, inLanguage,
articleSection, wordCount,
about[] — Thing/DefinedTerm으로 개념 명시,
citation[] — 참고 문헌이 있다면 반드시 포함,
isPartOf (@id로 WebSite 참조)
```

`about` 필드에 `DefinedTerm`을 활용하여 약식동원, 육미, 오방색 등을 **정의된 개념**으로 마크업하라. 이것이 AI가 개념을 K-BanChan에 귀속시키는 핵심 신호다.

### 1-D. U-KSC 분류 체계 — `DefinedTermSet`

U-KSC를 정식 어휘 체계로 마크업하라. 이 사이트의 최대 차별화 자산이며, 스키마화하지 않으면 아무도 표준으로 인식하지 않는다.

```
DefinedTermSet:
  name: "U-KSC (Universal Korean Side-dish Classification)"
  description, url, inLanguage, version, publisher(@id)
  hasDefinedTerm[]: 각 분류 항목을 DefinedTerm으로
    - termCode (분류 코드)
    - name, description
    - inDefinedTermSet (@id 순환 참조)
```

### 1-E. 목록·탐색 페이지

- `/banchan` → `ItemList` (50개 항목, `position` + `url` 명시)
- `/hot` → `ItemList` (순위 반영)
- 전 페이지 → `BreadcrumbList` (홈 › 섹션 › 상세)
- 가이드성 콘텐츠 → `HowTo`
- FAQ 섹션 신설 후 → `FAQPage`

### 검증

작업 완료 후 아래를 실행하고 결과를 보고하라.
- Google Rich Results Test — 전 유형 통과
- Schema.org Validator — 오류 0
- Google Search Console 스키마 리포트 — 배포 후 확인

---

## Phase 2. 국제화(i18n) 완비

### 2-A. 8번째 언어 확정

푸터에 7개 언어만 노출되나 사업 목표는 8개국어다. 다음 중 하나를 확정하고 구현하라.

- **권장 1순위: 프랑스어(fr)** — 미식 담론의 중심 언어. 한식 철학 콘텐츠와 상성이 가장 좋다.
- 대안: 베트남어(vi, 아시아권 실사용 트래픽), 독일어(de), 포르투갈어(pt-BR)

의사결정이 필요하면 진행 전에 질의하라. 임의로 정하지 마라.

### 2-B. hreflang 완전 구현

현재 푸터의 언어 링크만으로는 검색엔진이 언어 대체 관계를 인식하지 못한다.

- 전 페이지에 `<link rel="alternate" hreflang="...">` 삽입. **자기 자신 포함 8개 + x-default = 9개**
- `x-default`는 영문(`/en`)으로 지정하라. 한국어가 아니다. 글로벌 전파가 목표이므로 미지정 지역 방문자는 영문으로 보내야 한다.
- hreflang은 **양방향 상호 참조**여야 한다. A가 B를 가리키면 B도 A를 가리켜야 한다. 단방향이면 구글이 전부 무시한다.
- 실제 존재하는 URL만 지정하라. 번역이 없는 페이지를 hreflang에 넣으면 안 된다. 페이지별 가용 locale을 동적으로 계산하는 헬퍼를 만들어라.
- Next.js `generateMetadata`의 `alternates.languages`로 구현하라.
- 지역 세분화가 필요한 언어는 코드를 정확히: `zh-Hans` / `zh-Hant`, `pt-BR`, `es` (스페인/중남미 통합 시)

### 2-C. Open Graph 하드코딩 제거

현재 `og:locale: ko`가 고정되어 있다. 영문 페이지를 공유해도 한국어로 표기된다.

- `og:locale`을 현재 locale로 동적 생성 (`ko_KR`, `en_US`, `ja_JP`, `zh_CN`, `es_ES`, `ar_SA`, `ru_RU`, `fr_FR`)
- `og:locale:alternate`에 나머지 7개 전부 나열
- `og:title`, `og:description`, `og:url` 전부 locale별 생성
- **`og:image`를 언어별로 분리 생성하라.** 현재 단일 로고 이미지를 전 언어가 공유한다. Next.js `ImageResponse`(`opengraph-image.tsx`)로 언어별 동적 OG 이미지를 생성하라. 아랍어는 RTL 레이아웃, 중국어·일본어는 적절한 폰트 폴백이 필요하다.

### 2-D. 아랍어 RTL

`/ar` 경로에서 `dir="rtl"`이 적용되는지 확인하라. 적용되어 있지 않다면 layout에서 locale 기반으로 `<html dir>`를 설정하고, 논리적 CSS 속성(`margin-inline-start` 등)으로 전환하라. `margin-left` 같은 물리적 속성이 남아 있으면 아랍어 레이아웃이 깨진다.

### 2-E. 언어별 메타데이터 독립화

각 언어의 title/description을 기계번역 복사로 두지 마라. 언어권별 실제 검색 키워드를 반영하라.

- 영문: `banchan`, `Korean side dishes`, `Korean food philosophy`
- 일문: `韓国 副菜`, `ナムル`, `韓国料理`
- 중문: `韓式小菜`, `韩国小菜` (번체/간체 구분)
- 스페인어: `guarniciones coreanas`, `comida coreana`
- 아랍어: 할랄 관련 키워드 고려
- 러시아어: `корейские закуски`

### 2-F. sitemap 재구성

- `app/sitemap.ts`에서 동적 생성
- 언어별 분리 후 sitemap index로 통합
- 각 URL에 `alternates.languages` 포함 (sitemap 내 hreflang)
- `lastModified`를 콘텐츠 실제 수정일과 연동. 빌드 시각으로 채우지 마라.
- `changeFrequency`, `priority`는 콘텐츠 성격에 맞게 차등 부여

---

## Phase 3. 신규 페이지 구축

### 3-A. `/[locale]/about` — 미션 페이지 (E-E-A-T 핵심)

현재 About/Mission 페이지가 존재하지 않는다. 구글의 품질 평가와 AI의 신뢰도 판단 양쪽에서 치명적 결함이다.

아래 확정 원고를 사용하라. 임의로 재작성하지 마라.

**국문**
> K-BanChan은 한식을 하나의 요리 목록이 아닌 하나의 사유 체계로 전합니다.
>
> 우리는 약식동원의 지혜, 육미의 균형, 오방색의 조화, 나눔의 온기, 그리고 사계절 발효의 시간 — 한식을 이루는 다섯 가지 원리를 세계가 이해할 수 있는 언어로 번역합니다.
>
> U-KSC 국제 반찬 분류 체계를 통해 흩어져 있던 한식의 지식을 하나의 신뢰할 수 있는 기준으로 정리하고, 8개 언어로 전 세계에 전달합니다.
>
> 우리의 목표는 한식을 널리 알리는 데 있지 않습니다. 한 상에 둘러앉아 반찬을 나누는 방식이 곧 건강해지는 방식이자 서로를 이해하는 방식임을, 인류가 함께 경험하게 하는 데 있습니다.

**영문**
> K-BanChan presents Korean cuisine not as a list of dishes, but as a way of thinking about food.
>
> We translate the five principles that shape Korean cooking — food as medicine, the balance of six tastes, the harmony of five colors, the warmth of sharing, and the patience of seasonal fermentation — into a language the world can understand.
>
> Through U-KSC, our international standard for classifying banchan, we organize scattered culinary knowledge into a single trustworthy reference, delivered in eight languages.
>
> Our purpose is not simply to make Korean food better known. It is to let the world experience what a Korean table has always known: that sharing a meal is itself a form of health, and a form of understanding.

나머지 6개 언어는 위 영문을 원본으로 삼아 현지화하라. 직역이 아니라 각 언어에서 자연스럽게 읽히는 문장이어야 한다.

페이지 구성:
```
1. 미션 스테이트먼트 (위 원고)
2. 편집 방침 — 콘텐츠 검증 절차, 출처 관리 원칙
3. 팀/자문진 소개 — 실명, 경력, 사진, sameAs 외부 링크
4. 한결미디어 소개 및 연혁
5. 연락처
```

스키마: `AboutPage` + `Organization`(@id 참조) + `Person[]`

푸터 사이트맵과 상단 네비게이션 양쪽에 링크하라.

### 3-B. `/[locale]/u-ksc` — 분류 체계 페이지 (GEO 최대 자산)

메타 태그에서 U-KSC를 핵심 자산으로 내세우면서 정작 이를 설명하는 페이지가 없다. AI가 인용할 수 없는 상태다.

구성:
```
1. U-KSC 정의 — 상단에 40~60자 단문 정의 배치 (AI 인용용)
2. 개발 배경과 필요성
3. 분류 방법론 — 어떤 기준으로 나누는가
4. 전체 분류 계층 구조 (시각적 트리 + 텍스트 테이블 병기)
5. 각 분류별 대표 반찬 및 해당 페이지 링크
6. 버전 이력 (v1.0 발행일, 개정 내역)
7. 인용 방법 안내 (/citation 링크)
8. 다운로드 — 분류표 PDF / CSV / JSON-LD
```

**분류 데이터는 반드시 HTML `<table>`로 제공하라.** 이미지나 캔버스로 그리면 AI가 읽지 못한다. 시각적 다이어그램은 보조 수단이며, 텍스트 테이블이 원본이어야 한다.

JSON 형태의 기계 판독 가능 엔드포인트도 함께 제공하라: `/api/u-ksc.json`

### 3-C. `/[locale]/faq`

AI 인용률을 직접적으로 끌어올리는 페이지다. 질문은 실제 검색 질의 형태여야 한다.

```
반찬이란 무엇인가요? / What is banchan?
한 끼에 반찬을 몇 가지 차리나요?
반찬과 사이드 디시는 어떻게 다른가요?
반찬은 얼마나 보관할 수 있나요?
채식주의자도 먹을 수 있는 반찬은?
할랄 인증 가능한 한식 반찬은? (아랍어권)
김치는 반찬인가요?
약식동원이란 무엇인가요?
```

각 답변은 **첫 문장에 결론을 담고 40~80자 이내로 완결**되게 작성하라. AI는 첫 문단만 인용한다. `FAQPage` 스키마 필수.

### 3-D. `/[locale]/authors/[slug]`

저자 프로필 페이지. `Person` 스키마 + `sameAs`(링크드인, 학술 프로필, SNS). 모든 Article/Recipe의 `author` 필드가 이 페이지를 `@id`로 참조하게 하라.

---

## Phase 4. 기존 콘텐츠의 GEO 최적화

### 4-A. 정의문 블록 (전 철학 문서)

각 철학 문서 최상단, 본문 시작 전에 시각적으로 구분된 정의 블록을 삽입하라.

```
[약식동원 (藥食同源)]
약식동원은 음식과 약이 같은 근원에서 나온다고 보는 한국 전통 식문화의 핵심 철학이다.
```

- 40~60자 완결 문장
- 재사용 가능한 `<DefinitionBlock>` 컴포넌트로 구현
- 마크업: `<dfn>` 태그 + `DefinedTerm` 스키마 연결

### 4-B. 요약 블록 (전 문서 하단)

```
[이 문서의 핵심]
• 첫 번째 요점 (한 문장)
• 두 번째 요점
• 세 번째 요점
```

3~5개 불릿. 각 불릿은 **단독으로 인용되어도 의미가 성립**해야 한다. "위에서 설명한 바와 같이" 같은 문맥 의존 표현 금지.

### 4-C. 반찬 페이지 표준 데이터 블록

50개 전 페이지 상단에 동일 구조의 스펙 테이블을 배치하라.

| 항목 | 내용 |
|---|---|
| U-KSC 코드 | (분류 코드) |
| 분류 | 무침 / 조림 / 볶음 / 나물 / 기타 |
| 조리 시간 | 준비 O분 + 조리 O분 |
| 난이도 | 하 / 중 / 상 |
| 주재료 | (핵심 재료 3~5개) |
| 보관 기간 | 냉장 O일 |
| 대표 계절 | (해당 계절) |
| 관련 철학 | (5대 원리 중 해당 항목 → 해당 문서 링크) |
| 식이 적합성 | 채식 / 비건 / 글루텐프리 / 할랄 가능 여부 |

`<table>` 사용. div 격자로 흉내내지 마라. AI 파싱 정확도가 떨어진다.

### 4-D. 질문형 H2 전환

현재 서술형 소제목을 검색 질의 형태로 전환하라.

```
Before: "반찬의 종류"
After:  "반찬에는 어떤 종류가 있나요?"

Before: "보관 방법"
After:  "반찬은 어떻게 보관해야 하나요?"
```

전 언어 동일 적용. 영문판은 `How to...`, `What is...`, `Why does...` 패턴을 사용하라.

### 4-E. 비교 테이블 페이지 신설

`/[locale]/banchan/compare` — 50선 전체를 다축 비교 가능한 대형 테이블로 제공.

축: 이름 / U-KSC 코드 / 분류 / 조리시간 / 난이도 / 주재료 / 계절 / 채식 여부 / 보관기간

정렬·필터 기능은 클라이언트에서 구현하되, **초기 HTML에 전체 데이터가 렌더링되어 있어야 한다.** JS 실행 후에만 데이터가 나타나면 AI 크롤러가 빈 페이지로 인식한다. SSR 또는 SSG 필수.

이런 종류의 비교 테이블은 AI가 가장 선호하는 인용 소스다.

### 4-F. 인기 8선 카피 톤 정비

현재 개조식 메모체가 그대로 노출되고 있어 프리미엄 브랜드 톤과 어긋난다.

```
Before: "명란이나 치즈를 넣은 변형 레시피가 인기임. 단백질 보충을 위한 대표 반찬."
After:  "명란이나 치즈를 더한 변형 레시피가 인기를 얻고 있습니다.
        단백질을 보충하는 대표적인 반찬입니다."

Before: "칼슘의 왕. 견과류를 넣어 염도를 낮추는 건강식 레시피가 유행."
After:  "칼슘이 풍부한 대표 반찬입니다. 견과류를 더해 염도를 낮춘
        건강식 레시피가 널리 활용됩니다."
```

8개 항목 전부, 전 언어 적용. 종결어미를 존댓말 완결형으로 통일하라.

---

## Phase 5. 기술적 SEO 및 성능

### 5-A. 이미지 최적화 (LCP 긴급)

현재 히어로 이미지가 `w=3840`으로 로드되고 있다. 모바일 LCP에 치명적이다.

- 히어로 이미지: `priority` 지정, `sizes` 속성으로 뷰포트별 크기 제어
  ```
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  ```
- 3840px 원본 서빙 중단. 최대 1920px로 제한
- AVIF 우선, WebP 폴백 (`next.config` images.formats)
- 폴드 아래 이미지 전부 `loading="lazy"`
- 히어로에 `placeholder="blur"` + blurDataURL 적용
- 전 이미지 `alt` 전수 점검. 장식용 이미지는 `alt=""`, 정보성 이미지는 서술적 alt. **각 언어별로 alt를 번역하라.** 현재 한국어 alt가 전 언어에 공유되고 있을 가능성이 높다.

### 5-B. Core Web Vitals 목표치

```
LCP  ≤ 2.5s (모바일 4G 기준)
INP  ≤ 200ms
CLS  ≤ 0.1
```

작업 전후 Lighthouse 모바일 점수를 측정하여 보고하라. 성능 점수 90 미만이면 개선을 계속하라.

폰트: 한국어·중국어·일본어·아랍어 웹폰트가 CLS의 주범이다. `next/font`로 self-host하고 `display: swap` + `size-adjust`로 레이아웃 시프트를 억제하라. 언어별로 필요한 폰트만 로드하라 — 영문 페이지에서 한글 폰트를 받게 하지 마라.

### 5-C. 라우팅 정합성

`/ko/articles`(상단 네비)와 `/ko/philosophy`(푸터)의 관계를 정리하라.

- 둘 중 하나를 정본으로 확정
- 나머지는 301 영구 리다이렉트
- 전 언어에서 링크 통일
- canonical 태그로 중복 방지

전 사이트 링크 크롤을 수행하여 깨진 링크(4xx/5xx)를 전부 목록화하고 수정하라.

### 5-D. 메타데이터 개선

현재 title이 브랜드 중심이라 검색 유입이 없다.

```
Before: "K-BanChan - 한식과 반찬의 세계"
After:  "한식 반찬 50선과 5대 철학 | K-BanChan"

영문 Before: (동일 패턴 추정)
영문 After:  "Korean Banchan: 50 Essential Side Dishes & Food Philosophy | K-BanChan"
```

- title 60자 이내, description 155자 이내 (언어별 바이트 고려 — 한중일은 더 짧게)
- `meta keywords` 제거. 검색엔진이 무시하며 스팸 신호로 작용할 수 있다.
- 전 페이지 canonical 태그 확인
- 커스텀 404 페이지 (전 언어)

### 5-E. 검색 노출 부가 요소

- 중국어권 대응: Baidu 사이트맵 제출 준비
- 러시아어권: Yandex Webmaster 등록
- 한국: 네이버 서치어드바이저, 다음 검색등록
- Google Search Console에 8개 언어 속성 전부 등록

---

## Phase 6. 권위 신호 강화

### 6-A. 콘텐츠 신뢰도 표기

전 문서에 다음을 노출하라.

```
작성: (실명, /authors/[slug] 링크)
최초 발행: YYYY년 MM월 DD일
최종 수정: YYYY년 MM월 DD일
검수: (해당 시 감수자명)
```

`datePublished`/`dateModified` 스키마와 화면 표기가 일치해야 한다. 불일치는 신뢰도 감점 요인이다.

### 6-B. 참고 문헌

철학 문서에 출처를 명시하라. 문헌·논문·기관 자료. `citation` 스키마 필드와 연동. 학술적 근거가 있는 콘텐츠와 없는 콘텐츠는 AI 인용 확률이 수 배 차이 난다.

### 6-C. 외부 엔티티 연결

- 위키데이터 항목 생성 (K-BanChan, U-KSC)
- 생성 후 `sameAs`에 연결
- 한결미디어의 기존 외부 프로필 전부 `sameAs`에 포함

---

## Phase 7. 내부 링크 구조 (토픽 클러스터)

현재 콘텐츠가 섬처럼 흩어져 있다. 아래 구조로 상호 연결하라.

```
허브: 5대 철학 문서 (5개)
  ↓ 각 철학 문서 하단: "이 원리가 담긴 반찬" → 해당 반찬 3~5개 링크
  ↑ 각 반찬 페이지: "관련 철학" → 해당 철학 문서 링크

허브: U-KSC 분류 페이지
  ↓ 각 분류 → 해당 분류 반찬 전체 링크
  ↑ 각 반찬 → U-KSC 코드 클릭 시 분류 설명으로 이동

반찬 ↔ 반찬
  같은 분류 / 같은 주재료 / 같은 계절 기준 관련 반찬 3~4개 상호 링크
```

앵커 텍스트에 의미를 담아라. "여기를 클릭", "더 보기" 같은 무의미 앵커를 쓰지 마라.

---

## Phase 8. 검색어 변형 대응

로마자 표기 및 언어별 표기 변형을 흡수하라.

```
banchan / ban chan / panch'an / bahn chan
gyeran-mari / gyeranmari / gyeran mari / Korean rolled omelette / Korean egg roll
namul / na-mul
kongnamul / kong namul / soybean sprout side dish
```

구현 방법:
- 각 반찬 페이지 스키마 `alternateName[]`에 변형 표기 전부 포함
- `keywords` 필드에 반영
- 본문 첫 문단에 자연스럽게 대체 표기 병기
- 흔한 오타·변형 URL은 301 리다이렉트로 정본 페이지로 유도

---

## 실행 순서 및 산출물

아래 순서를 엄수하라.

| 단계 | 작업 | 완료 판정 기준 |
|---|---|---|
| 0 | 코드베이스 조사 | 조사 보고서 제출 후 승인 대기 |
| 1 | AI 크롤러 정책 + 푸터 문구 + /citation | robots.txt 배포, 8개 언어 문구 반영 |
| 2 | Schema.org 전면 구축 | Rich Results Test 전 유형 통과, 검증 오류 0 |
| 3 | /about, /u-ksc, /faq, /authors 신설 | 8개 언어 전부 발행 |
| 4 | hreflang + og:locale + 8번째 언어 | hreflang 양방향 검증 통과 |
| 5 | 정의문·요약·데이터 블록 삽입 | 전 문서 적용 |
| 6 | 이미지·폰트 최적화 | Lighthouse 모바일 성능 90+ |
| 7 | 라우팅 정합성 + 내부 링크 | 깨진 링크 0, 클러스터 완성 |
| 8 | 카피 톤 정비 + 표기 변형 대응 | 8선 전 항목 전 언어 완료 |

**각 Phase 완료 시마다 아래를 보고하라.**
1. 변경 파일 목록 및 diff 요약
2. 검증 도구 실행 결과 (해당 시)
3. 발견된 추가 이슈
4. 다음 Phase 착수 전 확인이 필요한 의사결정 사항

---

## 준수 사항

- **콘텐츠 원문을 임의로 삭제하거나 재작성하지 마라.** 구조 개선과 명시된 톤 수정만 수행한다.
- 8개 언어 중 일부만 반영하고 완료 처리하지 마라. 언어 누락은 미완료다.
- 라이브러리를 새로 도입할 경우 사전에 사유와 함께 승인을 요청하라.
- 기존 디자인 시스템과 컴포넌트 패턴을 따르라. 새 스타일 규칙을 만들지 마라.
- 확신이 없는 사업적 판단(8번째 언어 선정, U-KSC 분류 코드 체계 등)은 임의 결정하지 말고 질의하라.
- 모든 신규 컴포넌트는 TypeScript strict 모드를 통과해야 한다.
- 작업 브랜치를 Phase 단위로 분리하고, 각 Phase를 독립적으로 롤백 가능하게 유지하라.

착수 전 Phase 0 조사 보고서부터 제출하라.