const Country = ['Indonesia', 'Inggris', 'Japan', 
                'China', 'Korea', 'Russia', 'Australia',
                'Amerika', 'Swedia', 'Kanada', 'India']

const filter = Country.filter((m) =>
    m.startsWith('A')
)

console.log(filter);
// [ 'Australia', 'Amerika' ]
