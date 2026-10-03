import json,urllib.request,itertools
occs={"499041":"Ind machinery mechanics","499043":"Maint workers machinery","499071":"Gen maint & repair","491011":"1st-line sup mech/install/repair","173023":"Elec/electronic eng techs","173026":"Industrial eng techs","173024":"Electro-mech & mechatronics techs","519061":"Inspectors"}
inds={"000000":"All industries","310000":"Mfg(31-33)","332000":"Fab metal","333000":"Machinery","336000":"Transp equip","335000":"Elec equip","326000":"Plastics&rubber","334000":"Computer&elec"}
dts={"01":"emp","04":"mean","13":"median"}
out={}
ser=[(f"OEUN0000000{i}{o}{d}",o,i,d) for o in occs for i in inds for d in dts]
for k in range(0,len(ser),25):
    ch=ser[k:k+25]
    req=urllib.request.Request("https://api.bls.gov/publicAPI/v2/timeseries/data/",data=json.dumps({"seriesid":[c[0] for c in ch],"startyear":"2023","endyear":"2025"}).encode(),headers={"Content-type":"application/json"})
    r=json.loads(urllib.request.urlopen(req,timeout=60).read())
    if r['status']!='REQUEST_SUCCEEDED' or not r['Results']: print(r['message']);break
    for s in r['Results']['series']:
        out[s['seriesID']]=[(d['year'],d['value']) for d in s['data']]
json.dump(out,open("bls_oews.json","w"))
for o in occs:
    for i in inds:
        v=[ (dts[d],out.get(f"OEUN0000000{i}{o}{d}")) for d in dts]
        if any(x[1] for x in v): print(o,occs[o],"|",inds[i],v)
