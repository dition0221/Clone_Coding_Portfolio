# python(challenge)
### python으로 웹 스크래퍼를 만듭니다.  
#### [23-04-10 ~ 23-04-24(2주)] 챌린지 교육 과정.  

---
  

### https://pythonlastjobscrapper.dition0221.repl.co/  에서 동작을 확인할 수 있습니다.  
![image](https://i.imgur.com/lnsOkQx.jpg)  
![image](https://i.imgur.com/SfnoyZ0.png)  
> [Job Scrapper] 직업 정보를 스크래핑 합니다.  
    - 외국 코딩계 취업 사이트('remoteok.com'과 'weworkremotely.com')에 연결되어 있습니다.  
    - 'python' 같은 키워드를 입력해야 합니다.  

---

🎉노마드코더 **파이썬 챌린지 33기 우수 졸업생**으로 선정되었습니다.🎉  
(https://nomadcoders.co/community/thread/7849)  
해당 스크래퍼는 교육 목적으로 동작합니다. (상업적 목적이 아닙니다.)  
- main.py
    - file.py : .csv파일을 생성
    - extractors/indeed.py : [사용하지않음] indeed.com에서 스크래핑 (+Selenium)
    - extractors/remoteok.py : remoteok.com에서 스크래핑
    - extractors/wwr.py : weworkremotely.com에서 스크래핑
    - templates/ : html 문서  
    - static/img/ : image 파일
  
- **practice 폴더** : python을 이용한 개인 연습 공간.  

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.

---

- **23-04-10** : #1.1 ~ #2.4 / 코딩 준비, Variable and Functions (+ Quiz)
- **23-04-11** : #2.4 ~ #2.8 / Functions (+ Quiz)
- **23-04-12** : #2.9 ~ #3.2 / Functions and If statement (+ Code Challenge)
    - Function, return문, f-string, if 조건문
- **23-04-13** : #3.3 ~ #3.7 / And & Or, Standard Library, While statement (+ Code Challenge)
    - input(), 조건식, Standard Library, While 반복문
- **23-04-14** : #4.0 ~ #4.4 / Data Structure(1) (+ Quiz)
    - Method, Data Structure, List, Tuple, Dictionary
- **23-04-15** : #4.5 ~ #4.9 / Data Structure(2) (+ Code Challenge)
    - for 반복문, not 예약어, Package 등록법, requests 패키지, response_status_code
- **23-04-17** : #5.1 ~ #5.6 / Job Scrapper(1) (+ Code Challenge(2 days)[1st day])
    - requests 패키지, BeautifulSoup 패키지, Scrapping, BeautifulSoup.find(), HTML 분석, HTML 태그 추출, len() 함수
- **23-04-18** : #5.7 ~ #5.9 / Job Scrapper(1) (+ Code Challenge(2 days)[2nd day])
    - [과제] 다른 사이트를 스크래핑하는 Python 코드를 코딩
    - dictionary 형식으로 저장, list.append(), BeautifulSoup.string, str.replace(), str.split, str.strip()
- **23-04-19** : #5.10 ~ #5.14 / Job Scrapper(2) (+ Final Code Challenge(5 days)[1st day])
    - refactoring, Selenium 사용, None 데이터 타입, BeautifulSoup.select()
- **23-04-20** : #5.15 ~ #5.21 / Job Scrapper(3) (+ Final Code Challenge(5 days)[2nd day])
    - pagination의 여러 page들을 추출하는 방법, range(), list 합치기, open() and .write(), .csv File, replace()
- **23-04-21** : #6.0 ~ #6.10 / Build a Website with Flask (+ Final Code Challenge(5 days)[3rd day])
    - How to use Flask, rendering, request, write Python code in HTML with Flask, picocss.com, fake DB(Cache), exception, to download made .csv file
- **23-04-22** : (+ Final Code Challenge(5 days)[4th day])
    - Update : 결과물에 회사 logo 추가, logo가 없을 시 대체 이미지 추가
    - Fix : .csv 파일 작성 시 내용물에 쉼표(,) 제거, indeed.com 대신 remoteok.com으로 대체
- **23-04-23** : (+ Final Code Challenge(5 days)[5th day])
    - Update : search.html에서 home.html로 가는 button 추가, CSS style 추가, 결과물의 갯수 표시 추가
    - Fix : .csv 파일 작성 시 내용물에 쉼표(,) 제거하는 코드 간소화