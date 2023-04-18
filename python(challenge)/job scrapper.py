from requests import get
from bs4 import BeautifulSoup

base_url = "https://weworkremotely.com/remote-jobs/search?term="  # 검색 사이트
search_term = "python"  # 검색어

response = get(f"{base_url}{search_term}")
if response.status_code != 200:
  print("Can't access website")
else:  # 웹 사이트가 정상적으로 작동 시 실행
  results = []
  soup = BeautifulSoup(response.text, "html.parser")
  jobs = (soup.find_all("section", class_="jobs"))
  # print(len(jobs)) : 갯수 확인
  for job_section in jobs:
    job_posts = job_section.find_all("li")
    job_posts.pop(-1)  # 각 <li>덩어리(list)에서 제일 마지막 부분은 필요없으니 삭제
    for post in job_posts:  # 각각의 <li>로 분리
      anchors = post.find_all("a")
      anchor = anchors[1]  # 각 <li>에서 후자의 <a>에만 접근
      link = anchor["href"]  # [1] 링크

      company, kind, region = anchor.find_all(
        "span", class_="company")  # [2]회사명, 직업, 지역
      title = anchor.find("span", class_="title")  # [3]제목
      # print(company.string, kind.string, region.string, title.string)
      # print("\n//////\n")  # 구분자
      job_data = {
        "link": f"https://weworkremotely.com/{link}",
        "company": company.string,
        "region": region.string,
        "position": title.string
      }
      results.append(job_data)
  for result in results:
    print(result)
    print("\n//////\n")  # 구분자