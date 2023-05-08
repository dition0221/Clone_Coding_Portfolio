# javascript - Meme Maker
### React를 중점적으로 사용해, 영화 웹 서비스를 만듭니다.
  
---

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.

---

- **23-05-06** : #1.1 ~ #2.4 / Introduction and React Element
    - 강의를 따라가기위해 React 17.0.2 버전 사용
        - 18버전에서 dom 문법 변경사항이 있음
    - React Js, ReactDOM
    - React의 규칙 : HTML을 직접 작성하지 않음
        - JS로 element를 생성 -> 결과물을 HTML에 업데이트
    - React.createElement(), ReactDOM.createRoot().render()
- **23-05-08** : #2.5 ~ #3.3 / JSX, setState
    - JSX로 HTML 요소 생성하기, 요소 사이에 요소 넣기(Container)
    - React로 생성한 **컴포넌트명의 첫글자는 반드시 대문자**로 사용
    - state, React.useState()
        - 함수로 데이터를 업데이트 시 자동으로 컴포넌트를 리렌더링 해줌
        - React.useState() 사용 시 전체를 중괄호({})로 묶어서 사용하고, 컴포넌트는 'return 소괄호(())'로 묶어서 사용