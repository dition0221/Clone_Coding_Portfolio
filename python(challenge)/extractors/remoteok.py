from bs4 import BeautifulSoup
import requests


def extract_remoteok_jobs(keyword):
    url = f"https://remoteok.com/remote-{keyword}-jobs"
    request = requests.get(url, headers={"User-Agent": "Kimchi"})
    results = []
    if request.status_code == 200:
        soup = BeautifulSoup(request.text, "html.parser")
        jobs = soup.find_all("tr", class_="job")
        for job in jobs:
            link = job.find("a", class_="preventLink")['href']
            link = f"https://remoteok.com/{link}"
            company = job.find("h3", itemprop="name")
            position = job.find("h2", itemprop="title")
            location = job.find("div", class_="location")
            logo = job.find("img", class_="logo")
            if company:
                company = company.string.strip()
            if position:
                position = position.string.strip()
            if location:
                location = location.string.strip()
            if logo:
                logo = logo['data-src']
            else:
                logo = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcrU6dx%2Fbtsb5ldxUsO%2FkRVoNfUzPtqVW7tvuGtkkK%2Fimg.jpg"
            if company and position and location:
                job = {
                    'link': link,
                    'company': company,
                    'position': position,
                    'location': location
                }
                job["logo"] = logo
                results.append(job)
    else:
        print("Can't get jobs.")
    return results
