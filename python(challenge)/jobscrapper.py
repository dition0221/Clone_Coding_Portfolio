# https://replit.com/@dition0221/webscrapper#main.py 에서 사용 바람.

from requests import get
from bs4 import BeautifulSoup
from extractors.wwr import extract_wwr_jobs
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Selenium 설정
options = Options()
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
# options.add_argument("lang=ko_KR")
browser = webdriver.Chrome(options=options)

base_url = "https://kr.indeed.com/jobs?q="
search_term = "python"  # 검색어
browser.get(f"{base_url}{search_term}")
# print(browser.page_source)  # 웹 페이지의 HTML 코드

# 해당 사이트가 봇으로 인식해서 막고있으므로, requests로 상태코드 확인 불가
soup = BeautifulSoup(browser.page_source, "html.parser")
job_list = soup.find("ul", class_="jobsearch-ResultsList")
jobs = job_list.find_all("li", recursive=False)

results = []
# 각각의 <li> 마다
for job in jobs:
  zone = job.find("div", class_="mosaic-zone")
  if zone == None:  # 아무 내용이 없는 <li>요소 제거
    anchor = job.select_one("h2 a", class_="jobTitle")
    # [1] 제목(직책)
    title = anchor["aria-label"]
    # [2] 링크
    link = anchor["href"]
    # [3] 회사명
    company = job.find("span", class_="companyName")
    # [4] 지역
    location = job.find("div", class_="companyLocation")
    job_data = {
      "link": f"https://kr.indeed.com{link}",
      "company": company.string,
      "location": location.string,
      "position": title
    }
    results.append(job_data)

for result in results:
  print(result, "\n\n//////////\n")