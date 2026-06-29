// =======================
// DATA MOBIL SPORT
// =======================

const cars = [
    {
        nama: "Ferrari SF90",
        merek: "Ferrari",
        hp: 986,
        speed: 340,
        harga: "Rp18 Miliar"
    },
    {
        nama: "Lamborghini Aventador",
        merek: "Lamborghini",
        hp: 770,
        speed: 350,
        harga: "Rp14 Miliar"
    },
    {
        nama: "McLaren 720S",
        merek: "McLaren",
        hp: 710,
        speed: 341,
        harga: "Rp6 Miliar"
    },
    {
        nama: "Porsche 911 GT3 RS",
        merek: "Porsche",
        hp: 525,
        speed: 296,
        harga: "Rp5 Miliar"
    },
    {
        nama: "Nissan GT-R R35",
        merek: "Nissan",
        hp: 565,
        speed: 315,
        harga: "Rp3 Miliar"
    }
];

// =======================
// AMBIL DROPDOWN
// =======================

const selects = document.querySelectorAll("select");

const mobilA = selects[0];
const mobilB = selects[1];

// =======================
// ISI DROPDOWN
// =======================

function loadMobil() {

    cars.forEach(car => {

        mobilA.innerHTML += `
            <option value="${car.nama}">
                ${car.nama}
            </option>
        `;

        mobilB.innerHTML += `
            <option value="${car.nama}">
                ${car.nama}
            </option>
        `;

    });

}

loadMobil();

// =======================
// MENAMPILKAN DETAIL
// =======================

function cariMobil(nama){

    return cars.find(car=>car.nama===nama);

}

// =======================
// SAAT PILIH MOBIL
// =======================

mobilA.addEventListener("change",()=>{

    const data = cariMobil(mobilA.value);

    console.log(data);

});

mobilB.addEventListener("change",()=>{

    const data = cariMobil(mobilB.value);

    console.log(data);

});

// =======================
// TAG KEBUTUHAN
// =======================

const tags = document.querySelectorAll(".tags span");

const input = document.querySelector("input");

tags.forEach(tag=>{

    tag.addEventListener("click",()=>{

        input.value = tag.textContent.replace(/[^\w\s]/gi,'');

    });

});