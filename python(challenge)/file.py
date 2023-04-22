def save_to_file(file_name, jobs):
    file = open(f"{file_name}.csv", "w", encoding="utf-8-sig")
    file.write("Position, Company, Location, URL\n")
    for job in jobs:
        if job['position']:
            job['position'] = job['position'].replace(",", " ")
        if job['company']:
            job['company'] = job['company'].replace(",", " ")
        if job['location']:
            job['location'] = job['location'].replace(",", " ")
        file.write(
            f"{job['position']}, {job['company']}, {job['location']}, {job['link']}\n"
        )
    file.close()

    print("All Finished !")