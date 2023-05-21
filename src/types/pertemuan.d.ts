interface Pertemuan {
    id: string,
    deskripsi: string,
    hari: string,
    jam: string,
    lokasi: string,
    dosen: ?string,
    status: number
}

export { Pertemuan }