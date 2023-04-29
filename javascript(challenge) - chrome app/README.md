# javascript(challenge) - chrome app
### 바닐라 javascript으로 크롬 모멘텀 앱을 만듭니다.  
#### [23-04-17 ~ 23-05-01(2주)] 챌린지 교육 과정.  
  
---
  
### https://dition0221.github.io/ 에서 동작을 확인할 수 있습니다.  
크롬 모멘텀 앱.  
  
- 현재 시각 표현.
- 현재 지역의 실시간 날씨 정보 표현.
    - 날씨 openAPI 사용
- 새로고침 시 random한 배경화면과 명언 표현.
- 사용자의 이름을 기억함.
    - localStorage 사용
- to-do List
    - localStorage 사용
    - 새로운 element 생성, 원하는 element 삭제  
  
노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.

---

- **23-04-17** : #1.4 ~ #2.0 / 코딩 준비, Introduction (+ Quiz)
    - HTML 파일에 JS 파일을 연결하는 법
- **23-04-18** : #2.1 ~ #2.6 / Variable (+ Quiz)
    - data type, variable, array, object
- **23-04-19** : #2.7 ~ #2.16 / Function and Conditionals (+ Quiz)
    - function, return, prompt(), data type을 바꾸는 방법, if 조건문
- **23-04-20** : #3.0 ~ #3.5 / Objects, Arrays and Events (+ Code Challenge)
    - document, window, console.dir(), element를 가져오기, .getElementById(), .querySelector(), Event, .addEventListener()
- **23-04-21** : #3.6 ~ #3.8 / CSS in Javascript (+ Code Challenge)
    - .className 프로퍼티, .classList { .contains(), .remove(), .add(), .toggle() }
- **23-04-22** : Recap (+ Quiz)
- **23-04-24** : #4.0 ~ #4.7 / Login (+ Code Challenge(2 days)[1st day])
    - <form>tag submit, event argument, event.preventDefault(), template literals, local storage API { .setItem(), getItem(), removeItem() }
- **23-04-25** : (+ Code Challenge(2 days)[2nd day])
    - [과제] 랜덤 숫자 맞추기
    - Math.random()
- **23-04-26** : #5.0 ~ #5.3 / Clock (+ Code Challenge)
    - 무조건 2자리 수를 가지는 시계 만들기 (ex. 01, 02, ...)
    - setInterval(), setTimeout(), Date 객체, .padStart(), .padEnd()
- **23-04-27** : #6.0 ~ #6.2 / Quotes, Background with Math.random() (+ Code Challenge)
    - Math 객체, Math.random(), { Math.round(), Math.ceil(), Math.floor() }
    - JS에서 HTML문서에 element 생성하기 - { .createElement(), .appendChild(), .prepend(), .before(), .after() }
- **23-04-28** : #7.0 ~ #7.8 / To Do List (+ Final Code Challenge(3 days)[1st day])
    - To-Do list 만들기 및 저장하기, list 삭제 버튼, JSON.stringify()로 localStorage에 배열로 저장
    - event.target.parentElement, event.composedPath(), JSON.stringify(), JSON.parse(), array.forEach(), Date.now(), array.filter()
- **23-04-29** : #8.0 ~ #8.2 / Weather (+ Final Code Challenge(3 days)[2nd day])
    - 사용자의 위치 정보를 가져와서 openAPI를 사용해 지역 날씨를 표현
    - navigator.geolocation.getCurrentPosition(), API, JSON, fetch()
    - [최종과제] CSS를 사용해 화면 꾸미고, github.io 사용하기