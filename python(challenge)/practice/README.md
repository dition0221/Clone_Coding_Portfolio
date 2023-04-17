# python을 이용한 개인 연습 공간.

개인 연습 공간.

---

- **dice.py** : 주사위를 굴려서, 결과를 표시함
    - input
        - '굴릴 주사위의 갯수'
        - '주사위의 최대 눈의 수'
            - 4면체, 6면체, 20면체 또는 그 외 등 가능
            - random.randint() 함수 사용
    - output
        - 해당 눈이 몇 번 나왔는지
            - 0번 나온 주사위의 눈은 표시하지 않음
        - 6면체 주사위일 경우, 추가 output 생성
            - 1~4의 눈이 나오는 경우 (실패)
            - 5~6의 눈이 나오는 경우 (성공)
        - 총 던진 주사위의 갯수