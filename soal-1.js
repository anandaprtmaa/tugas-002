//2
const mahasiswa = {
    nama: "Ananda Pratama IB",
    nim: "02042111006",
    email: "anandapratama334@gmail.com"
}

// 3
let {nama, nim, email} = mahasiswa;

// 4
console.log(nama);
console.log(nim);
console.log(email);

// 5
let temanAn = ["Dimun", "Rey"];
let temanTapiMesra = ["Aliya", "Bunga"];
let temanTapiMenikah = ["Avita", "Dimas"];

// 6
console.log([...temanAn, ...temanTapiMesra, ...temanTapiMenikah]);