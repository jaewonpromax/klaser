# KLASER — 전국한의과대학 레이저·미용의학회 홈페이지

전국한의과대학 레이저·미용의학회(KLASER)의 공식 홈페이지 정적 웹사이트입니다.
빌드 도구 없이 순수 HTML / CSS / JS로 제작되어 있어, 파일을 그대로 열거나
어떤 정적 호스팅(예: Cloudflare Pages, GitHub Pages, Netlify)에도 바로
배포할 수 있습니다.

## 폴더 구조

```
klaser/
├── index.html      # 메인 페이지 (히어로, 소개, 공지 미리보기, 갤러리 미리보기)
├── about.html      # 학회소개 (인사말, 연혁, 조직도, 참여 대학)
├── notice.html     # 공지사항 목록 (공지/학술/행사 필터)
├── gallery.html    # 활동앨범 (세미나/학술대회/워크숍 필터)
├── contact.html    # 오시는 길·문의, 가입 신청 폼
├── css/style.css   # 공통 디자인 시스템 (색상, 컴포넌트, 반응형)
├── js/main.js      # 공통 스크립트 (네비게이션, 스크롤 애니메이션, 필터, 폼)
└── assets/
    └── favicon.svg # 브랜드 파비콘 (K 모노그램)
```

## 로컬 미리보기

별도 빌드 과정이 없으므로 `index.html`을 브라우저로 바로 열어도 되고,
간단한 정적 서버로 띄워도 됩니다.

```bash
npx serve .
# 또는
python3 -m http.server 8080
```

## 커스터마이징 가이드

- **색상 / 타이포그래피**: `css/style.css` 상단 `:root` 변수(`--navy-*`,
  `--blue-*`, `--gold-*`)를 바꾸면 전체 톤이 함께 변경됩니다. 폰트는
  Pretendard(CDN)를 기본으로 사용합니다.
- **텍스트 콘텐츠**: 각 HTML 파일의 문구(인사말, 연혁, 공지, 임원진, 연락처 등)는
  현재 예시/placeholder 데이터입니다. 실제 학회 정보로 교체해 주세요.
- **공지사항 / 활동앨범**: `notice.html`, `gallery.html`의 항목은 정적으로
  나열되어 있습니다. 게시글이 많아지면 별도 CMS(예: Notion API, Google Sheets,
  headless CMS) 연동을 고려하는 것을 권장합니다.
- **가입 신청 폼**: `contact.html`의 폼은 프런트엔드 데모(제출 시 화면에
  완료 메시지만 표시)입니다. 실제 운영 시 Formspree, Google Forms, 또는
  자체 백엔드/이메일 API와 연동이 필요합니다.
- **이미지**: 현재 히어로/갤러리 영역은 실제 사진 대신 그라디언트
  플레이스홀더로 구성되어 있습니다. `gallery-tile` 클래스에 실제 사진을
  배경 이미지로 교체하면 됩니다.

## 배포 (예: Cloudflare Pages)

1. 이 저장소를 Cloudflare Pages에 연결합니다.
2. Build command: 없음 (정적 파일이므로 비워둡니다)
3. Build output directory: `/` (루트)
4. 배포 후 커스텀 도메인을 연결하면 완료됩니다.
