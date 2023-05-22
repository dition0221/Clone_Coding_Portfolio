# [Full Stack] YouTube Clone

### 프론트+백+배포를 포함한 전체 싸이클을 돌리는 풀스택으로 Youtube와 비슷한 웹 사이트를 구성합니다.

**<a href="https://github.com/dition0221/youtube_clone" target="_blank">Github : https://github.com/dition0221/youtube_clone</a>** 에서 파일을 확인할 수 있습니다.

---

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.

- **23-05-16** : #1.0 ~ #2.4 / Introduction & NodeJs
  - NodeJS 설치 및 package.json 사용
  - Express 패키지 설치
  - babel 설치 및 세팅
- **23-05-17** : #3.0 ~ #3.11 / Server, Request, Response, Middleware
  - Express 패키지를 사용해 server 생성
  - .get() : request를 받아서 response를 하는 방법
  - next(); : request와 response 사이에서 작동하는 middleware
  - .use() : 전역 middleware 설정
  - Morgan 패키지 : Node.js에서 사용할 수 있는 정교한 log를 보여주는 외부 middleware 패키지
- **23-05-18** : #4.0 ~ #4.8 / Router
  - Express 패키지를 사용해 Router 생성
  - Router와 Controller를 분할 정복으로 정리
  - import와 export {export, export default}
  - ':변수명' 파라미터
  - 정규식
- **23-05-19** : #5.0 ~ #5.6 / Rendering HTML, Pug
  - res.render() : response로 HTML파일을 rendering
  - Pug : 템플릿을 이용해서 view를 만드는 것을 돕는 Template Engine(View Engine)
    - Pug를 Express 서버에 설치 및 설정
    - Pug 파일 생성 및 문법{ partial, extends, block, #{} }
    - 템플릿(Pug)에 JavaScript변수를 보내는 방법
  - 외부 프레임워크인 MVP.css를 사용해 기본적인 CSS를 꾸밈
- **23-05-21** : #5.7 ~ #6.6 / Pug에서의 조건문과 반복문과 mixin, POST & Back-End
  - Pug에서 다른 text와 같이 사용하지 않고 변수만 사용할 경우, '#{}' 대신에 '=변수명'으로도 사용 가능
  - Pug에서의 조건문(if, else)과 반복문(each ... in ..., else)
  - Pug에서의 mixin : 데이터를 받을 수 있는 일종의 미리 만들어진 HTML block(partials)
  - Pug에서 JS의 템플릿 리터럴 사용 가능
  - URL : 절대경로와 상대경로
  - POST : Back-End에게 데이터를 보내는 방식
  - express.urlencoded() : POST 방식으로 보낸 데이터를 Back-End에서 받는 방법
    - req.body
  - res.redirect() : 브라우저가 자동으로 (다른 URL 주소로) 화면 이동을 하는 것
- **23-05-22** : #6.7 ~ #6.13 / mongoDB, mongoose
  - mongoDB와 mongoose 설치
  - 서버에 DB 연결하기
  - DB Model 생성하기 (Schema 설정하기)
  - 서버파일(server.js)과 프로젝트 실행파일(init.js)을 분리
  - DB Query (Model.find())
    - promise, async, await, try-catch문
