from random import randint

dices = int(input("굴릴 주사위의 갯수 : "))
max_eye = int(input("주사위의 최대 눈의 수 : "))
# 'max_eye = 6'일 경우, 추가 output 생성
print("====================")
result = []  # 랜덤한 숫자 list

for dice in range(dices):
  result.append(randint(1, max_eye))

eyes = []  # 주사위의 눈
for eye in range(max_eye):
  eyes.append(eye + 1)

# 결과 창(1)
for eye in eyes:
  if max_eye == 6 and eye == 5:
    print("--------------------")
  if result.count(eye):
    print(f"{eye} 의 갯수 : {result.count(eye)}")

# 6면체 주사위 일 시, 성공/실패 여부 결과 창 표시
if max_eye == 6:
  success = 0
  fail = 0
  for num in result:
    if num > 4:
      success += 1
    else:
      fail += 1
  print("====================")
  print(f"성공한 갯수 = {success}")
  print(f"실패한 갯수 = {fail}")

# 결과 창(2)
print("====================")
print(f"던진 주사위의 갯수 : {dices}")