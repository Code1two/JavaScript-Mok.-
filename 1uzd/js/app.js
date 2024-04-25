// Sukurkime kategorijų masyvą su knygomis
let booksCatalog = [
    {
        category: "Grozine literatura",
        books: [
            { ISBN: "GR1234I", releaseYears: 2012, name:'Supynes' , numOfPages: 450 },
            { ISBN: "GR1234J", releaseYears: 2006, name:'Ant slaito' , numOfPages: 700 },
            { ISBN: "GR1234K", releaseYears: 2024, name:'Uz senus gerus' , numOfPages: 545 },
            { ISBN: 'GR1234L', releaseYears: 1354, name:'Batuotas katinas', numOfPages: 600}
        ]
    },
    {
        category: "Fantastika",
        books: [
            { ISBN: "GR1234E", releaseYears: 2012, name:'Geltona' , numOfPages: 198 },
            { ISBN: "GR1234F", releaseYears: 2024, name:'Pilkumas' , numOfPages: 999 },
            { ISBN: "GR1234G", releaseYears: 1952, name:'Saule' , numOfPages: 399 },
            { ISBN: 'GR1234H', releaseYears: 2006, name: 'Zalgiris', numOfPages: 541}
        ]
    },
    {
        category: 'Romanai',
        books: [
            {ISBN: 'GR1234A', releaseYears: 2024, name: 'Be kepures', numOfPages: 451},
            {ISBN: 'GR1234B', releaseYears: 2022, name: 'Su kepure', numOfPages: 458},
            {ISBN: 'GR1234C', releaseYears: 2015, name: 'Kepure', numOfPages: 307},
            {ISBN: 'GR1234D', releaseYears: 1999, name: 'Skrybele', numOfPages: 284},
        ]
    }
];


for(let category of booksCatalog){
    console.log(`${category.category}(${category.books.length} knygos):`)

    for(let book of category.books){
        let releaseYearNote = "";
        if(book.releaseYears === 2024) {
            releaseYearNote = "nauja knyga";
        }
        console.log(`\tISBN: ${book.ISBN}`);
        console.log(`\tIsleidimo metai: ${book.releaseYears} ${releaseYearNote}`);
        console.log(`\tPavadinimas: ${book.name}`);
        console.log(`\tPuslapiai: ${book.numOfPages}`);
    }
}

