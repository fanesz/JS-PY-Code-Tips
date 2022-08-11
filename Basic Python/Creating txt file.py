var = open('dir', 'r')
var2 = var.read()
while var2 :
    print(var2, end='')
    var2 = var.read()
var.close()
var.write(data)
var.writelines(data)
var.readline()
var.readlines()

for baris in open('dir', 'r')
    print(baris, end='')
