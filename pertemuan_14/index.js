// Destrukturisasi Array
//
// let [variabel1, variabel2, variabel3] = namaArray;

let mhs = ["anggie", "valent", "pingkan"];

let [mhs1, mhs2, mhs3] = mhs;

console.log(mhs1); 
console.log(mhs2);
console.log(mhs3); 

//Menunggunakan koma kosong diantara element
let [namaDepan, , namaBelakang, , buku] = ["Valentine", "K", "Lumingkewas", "pengarang", "Harry Potter"];

console.log(namaDepan); 
console.log(namaBelakang);
console.log(buku);

//contoh
let a = 10;
let b = 15;

[a,b] = [b,a];


//Destrukturisasi Objek
//variabel baru untuk destrukturisasi sama dengan nama properti pada objek yang akan didestrukturisasi
let orang = {
    nama: "Andre",
    umur: 18,
    sudahMenikah: false
  };
  
  let nama = orang.nama;
  let umur = orang.umur;
  let sudahMenikah = orang.sudahMenikah;
  
  console.log(nama);
  console.log(umur); 
  console.log(sudahMenikah); 

  //Hasilnya undefined 
//   let orang = {
//     nama: "Andre",
//     umur: 22,
//     sudahMenikah: false
//   };
  
//   // Destrukturisasi Objek
//   let { nama, umur, statusMenikah } = orang;
  
//   console.log(nama); 
//   console.log(umur); 
//   console.log(statusMenikah);
  

//Nama variabelnya berbeda dari nama properti bisa ditambahkan titik dua setelah nama properti dan diikuti nama variabel yang baru
// let {
//     namaProperti1: namaVariabelBaru1,
//     namaProperti2: namaVariabelBaru2
//   } = namaObjek;
//   Contoh:
//   let orang = {
//     name: "Andre",
//     age: 22,
//   };
  
  // buat variabel nama berisi nilai dari properti name pada orang
  // buat variabel age berisi nilai dari properti umur pada orang
//   let { name: nama, age: umur } = orang;
  
//   console.log(nama); 
//   console.log(umur); 
  
  //Destrukturisasi Objek Bertingkat
  let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
  };
  
  let {
    prestasi: { olahraga }
  } = murid;
  
  console.log(olahraga); 
  