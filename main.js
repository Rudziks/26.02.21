//mnozenie razy dwa
var liczby = [1, 8, 19];
var razyDwa = liczby.map(function(x){
    return x * 2
})
console.log(liczby, razyDwa)

//mnozenie razy trzy

//usuwanie ostatniego elementu
var usuwanie = [1, 9, 10, 20];
usuwanie.pop()
console.log(usuwanie)

//usuwanie calej tablicy
var usuwanieTablicy = [1, 9, 19, 20, 30];
for (let i=1; i<=100; i++)
usuwanieTablicy.pop(i)
console.log(usuwanieTablicy)

//usuwanie pierwszego elementu
var usuwanieElementu = [1, 9, 28, 19];
usuwanieElementu.shift()
console.log(usuwanieElementu)

//dodwanie 1+ elem na początek
var dodawanieElementow = [3, 4, 5];
dodawanieElementow.unshift(1,2,3)
console.log(dodawanieElementow)


//dodwanie elementów
var laczenieElementow = ["Jan"]
var laczenieElementow1 = ["Nowak"]
const wynik = (laczenieElementow +' ' + laczenieElementow1)
console.log(laczenieElementow, wynik)

//odwracanie elementow
var odwrocenieElementow = [1, 2, 3]
odwrocenieElementow.push(4, 5, 6, 7, 8, 9, 10)
odwrocenieElementow.reverse()
console.log(odwrocenieElementow)

//tworzenie nowe tablicy
const tablica = new Array(1, 15, 150, 1500)
//dlugosc tablicy
tablica.length
//wyszukiwanie wszystkich elem na tablicy, (zmienna pomocniczna, nic nie zmienia)
//forEach wypisuje pod sobą elementy
tablica.forEach(teb =>{
console.log(teb)
})
//filtrowanie
const zmienna = tablica.filter(item =>{
    if(item >= 10){
        return item
    }
})
//find - znajdowanie pierwszego elem wyst na tablicy

console.log(tablica,zmienna)



