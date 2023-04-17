from requests import get
from bs4 import BeautifulSoup

base_url = "https://weworkremotely.com/remote-jobs/search?term="  # 검색 사이트
search_term = "python"  # 검색어

response = get(f"{base_url}{search_term}")
if response.status_code != 200:
  print("Can't access website")
else:  # 웹 사이트가 정상적으로 작동 시 실행
  soup = BeautifulSoup(response.text, "html.parser")
  jobs = (soup.find_all("section", class_="jobs"))
  # print(len(jobs)) : 갯수 확인
  for job_section in jobs:
    job_posts = job_section.find_all("li")
    job_posts.pop(-1)  # 각 <li>덩어리(list)에서 제일 마지막 부분은 필요없으니 삭제
    for job_post in job_posts:  # 각각의 <li>로 분리
      print(job_post)
      print("\n//////\n")  # 구분자