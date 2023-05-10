# React JS - Movie Web Service
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
- **23-05-10** : #3.4 ~ #4.3 / state, props
    - state, React.useState()
        - setState()에 원하는 값을 직접 넣거나, 이전 state값을 이용해서 현재 값을 계산
    - JSX에서 달라지는 HTML 속성들
        - JS의 예약어와 같은 HTML 속성은 Error가 생길 수 있기때문에 이름이 달라졌음
        - (ex.) for -> htmlFor / class -> className
    - props
        - 부모 컴포넌트로부터 자식 컴포넌트에 data를 보낼 수 있게 해주는 방법
    - React.memo()
        - props 변경이 없는 컴포넌트를 리렌더링하지 않게 설정 가능
        - 오직 성능 최적화를 위함
    - PropTypes
        - 어떤 데이터타입의 prop을 받고 있는지를 체크해주는 패키지