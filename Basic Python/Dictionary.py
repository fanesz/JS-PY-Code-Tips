d = { }  # membuat baru
d[key] = value  # untuk menambah
d = {1:100 ,2:200, 3:300}
d[1] = 100    d[2] = 200
d.keys() = 1, 2, 3
d.values() = 100,200,300
del d[key]    atau     d.clear() #untuk clear total
genap = {k:v for k,v in d.items() if v > 200}


#sorting
sorted(d.items(), key=lambda x: x[1], reverse=False)
