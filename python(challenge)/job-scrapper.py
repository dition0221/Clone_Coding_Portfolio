# https://replit.com/@dition0221/webscrapper#main.py 에서 사용 바람.

from extractors.indeed import extract_indeed_jobs  # wwr-job-scrapper.py
from extractors.wwr import extract_wwr_jobs  # indeed-job-scrapper.py


keyword = input("What do you want to search for? : ")

# list를 반환
indeed = extract_indeed_jobs(keyword)
wwr = extract_wwr_jobs(keyword)
jobs = indeed + wwr

# 새로운 file 생성
file = open(f"{keyword}.csv", "w", encoding="utf-8-sig")
file.write("Position, Company, Location, URL\n")
for job in jobs:
  file.write(f"{job['position']}, {job['company']}, {job['location']}, {job['link']}\n")
file.close()

print("All Finished !")