import csv
sz=["50_99","100_249","250_499","500_999","1000"]
for yy in ("23","22"):
    print("YEAR 20"+yy)
    for r in csv.DictReader(open(f"cbp{yy}us.txt")):
        if r['lfo']!='-': continue
        if r['naics'] in ('326///','332///','333///','334///','335///','336///','3231//','311///','32////','33////','3331//'):
            print(r['naics'],"emp",r['emp'],"est",r['est'],"EST",[r['n'+s] for s in sz],"EMP",[r['e'+s] for s in sz])
