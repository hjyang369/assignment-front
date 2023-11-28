# 프로젝트 소개
- 필터링을 통한 기사 스크랩 프로젝트
- 개발 인원 : 양회진(1인)
- 개발 기간 : 2023.11.21 ~ 2023.11.28 (7일)

### 1. 프로젝트 설치 및 실행 방법
```
//클론 하는 경우
git clone https://github.com/hjyang369/assignment-front.git
npm install
npm start

// 압축 파일의 경우
npm install
npm start
```
### 2. 기술 스택
- React.js
- TypeScript
- 상태관리 : Justand
- CSS : styled-component
  
### 3. 컴포넌트를 만들때 고려한 사항
- 아토믹 디자인 패턴
- 다른 컴포넌트에서 재사용하는지, 반복되는 UI인지 고려해 공통 텀포넌트로 제작

### 4. 미리보기
#### 메인 페이지



<img width="369" alt="스크린샷 2023-11-28 오후 8 14 12" src="https://github.com/hjyang369/assignment-front/assets/125977702/48c54195-ad15-46ee-ac8d-6a1d71aa3ac6">

#### 스크랩 페이지
<img width="370" alt="스크린샷 2023-11-28 오후 8 14 34" src="https://github.com/hjyang369/assignment-front/assets/125977702/b558954f-dc21-4063-951c-7ee1845e13e2">
<img width="370" alt="스크린샷 2023-11-28 오후 8 14 53" src="https://github.com/hjyang369/assignment-front/assets/125977702/1cd709cc-10b0-4e8f-9fcf-1e8aaba240d4">
<img width="370" alt="스크린샷 2023-11-28 오후 8 15 14" src="https://github.com/hjyang369/assignment-front/assets/125977702/c023d6a0-74d8-4cb0-aea0-1f80fbe77b5a">


### 5. 폴더 구조
- 재사용하는 타입의 경우 interface로 제작해 types 폴더 내 article.ts에서 관리
- 상수데이터의 경우 modules 폴더 내 constants.ts에서 관리
- 스타일의 경우 style.ts, 타입스크립트+JSX인 경우 index.tsx, 타입스크립트만 사용하는 경우 파일명.ts로 제작
```
src
 ┣ asset
 ┃ ┗ icon
 ┃ ┃ ┗ star.svg ...
 ┣ components
 ┃ ┣ Bottom
 ┃ ┣ Button
 ┃ ┣ Card
 ┃ ┃ ┣ Loading
 ┃ ┣ Frame
 ┃ ┣ Modal
 ┃ ┣ Nav
 ┃ ┣ Nothing
 ┃ ┗ Tag
 ┣ hooks
 ┃ ┗ useInputValue.ts
 ┣ modules
 ┃ ┗ constants.ts
 ┣ pages
 ┃ ┣ Main
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ style.ts
 ┃ ┗ Scrap
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ style.ts
 ┣ store
 ┃ ┣ HomeFilter.ts
 ┃ ┣ articles.ts
 ┃ ┗ scrapFilter.ts
 ┣ styles
 ┃ ┣ GlobalStyle.ts
 ┃ ┗ Theme.ts
 ┣ types
 ┃ ┗ article.ts
 ┣ index.tsx
 ┗ router.tsx
```

# 구현사항
- New York Times 의 API : https://developer.nytimes.com/ 참조
- 560px 기준으로 반응형 웹 구현

### 1. 레이아웃 및 반응형 웹
### 2. 메인페이지 필터링
### 3. 스크랩 페이지 필터링
### 4. 기사 스크랩 기능
### 5. 기사 사이트 리다이렉트
### 6. 무한 스크롤
