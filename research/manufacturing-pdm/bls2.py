import json,urllib.request
inds=["311000","312000","313000","314000","315000","316000","321000","322000","323000","324000","325000","326000","327000","331000","332000","333000","334000","335000","336000","337000","339000"]
occs=["499041","499043","499071","491011","173026"]
ser=[(f"OEUN0000000{i}{o}01",i,o) for o in occs for i in inds]
res={}
for k in range(0,len(ser),25):
    ch=ser[k:k+25]
    req=urllib.request.Request("https://api.bls.gov/publicAPI/v2/timeseries/data/",data=json.dumps({"seriesid":[c[0] for c in ch],"startyear":"2025","endyear":"2025"}).encode(),headers={"Content-type":"application/json"})
    r=json.loads(urllib.request.urlopen(req,timeout=60).read())
    for s in r['Results']['series']:
        res[s['seriesID']]=int(s['data'][0]['value']) if s['data'] else None
for o in occs:
    vals=[(i,res[f"OEUN0000000{i}{o}01"]) for i in inds]
    print(o,"sum",sum(v for i,v in vals if v),"missing",[i for i,v in vals if v is None])
    print(vals)
