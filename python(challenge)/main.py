from flask import Flask, render_template, request, redirect, send_file
from extractors.indeed import extract_indeed_jobs
from extractors.wwr import extract_wwr_jobs
from file import save_to_file

app = Flask("Job_Scrapper")

# Cache
db = {}


@app.route("/")
def home():
  return render_template("home.html")


@app.route("/search")
def search():
  keyword_yet = request.args.get("keyword")
  keyword = ' '.join(keyword_yet.split())  # 다중 공백 제거
  # 미입력 또는 공백 입력 시 redirect
  if keyword == None or keyword == "":
    return redirect("/")
  if keyword in db:
    jobs = db[keyword]
  else:
    indeed = extract_indeed_jobs(keyword)
    wwr = extract_wwr_jobs(keyword)
    # 결과 list
    jobs = indeed + wwr
    db[keyword] = jobs
  return render_template("search.html", keyword=keyword, jobs=jobs)


@app.route("/export")
def export():
  keyword_yet = request.args.get("keyword")
  keyword = ' '.join(keyword_yet.split())  # 다중 공백 제거
  if keyword == None or keyword == "":
    return redirect("/")
  if keyword not in db:
    return redirect(f"/search?keyword={keyword}")
  # 새로운 file 생성
  save_to_file(keyword, db[keyword])
  return send_file(f"{keyword}.csv", as_attachment=True)


app.run("0.0.0.0")
