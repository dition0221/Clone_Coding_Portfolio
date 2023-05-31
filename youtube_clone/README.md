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
- **23-05-23** : #6.14 ~ #6.22 / Save & Find & Update to DB
  - DB에 데이터를 저장하는 방법
    - await 모델명.create({ ... });
  - DB 모델의 Schema에서 사용할 수 있는 옵션들
    - { type, default, required, trim, minLength, maxLength, ... }
  - Mongoose로부터 무작위성 id
    - 무작위 16진수로 만들어진 24자리의 String
    - 정규식을 조건으로 사용 : [0-9a-f]{24}
  - DB로부터 원하는 데이터 찾기
    - await 모델명.findById(id)
    - .findOne() : 조건을 걸어 원하는 데이터 찾기
    - 데이터가 없다면 404페이지가 렌더링 되도록하기
  - DB에 데이터 업데이트(수정)하기
    - await 모델명.findByIdAndUpdate(id, {업데이트 내용});
  - DB에 해당 데이터의 유무 확인하기
    - await 모델명.exists({조건});
    - Boolean 값을 반환
- **23-05-24** : #6.23 ~ #6.28 / Middleware in mongoose, Delete & Search in DB
  - Middleware in mongoose
    - document에 무슨 일이 생기기 전이나 후에 middleware 적용이 가능
    - static function middleware : 직접 model의 middleware를 생성할 수 있음
  - Delete in DB
    - Model.findByIdAndDelete(id)
  - Search in DB
    - req.query
    - Model.find()
    - 정규식(regular expression) : $regex
- **23-05-25** : #7.0 ~ #7.11 / User Authentication
  - 새로운 page 생성 : Create Account, LogIn
  - PW 보안처리
    - 'bcrypt'패키지의 해시함수(bcrypt.hash())를 이용해 PW를 암호화한 후 DB에 저장
    - 'bcrypt.compare()' : 입력한 PW의 해시값과 DB에 저장된 PW의 해시값을 비교해 로그인
  - 상태코드(Status Code) : res.render() 사이에 '.status()' 메서드를 사용
  - DB의 unique값 중복체크하기
    - 'MODEL.exists()' 등을 사용해 중복체크
    - MongoDB에서 제공하는 '$or' 키워드를 사용해 조건들을 간단하게 사용 가능
  - 세션(Session) & 쿠키(Cookie)
    - 백엔드와 브라우저 간에 어떤 활동을 했는지 기억하는 것
    - 쿠키의 세션ID를 통해 서버는 어떤 브라우저인지 구분할 수 있음
    - 쿠키 : 단지 정보를 주고받는 방법
    - 세션ID : 쿠키에 저장됨
    - 'express-session'패키지를 Express서버의 middleware로 적용 시 자동으로 세션 발급
  - locals
    - Pug와 Express는 서로 전역변수 'locals 객체'를 공유할 수 있도록 자동으로 설정되어있음
    - Express의 Controller에서 'res.locals'로 참조가능
    - Pug에서는 자동으로 import되어있기에 파라미터명으로 간단하게 바로 사용 가능
    - 단, Express의 Router를 거치기 전인 Express Middleware에서 locals를 선언해야 함
- **23-05-29** : #7.12 ~ #7.13 / Session Store(1)
  - Session Store : 세션을 DB에 저장해야 함
    - 세션 데이터는 서버에 저장되는데, 이는 휘발성 저장소이므로 서버가 꺼지면 데이터는 날라갈 것
    - DB에 저장하면 서버를 재시작해도 세션 데이터를 기억할 것
  - 'connect-mongo' 패키지 : 해당 패키지를 사용해 세션을 MongoDB에 저장
    1. import MongoStore from "connect-mongo";
    2. MongoStore 생성하기
    - MongoDB의 URL을 가지고있는 configuration 객체를 만들어야 함
    - 서버.js에서 'express-session' 미들웨어 코드에 'store' 옵션을 추가
    - ex. store: MongoStore.create({ mongoUrl: "DB의URL주소" })
  - 쿠키 및 세션 설정
    - 로그인한 사용자의 세션만 저장하는 것이 좋음 : 리소스 문제
    - 'saveUninitialized: false'
      - request에서 새로 생성된 세션에 아무 작업이 이뤄지지 않은 상태도 저장할지 여부
      - false 시 세션을 수정할 때만 세션을 DB에 저장하고 쿠키를 넘겨주는 설정
    - 'resave: false'
      - 세션을 항상 저장할지(변경사항이 없어도) 여부를 정하는 값
      - 익명이나 봇에게 세션을 주게되면, DB가 효율적이지 않기에 false값을 권장
      - 각각 다른 변경사항을 요구하는 두 가지 request를 동시에 처리할 때 세션을 저장하는 과정에서 충돌이 발생할 수 있는데, 이를 방지하기위해 사용
    - 웹사이트를 서버에 배포할 시 세션 미들웨어 설정 중에서 'secret' 속성값과 DB의 URL 코드가 보이면 안 됨
      - DB에는 사용자의 ID와 PW가 있기때문 (보안)
