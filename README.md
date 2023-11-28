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
<img width="372" alt="스크린샷 2023-11-28 오후 8 51 34" src="https://github.com/hjyang369/assignment-front/assets/125977702/f74b79df-84ea-4b41-9812-85f912809bc8">
<img width="368" alt="스크린샷 2023-11-28 오후 8 51 06" src="https://github.com/hjyang369/assignment-front/assets/125977702/266c9fe1-e333-4923-8019-7f7391e71567">
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
- max-width 560px를 기반으로 반응형 웹 구현
- react-router-dom의 oulet을 이용해 공통 UI 효율적으로 구현
![반응형웹](https://github.com/hjyang369/assignment-front/assets/125977702/9d9110ac-eb6a-490e-ba6b-e82cdc3c9e8f)

### 2. 필터링
참고 : https://github.com/hjyang369/assignment-front/pull/11

#### 메인페이지 필터링 
- 유저가 입력한 값으로 네브바 버튼의 text 값과 색상 동적으로 변경
- 유저가 입력한 값을 기반으로 api 요청
- 데이터를 받아오는 동안 로딩 컴포넌트 노출
- 메인페이지에서 필터링 후 데이터를 받아왔을 때 빈배열인 경우 "조건에 맞는 기사가 없습니다"라는 안내 문구 노출
- 유저가 입력한 값을 전역 상태에 관리하며 메인과 스크랩페이지의 필터링 분리하기 위해 각각 다른 store 사용

  
![메인 필터링](https://github.com/hjyang369/assignment-front/assets/125977702/01ac904d-46b9-4428-b811-9d127710c508)
![메인 필터링 없음](https://github.com/hjyang369/assignment-front/assets/125977702/5ed591ca-9e75-4b27-ae2b-f6d453f305d0)

#### 스크랩 페이지 필터링
- 유저가 입력한 값으로 local stotage에 저장된 기사를 filtering
- 국가 filtering의 경우 대한민국 클릭 시 korea, korean 둘 중 하나 포함하는 결과 값 노출
- filtering한 결과 값이 아무것도 없는 경우 안내 메세지 노출

  
![스크랩 필터링](https://github.com/hjyang369/assignment-front/assets/125977702/bf7b0710-1c21-432a-8e6f-bf1ec8fe566c)
![스크립 필터링 없음](https://github.com/hjyang369/assignment-front/assets/125977702/48dc74e6-0836-4776-9700-148d4d3d2a79)


### 3. 기사 스크랩 기능
- 메인 페이지에서 별 아이콘 클릭 시 기사 스크랩되며 스크랩되었다는 alert 띄움
- 메인 페이지에서 별 아이콘 재 클릭 시 기사 스크랩 해제 스크랩 해제 되었다는 alert 띄움
- 스크랩된 기사는 스크랩 페이지에서 확인 가능
- 스크랩된 기사가 없는 경우 안내 문구 및 메인 페이지로 이동하는 버튼 노출

  
![기사 스크랩](https://github.com/hjyang369/assignment-front/assets/125977702/353d3701-f2c9-44a6-b94f-7f019fa162d8)


### 4. 기사 사이트 리다이렉트


### 5. 무한 스크롤


