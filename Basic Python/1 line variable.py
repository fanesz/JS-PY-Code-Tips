var = ['john', 'jimmy']
print([x + ['', ' the chad'][x == 'john'] for x in var])
# output = var = ['john the chad', 'jimmy']

angka = [ 1, 5, -4, 10, -7, 2 ]
negatif = [i for i in angka if i < 0]
print(negatif)
# output = [-4, -7]

angka2 = [ 1, 5, -4, 10, -7, 2 ]
genapganjil = ['genap' if i % 2 == 0 else 'ganjil' for i in angka2]
# output = ['ganjil', 'ganjil', 'genap', 'genap', 'ganjil', 'genap']
