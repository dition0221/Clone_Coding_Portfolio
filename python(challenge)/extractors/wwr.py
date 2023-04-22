from requests import get
from bs4 import BeautifulSoup


# weworkremotely.com
def extract_wwr_jobs(keyword):
    base_url = "https://weworkremotely.com/remote-jobs/search?term="  # 검색 사이트
    response = get(f"{base_url}{keyword}")
    if response.status_code != 200:
        print("Can't access website")
    else:  # 웹 사이트가 정상적으로 작동 시 실행
        results = []
        soup = BeautifulSoup(response.text, "html.parser")
        jobs = soup.find_all("section", class_="jobs")
        for job_section in jobs:
            job_posts = job_section.find_all("li")
            job_posts.pop(-1)  # 각 <li>덩어리(list)에서 제일 마지막 부분은 필요없으니 삭제
            for post in job_posts:  # 각각의 <li>로 분리
                anchors = post.find_all("a")
                anchor = anchors[1]  # 각 <li>에서 후자의 <a>에만 접근
                # [1] 링크
                link = anchor["href"]
                # [2]회사명, 직업, 지역
                company, kind, region = anchor.find_all("span",
                                                        class_="company")
                # [3]제목
                title = anchor.find("span", class_="title")
                # [4] 로고
                logo = post.find("div", class_="flag-logo")
                if logo != None:
                    logo = logo["style"].replace("background-image:url(",
                                                 "").replace(")", "")
                else:
                    logo = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcrU6dx%2Fbtsb5ldxUsO%2FkRVoNfUzPtqVW7tvuGtkkK%2Fimg.jpg"
                # 데이터 저장
                job_data = {
                    "link": f"https://weworkremotely.com/{link}",
                    "company": company.string,
                    "location": region.string,
                    "position": title.string
                }
                job_data["logo"] = logo
                results.append(job_data)
        return results