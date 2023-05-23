const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

// 2A
const gabung = () => console.log([...hewanBuas, ...hewanJinak]);

// 2B
const makananKesukaan = () =>{
    let Pelet, kangkung, pur;
    [ikan, wortel, beras] = hewanJinak;
    console.log("Pelet dimakan " + ikan);
    console.log("Kangkung dimakan " + kangung);
    console.log("Pur dimakan " + pur);
}

// 3
makananKesukaan();
const tampil = new Promise(() => {
    setTimeout(gabung, 5000);
});