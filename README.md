
# **kernel360 프론트엔드 과정 사전 과제 레포지토리 입니다.**

이번 Kernel 360 FE 1기에 참여하게 된 윤해진이라고 합니다.     
사전과제를 진행하며 고려했던 부분을 작성해보았습니다.     
감사합니다! :smile:      


<br/>
  


## 목차 :clipboard:
 
1. [사용 기술 스택 ](#1-사용-기술-스택-books)
2. [컴포넌트 설계 시 고려했던 부분](#2-컴포넌트-설계-시-고려했던-부분-astonished)
3. [폴더 구조 및 컴포넌트 구조 요약](#3-폴더-구조-및-컴포넌트-구조-요약-file_folder)        
   3-1. [라우팅 방식](#3-1-라우팅-방식)       
   3-2. [폴더 구조](#3-2-폴더-구조)
4. [왜 이렇게 설계했나요](#4-왜-이렇게-설계했나요-question)
5. [내가 만든 컴포넌트들의 재사용성에 대해 스스로 평가해보기](#5-내가-만든-컴포넌트들의-재사용성에-대해-스스로-평가해보기-mag_right)
6. [컴포넌트를 설계하며 어려웠던 점](#6-컴포넌트를-설계하며-어려웠던-점-pencil)


<br/>
  


## 1. 사용 기술 스택 :books:
- [React (create-react-app 사용)](https://ko.legacy.reactjs.org/)
-  [JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [React Router](https://reactrouter.com/en/main)
- [styled-components](https://styled-components.com/)
- [Lucide icons](https://lucide.dev/icons/)


<br/>
  


## 2. 컴포넌트 설계 시 고려했던 부분 :astonished:
 >  ### 실제 서비스라면?

  위 문장을 가장 고려하려 했습니다.      
  실제 서비스는 기획 측의 요구 혹은 여러 경우로 인해 디자인 등이 변화할 가능성이 높습니다.      
  따라서 컴포넌트를 구상할 때, **`각 컴포넌트 간의 의존성이 높지 않고 재활용이 가능하게 구성하려 노력하였습니다.`**

  * 부모 자식 간의 컴포넌트는 `props`로 값을 넘기며 **재활용성을 높였**습니다.
  * `조건부 렌더링`을 통해, 이후 **컴포넌트의 활용도를 높이도록 구성**하였습니다.
  * `css에 props로 요소를 전달`하여 **상황에 맞는 css 적용이 가능**하도록 구성하였습니다.
  * `적절한 파일 구조 분리`하였습니다.


<br/>
  


### 3. 폴더 구조 및 컴포넌트 구조 요약 :file_folder:
<img width="245" alt="image" src="https://github.com/user-attachments/assets/71f9f7dd-6f06-4754-8c5f-be544a57ae68">
<br/><br/>

### 3-1. 라우팅 방식
* Outlet 컴포넌트 활용     
  `Outlet의 중첩 라우팅`을 통해 상위 컴포넌트를 레이아웃하여, 마치 {children}을 사용하는 것과 같이 내부 요소들을 바꾸는 방식으로 라우팅 구성


  ```javascript
  function IndexPage() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
  ```
  

  ```javascript
  function App() {
    return (
      <Routes>
        <Route path="/" element={<IndexPage />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    );
  }
  ```


<br/>
  

### 3-2. 폴더 구조
`src/assets`: 컴포넌트 내부에서 사용되는 여러 svg 등 저장
  * 이후 png, jpg 등 다양한 확장자를 가진 파일 추가 가능성이 있으므로 SVG라는 파일 하위에 요소 저장 진행



<br/>

`src/components`: 중복적으로 사용되는 재활용 가능한 요소들로 구성 / ex) 이후 map들을 활용하여 반복적으로 사용되는 요소들
  * src/components/CarCard, src/page/PickDrop 등으로 구성


<br/>

`src/page`: 실질적인 페이지를 구성하는 요소 / ex) MainPage, DetailCarPage 등의 요소들 구성
  * 웹 사이트의 한 페이지를 보여주는 파일들을 묶고 있는 파일로, 해당 폴더 내부의 폴더의 index.js로 라우팅을 통해서 페이지 구성
  * src/page/MainPage, src/page/DetailCarPage 등으로 구성


<br/>

`src/page/~~/components`: ~~ 페이지에서 동일 관심 주제 요소로 컴포넌트를 분리하여 구성
  * 한 페이지에도 다양한 파트가 모여 구성 (ex. 광고, 픽드랍, 인기 차량, 추천 차량 등)
  * 따라서, 해당 요소들을 분리하여 컴포넌트 구성 => 이로 필요한 컴포넌트의 사이즈가 줄고 컴포넌트의 관심사를 좁힐 수 있음
  * src/page/MainPage/components/PopularCar, src/page/MainPage/components/AdvertisementSection 등으로 구성



<br/>

`src/styles`: 전역적으로 사용 가능한 css 파일로 구성 
  * 태그들의 초기 디자인 리셋, 디자인 시스템 등 사이트에서 공통적으로 사용하는 디자인을 설정하는 파일
  * a 태그의 방문 기록, 밑줄 혹은 ul, li 태그의 padding 등 기존에 설정되어 있는 css를 전역적으로 초기화 혹은 사전 포멧팅 가능
  * src/styles/global/reset.js 등으로 구성

<br/>

`src/utils`: 페이지에서 사용하는 데이터 파일로 구성
  * 이 또한 실제 페이지의 경우 다양한 파일이 추가 가능하기에 constant라는 내부 폴더 하위에 파일 구성
  * popular car, recommendation car 등 정적인 값을 저장하는 파일
  * 각 파일에서 export 하여 값 접근하는 방식으로 사용
  * src/utils/constant/PopularCar.js, src/utils/constant/recommendationCar.js 등으로 구성

<br/>



## 4. 왜 이렇게 설계했나요 :question:

시안이 나와있는 디자인만을 고려하기보다는 이것이 **실제 서비스화되었을 때를 고려**하여 파일을 구성하려 하였습니다.     
만약 Rent Car 웹 사이트가 실제화된다면 이는 하나의 페이지로만 구성이 되는 것이 아니라 다양한 페이지로 구성이 될 것입니다.      

따라서, 각 페이지를 구성하는 `Page 폴더`를 만들어 `하나의 페이지만을 나타내는 폴더(ex. MainPage)`를 만들고 해당 폴더 내부의 `components폴더 안으로 페이지를 분할하여 구현`하였습니다.     
<br/>    

#### [요약]
A. 한 페이지[Sample]를 src/[Sample]/components 폴더 아래에 관심 요소에 맞게 **분할하여 구현** (ex.PickDropSection, PopularCarSection) 후, `해당 요소들을 합쳐 페이지 구성`          
B. 분할한 요소에서 **공통으로 사용할 요소**가 있다면 이는 `src/components 폴더에 구현`       

이렇게 분리하였을 때, 페이지의 요소들의 수정과 개발에 용이하다는 이점을 보았습니다.      
* 페이지 내부의 컴포넌트의 순서 및 위치 등이 수정되었을 때, 수정이 필요한 컴포넌트들만 수정 가능
* 레고 블록을 사용하는 듯이 컴포넌트를 쌓아 올리며 개발 가능 => 각 컴포넌트 간의 연결성 감소


<br/>
  


## 5. 내가 만든 컴포넌트들의 재사용성에 대해 스스로 평가해보기 :mag_right:


* page 내부의 파일 하위의 components 요소의 경우는 재사용성 보다는 큰 컴포넌트를 작은 컴포넌트로 쪼개어 개발을 한다는 의미가 큰 영역인지라, 재사용성과는 큰 관련이 없다.
  * ex. `src/pages/MainPage/components/AdvertisementSection`과 형제 파일들

* src 하위의 components 요소의 경우 재사용이 가능한, 즉 여러 컴포넌트 혹은 한 컴포넌트에서 반복적으로 사용되는 요소를 컴포넌트와 하여 재사용 가능하게 개발 진행하였다.
  * ex. `src/components/Adcertisement` 형제 파일들

* 재사용이 가능한 컴포넌트를 개발함에 있어 컴포넌트로 분리를 하는 기준이 조금 크다.
   <img width="812" alt="image" src="https://github.com/user-attachments/assets/f1fd0094-ae0f-4c9e-abf6-337be128cd10">        
  
    위와 같은 파트를 하나의 컴포넌트로 개발을 하였다.       
    
    그러나, 해당 요소를            
     <img width="392" alt="image" src="https://github.com/user-attachments/assets/503e1eb0-9c94-470e-937d-ca55bddb2969">         
     <img width="222" alt="image" src="https://github.com/user-attachments/assets/223696e4-9b58-442c-8a25-19319ffe2e3e">     
    위 처럼 두개의 요소로 나누어 더 작은 단위의 컴포넌트로 구현하는 방법도 있다고 생각이 들었다.       


<br/>
  


## 6. 컴포넌트를 설계하며 어려웠던 점 :pencil:      

* ### **과연 재활용이 가능한 컴포넌트일까?**
  
  컴포넌트를 나눌 때, **각 컴포넌트의 특성을 고려**해서 만들려고 합니다.      
  이때 고민이 되었던 컴포넌트는 `광고 컴포넌트`를 구성하는 부분에서 여러 고민이 들었습니다.
        
  현재 디자인에서는 동일한 구조로 구성되어 있지만, 이것을 `재활용 가능한 컴포넌트로 제작하는 것이 맞을까?`라는 고민이 있었습니다.       
  제가 생각하기에 광고란 시기 혹은 이벤트에 맞게 **빠른 변화**가 있을 가능성이 높습니다.
  위와 같은 특성을 띄게 된다면 **`재활용이 가능한 컴포넌트로 구현을 하는 장점이 없어진다`** 라 생각했습니다.
  따라서, 해당 부분에서 실제적인 서비스를 구현할 때에는 어떻게 하는지 고민이 되었고 이런 고민은 캠프 기간 프로젝트를 진행할 때는 **`기획 파트와의 커뮤니가 필요한 부분이라는 생각이 들었습니다.`**

<br/>

* ### **적절한 사이즈로 나눈 컴포넌트일까?**
  
  컴포넌트를 나눌 때, **최소한의 기능만을 담아**만들어야 하나? 혹은 요소들이 모여 하나의 온전한 기능을 만드는 요소로 하나의 컴포넌트를 구성해야하나 고민이 되었습니다.          
  최소한의 기능만을 담은 것을 개별의 컴포넌트로 만들게 된다면 레고처럼 쌓아 만드는 개발이 가능한다고 할지 몰라도 이는 한편으로는 더욱 개발 시간을 길게 하는 요소가 될 것입니다.
  따라서 `적당한 기능의 사이즈로 분리된 컴포넌트`를 구성한다는 것은 정말 고민이 되는 부분이었습니다.            

  프로젝트의 한 면만 보는 것이 아닌 프로젝트 내부 요소의 기능을 살펴보고 추후 다른 부분에서도 사용이 될 것인지, 파악하는 힘을 길러야겠다는 생각이 들었습니다.

<br/>

* ### **적절한 컴포넌트의 네이밍인가?**
  
  적절하게 컴포넌트를 나눈 뒤에는 따라오는 고질적인 질문이라고 생각합니다.          
  알맞게 나누었다면 적절한 네이밍이 응당 가능하겠다고 생각하지만, 그럼에도 불구하고 네이밍은 참 어려운 부분으로 저에게 다가옵니다.       
  최대한 사용자가 코드를 보지 않고 **네이밍만으로 해당 컴포넌트가 어떤 것을 나타내고 있는지 파악 가능하게 지으려 노력합니다.**        
  `PopularCarSection`, `RecommendCarSection`, `PickDropSection` 등 page 내부 components의 파일들은 **Section이라는 접미사**를 붙여 활용하였습니다.       
  해당 부분은 보다 수월한 협업을 위해 프로젝트를 진행할 때, 팀원 내의 `네이밍 컨벤션` 등을 지정하여 개선해 보아도 좋겠다는 생각이 들었습니다.         
  


