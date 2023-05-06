# javascript - Meme Maker
### 바닐라 javascript으로 그림판 앱(Meme Maker)을 만듭니다.  
  
---

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.

---

- **23-05-02** : #0.0 ~ #0.3 / Introduction
- **23-05-03** : #1.0 ~ #1.2 / Canvas API(1)
    - Canvas API, canvas, context, path(.beginPath())
    - 모양을 그리기 {.rect(), .arc() 등}
    - 선이나 단색을 채우기 {.stroke(), .fill() 등}
    - 색깔 지정하기 {.strokeStyle, .fillStyle 등}
- **23-05-06** : #1.3 ~ #2.7 / Canvas API(2) & Painting Board
    - shortcut function, .lineWidth, data- attribute
    - 선을 그리는 방법
        - .moveTo(), .lineTo(), .stroke()
    - 캔버스 화면에서 그림을 그리기
        - offsetX, offsetY 사용
    - 선의 굵기와 색상을 변경하는 기능 추가
    - 캔버스에 색상을 채우는 기능(fill) 추가
        - Issue : "click" 이벤트로 사용 시 드래그할 때 제대로 동작 안 함
        - Fix : "mousedown" 이벤트로 변경
    - 캔버스 초기화하는 기능 추가(캔버스 전체를 지우기)
    - 캔버스 지우개 기능 추가
        - Issue : 현재 지우기모드인지 아닌지 구분이 힘듦
        - To-do : 토글키로 바꿀 것