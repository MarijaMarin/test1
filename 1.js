//zadatak 1
let kolicina = 9;
let cenaPoKomadu = 180;
let godine = 33;
let popust1 = cenaPoKomadu / 100 * 15;
let popust2 = cenaPoKomadu / 100 * 25;

if (godine >= 18) {
	console.log(` Vas racun je: ${kolicina * cenaPoKomadu}`);
}
if (godine % 7 === 0) {
	console.log(`Sa popustom cena je: ${kolicina * cenaPoKomadu - popust1}`);
}
if (godine % 11 === 0) {
	console.log(`Sa popustom cena je ${kolicina * cenaPoKomadu - popust2}`);
} else {
	console.log(`Imate manje od 18 godina`);
}
