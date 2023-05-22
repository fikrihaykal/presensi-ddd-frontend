import { Kelas } from "@/types/kelas"
import { Pertemuan } from "@/types/pertemuan"
import { Presensi } from "@/types/presensi"

const daftarKelas: Array<Kelas> = [
    {
        id: "IF184301",
        nama: "Pemrograman Berbasis Web",
        hari: "Selasa",
        jam: "13.30 - 16.20",
        lokasi: "TIF 104"
    },
    {
        id: "IT184974",
        nama: "Interaksi Manusia dan Komputer",
        hari: "Kamis",
        jam: "07.30 - 10.00",
        lokasi: "IT 601"
    },
    {
        id: "IF184402",
        nama: "Pemrograman Berorientasi Objek",
        hari: "Jumat",
        jam: "13.30 - 16.20",
        lokasi: "TIF 203"
    },
]

const kolomPertemuan: Array<string> = [
    "Pertemuan",
    "Waktu & Tempat",
    "Dosen",
    "Aksi"
]

const daftarPertemuan: Array<Pertemuan> = [
    {
        "id": "1",
        "deskripsi": "Pengenalan konsep dasar OOP",
        "hari": "Senin",
        "jam": "08.00 - 10.50",
        "lokasi": "TIF 201",
        "dosen": "Rizky Januar Akbar",
        "status": "selesai"
    },
    {
        "id": "2",
        "deskripsi": "Penerapan OOP dengan bahasa Java",
        "hari": "Selasa",
        "jam": "13.30 - 16.20",
        "lokasi": "TIF 104",
        "dosen": "Rizky Januar Akbar",
        "status": "selesai"
    },
    {
        "id": "3",
        "deskripsi": "Inheritance dan Polymorphism",
        "hari": "Rabu",
        "jam": "10.00 - 12.50",
        "lokasi": "TIF 306",
        "dosen": "Rizky Januar Akbar",
        "status": "selesai"
    },
    {
        "id": "4",
        "deskripsi": "Exception Handling",
        "hari": "Kamis",
        "jam": "14.00 - 16.50",
        "lokasi": "TIF 403",
        "dosen": "Rizky Januar Akbar",
        "status": "selesai"
    },
    {
        "id": "5",
        "deskripsi": "Abstraction dan Encapsulation",
        "hari": "Jumat",
        "jam": "09.30 - 12.20",
        "lokasi": "TIF 105",
        "dosen": null,
        "status": "terlewat"
    },
    {
        "id": "6",
        "deskripsi": "GUI Development",
        "hari": "Senin",
        "jam": "13.00 - 15.50",
        "lokasi": "TIF 306",
        "dosen": null,
        "status": "terlewat"
    },
    {
        "id": "7",
        "deskripsi": "File Handling",
        "hari": "Selasa",
        "jam": "10.00 - 12.50",
        "lokasi": "TIF 403",
        "dosen": null,
        "status": "berlangsung"
    },
    {
        "id": "8",
        "deskripsi": "Database Integration",
        "hari": "Rabu",
        "jam": "08.30 - 11.20",
        "lokasi": "TIF 201",
        "dosen": null,
        "status": "belum-mulai"
    }
]

const kolomPresensi: Array<string> = [
    "NRP & Nama",
    "Presensi",
    "Aksi"
]

const daftarPresensi: Array<Presensi> = [
    {
        "id": "12345678901234",
        "nama": "Bambang Suprapto",
        "status": 3
    },
    {
        "id": "12345678904321",
        "nama": "Siti Rahayu",
        "status": 4
    },
    {
        "id": "12345678907654",
        "nama": "Andi Santoso",
        "status": 1
    },
    {
        "id": "12345678909876",
        "nama": "Rina Anggraini",
        "status": 2
    },
    {
        "id": "12345678901234",
        "nama": "Eko Prasetyo",
        "status": 1
    },
    {
        "id": "12345678904321",
        "nama": "Dewi Lestari",
        "status": 4
    },
    {
        "id": "12345678907654",
        "nama": "Rudi Hidayat",
        "status": 2
    },
    {
        "id": "12345678909876",
        "nama": "Lina Susanti",
        "status": 3
    },
    {
        "id": "12345678901234",
        "nama": "Agus Wahyudi",
        "status": 1
    },
    {
        "id": "12345678904321",
        "nama": "Maya Puspitasari",
        "status": 2
    },
    {
        "id": "12345678907654",
        "nama": "Hendrik Wijaya",
        "status": 4
    },
    {
        "id": "12345678909876",
        "nama": "Fitriani Indah",
        "status": 3
    },
    {
        "id": "12345678901234",
        "nama": "Budi Susilo",
        "status": 1
    },
    {
        "id": "12345678904321",
        "nama": "Rita Wulandari",
        "status": 3
    },
    {
        "id": "12345678907654",
        "nama": "Hendro Nugroho",
        "status": 2
    },
    {
        "id": "12345678909876",
        "nama": "Dini Setiawan",
        "status": 4
    }
]


export {
    daftarKelas,
    kolomPertemuan,
    daftarPertemuan,
    kolomPresensi,
    daftarPresensi
}