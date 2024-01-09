import csv

with open('data.csv', encoding = 'utf-8') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'''
                  there are {row} lines in the file
                  ''')

            line_count += 1
        else:
            print("{")
            print(f"\ttitle: '{row[0]}',")
            print(f"\tyear: {row[1]},")
            print(f"\tcategory: {row[2].split(',')},")
            print(f"\tclass: '{row[3]}',")
            print(f"\timage: '{row[4]}',")
            print(f"\tlink: '{row[5]}',")
            print(f"\tdescription: '{row[6]}',")
            print(f"\tauthors: '{row[7]}',")
            print(f"\tteam: '{row[8]}',")
            print("},")
            line_count += 1