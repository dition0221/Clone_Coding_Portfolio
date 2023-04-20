from requests import get
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Selenium 설정
options = Options()
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
# options.add_argument("lang=ko_KR")
browser = webdriver.Chrome(options=options)

# 탐색할 페이지 갯수를 반환
def get_page_count(keyword):
  base_url = "https://kr.indeed.com/jobs?q="
  browser.get(f"{base_url}{keyword}")

  soup = BeautifulSoup(browser.page_source, "html.parser")
  pagination = soup.find("nav", attrs={"aria-label": "pagination"})
  pages = pagination.find_all("div", recursive=False)
  count = (len(pages))  # 페이지의 갯수
  if count == 0:
    return 1
  else:
    return count - 1

# indeed.com에서 스크롤하는 함수
def extract_indeed_jobs(keyword):
  results = []
  pages = get_page_count(keyword)
  print("Found", pages, "pages")
  for page in range(pages):  # 페이지 수 만큼 반복
    base_url = "https://kr.indeed.com/jobs"
    final_url = f"{base_url}?q={keyword}&start={page*10}"
    browser.get(final_url)
    # print(browser.page_source)  # 웹 페이지의 HTML 코드
    print("Requesting", final_url)
  
    # 해당 사이트가 봇으로 인식해서 막고있으므로, requests로 상태코드 확인 불가
    soup = BeautifulSoup(browser.page_source, "html.parser")
    job_list = soup.find("ul", class_="jobsearch-ResultsList")
    jobs = job_list.find_all("li", recursive=False)
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
          "company": company.string.replace(",", " "),
          "location": location.string.replace(",", " "),
          "position": title.replace(",", " ")
        }
        results.append(job_data)
  return results