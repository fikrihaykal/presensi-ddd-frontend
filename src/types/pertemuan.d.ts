type StatusPertemuan = "belum-mulai" | "terlewat" | "berlangsung" | "selesai"

interface Pertemuan {
    id: string,
    deskripsi: string,
    hari: string,
    jam: string,
    lokasi: string,
    dosen: ?string,
    status: StatusPertemuan
}

export { Pertemuan, StatusPertemuan }