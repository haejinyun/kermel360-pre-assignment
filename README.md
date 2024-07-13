
# **kernel360 프론트엔드 과정 사진 과제 레포지토리 입니다.**

## 사용 기술 스택
- React (create-react-app 사용)
- JavaScript 
- React Router
- styled-components
- Lucide icons

## 컴포넌트 설계 시 고려했던 부분 
>  실제 서비스라면?

  위 문장을 가장 고려하려 했습니다.
  실제 서비스는 다양하게 변화할 가능성이 높습니다.      
  따라서 컴포넌트를 구상할 때, **`각 컴포넌트간의 의존성이 높지 않고 재활용이 가능하게 구성하려 노력하였습니다.`**

  * 부모 자식 간의 컴포넌트는 `props`로 값을 넘기며 재활용성을 높였습니다.
  * 조건부 렌더링을 통해, 이후 컴포넌트의 활용도를 높이도록 구성하였습니다.
  * cssdp props로 요소를 전달하여 상황에 맞는 css 적용이 가능하도록 구성하였습니다.
  * 적절한 파일 구조 분리  



## 폴더 구조 및 컴포넌트 구조 요약
<img width="245" alt="image" src="https://github.com/user-attachments/assets/71f9f7dd-6f06-4754-8c5f-be544a57ae68">
<br/><br/>

`src/assets`: 컴포넌트 내부에서 사용되는 여러 svg 등 저장
  * 이후 png, jpg 등 다양한 확장자를 가진 파일 추가 가능성이 있으므로 SVG라는 파일 하위에 요소 저장 진행     

<br/>

`src/components`: 중복적으로 사용되는 요소들로 구성 / ex) 이후 map들을 활용하여 반복적으로 사용되는 요소들
  * test
  * src/components/CarCard, src/page/PickDrop 등으로 구성


<br/>

`src/page`: 실제적인 페이지를 구성하는 요소 / ex) MainPage, DetailCarPage 등의 요소들 구성
  * 웹 사이트의 한 페이지를 가지는 파일들을 묶고 있는 파일로, 해당 폴더 내부의 폴더의 index.jsx로 라우팅을 통해서 페이지 구성
  * src/page/MainPage, src/page/DetailCarPage 등으로 구성


<br/>

`src/page/~~/components`: ~~ 페이지에서 동일 관심 주제 요소로 컴포넌트를 분리하여 구성
  * 한 페이지에도 다양한 파트가 모여 구성 (ex. 광고, 픽드랍, 인기 차량, 추천 차량 등)
  * 따라서, 해당 요소들을 분리하여 컴포넌트 구성 => 이로 필요한 컴포넌트의 사이즈가 줄고 컴포넌트의 관심사를 좁힐 수 있음
  * src/page/MainPage/components/PopularCar, src/page/MainPage/components/AdvertisementSection 등으로 구성



<br/>

`src/styles`: 전역적으로 사용 가능한 css 파일로 구성 
  * 태그들의 초기 디자인 리셋, 디자인 시스템 등 사이트에서 공통적으로 사용하는 디자인을 설정하는 파일
  * a태그의 방문 기록, 밑줄 혹은 ul, li 태그의 padding 등 기존에 설정되어 있는 css를 전역적으로 초기화 혹은 사전 포멧팅 가능
  * src/styles/global/reset.js 등으로 구성

<br/>

`src/utils`: 페이지에서 사용하는 정적인 데이터 파일로 구성
  * popular car, recommendation car 등 정적인 값을 저장하는 파일
  * 각 파일에서 export 하여 값 접근하는 방식으로 사용
  * src/utils/constant/PopularCar.js, src/utils/constant/recommendationCar.js 등으로 구성

<br/>



## 왜 이렇게 설계했는지

시안이 나와있는 디자인만을 고려하기보다는 이것이 실제 서비스화 되었을떄를 고려하려 했다.
만약 Rent Car 웹 사이트가 실제화 된다면 이는 하나의 페이지로만 구성이 되는 것이 아니라 다양한 페이로 구성이 될 것이다. 
따라서 각 페이지를 구성하는 Page 폴더를 만들어서 진행했다.

A. 재활용 가능한 컴포넌트 요소인가
B. Page

## 내가 만든 컴포넌트들의 재사용성에 대해 스스로 평가해보기

## 컴포넌트를 설계하며 어려웠던 점
* 광고의 특성을 고려하다 보니 해당 컴포넌트를 구성하는 파트가 고민이 되었다.
  동일한 요소로 구성되어 있지만 이것을 재활용 가능한 컴포넌트로 사용하게 된다면 props로 전달 받아야 하는 요소들이 많아지는 것이 고민이었습니다.
  해당 광고 포멧이 꾸준히 사용되는 것이라면 재활용 가능한 컴포넌트로 분리하는 것이 득이지만 특집 광고처럼 빠른 교체가 이루어 지는 것이라면 컴포넌트의 장점이 없어져 컴포넌트를 설계하는 과정에서 고민이 되었다.
