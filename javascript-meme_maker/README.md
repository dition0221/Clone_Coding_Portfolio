# javascript - Meme Maker
### 바닐라 javascript으로 그림판 앱(Meme Maker)을 만듭니다.  
  
---

**https://dition0221.github.io/Clone_Coding_Portfolio/javascript-meme_maker/ 에서 동작을 확인할 수 있습니다.**  
![image](https://github.com/dition0221/Clone_Coding_Portfolio/assets/129196812/95caff85-63c1-4d7c-a0c9-6a4249d8725e)
> **[그림판 앱] - 원하는 색으로 선 그리기 및 색 채우기**
    **1. 색상 선택하기**
    - 왼쪽 색상표에서 원하는 색상을 선택할 수 있습니다.
    **2. 연필 사용하기**
    - 'Pencil Width'를 통해 연필의 굵기를 설정할 수 있습니다.
    - 'Stroke' 또는 'Fill'을 통해 연필의 스타일을 변경할 수 있습니다.
    **3. 캔버스 전체를 칠하기**
    - '🎨Fill' 버튼을 통해 캔버스 전체를 칠할 수 있습니다.
    **4. 캔버스 전체를 지우기**
    - '💣 Destroy' 버튼을 통해 캔버스 전체를 지울 수 있습니다.
    **5. 지우개 사용하기**
    - '❌ Eraser' 버튼을 통해 지우개로 변경이 가능합니다.
    **6. 이미지 불러오기**
    - '📁 Add Photo' 버튼을 통해 이미지를 불러올 수 있습니다.
    - 불러온 이미지는 자동으로 캔버스 전체의 크기로 조정됩니다.
    **7. 캔버스에 텍스트 넣기**
    - input에 입력할 텍스트를 입력한 후 캔버스를 더블클릭 시 캔버스에 텍스트를 넣습니다.
    - range bar로 입력할 텍스트의 크기를 조절할 수 있습니다.
    - 폰트 스타일 3가지를 제공합니다. (serif, fantasy, cursive)
    - 'Stroke' 또는 'Fill'을 통해 입력할 텍스트의 스타일을 변경할 수 있습니다.
    **8. 이미지 저장하기**
    - '🖼 Save Image' 버튼을 통해 현재 캔버스의 이미지를 png파일로 저장할 수 있습니다.

---

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.

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
- **23-05-07** : #3.0 ~ #3.3 / Meme Maker
    - 캔버스에 이미지파일 업로드하기
        - input type="file" and 'accept' attribute
        - URL.createObjectURL(), context.drawImage()
    - 캔버스에 텍스트를 입력하는 기능
        - event.offsetX와 event.offsetY를 사용
        - context.strokeText(), context.fillText()
        - Issue : 텍스트가 context.lineWidth의 영향을 받음
        - Fix : context.save(), context.restore() 사용
    - 캔버스 선의 모양 바꾸기 : context.lineCap = {butt, round, square}
    - 캔버스 이미지를 저장하는 기능
        - canvas.toDataURL(), a.href, a.download, a.click()
- **23-05-08** : #3.4 ~ #3.5 / CSS + Code Challenge
    - CSS로 스타일링
    - Update
        - 삭제(destroy), 저장(save) 시 확인하는 confirm창 추가
        - 텍스트 기능 추가 (size 설정, font설정, {fill, stroke}의 타입 설정)
        - 'Fill' & 'Draw' 버튼 이분할
        - 'draw' 기능 추가 {stroke, fill}
        - 'Fill' 버튼 클릭 시 Draw 스타일 버튼 표시 비활성화
            - 'Draw' 버튼 클릭 시 이전 Draw 스타일 버튼 표시 활성화
            - 'Fill' 버튼 활성화 시 Draw 스타일 버튼 변경 비활성화
    - Fix
        - 'eraser' 클릭 시 선택한 색상을 흰색으로 표시 + 'draw' 모드로 변경