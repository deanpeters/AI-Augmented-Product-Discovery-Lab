import csv,sys
for yy in ("23","22"):
    print("YEAR 20"+yy)
    rows=list(csv.DictReader(open(f"cbp{yy}us.txt")))
    for r in rows:
        if r['lfo']!='-': continue
        n=r['naics']
        if n in ('------','31----','32----','33----','31-33','326---','332---','333---','334---','335---','336---') or n in('------',):
            sz=["<5","5_9","10_19","20_49","50_99","100_249","250_499","500_999","1000"]
            print(n,"emp",r['emp'],"est",r['est'],"|EST:",{s:r['n'+s] for s in sz},"|EMP:",{s:r['e'+s] for s in sz})
