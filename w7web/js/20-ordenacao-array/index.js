//frutas.sort();          //ordena tudo em orden alfabetica
//frutas.reverse();       //inverte a lista

let cars = [
    {brand: 'fiat',     year: 2022},
    {brand: 'ferrari',  year: 2018},
    {brand: 'BMW',      year: 2020},
    {brand: 'BMW',      year: 2014},
    {brand: 'BMW',      year: 2013}
];

cars.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});

console.log(cars)



