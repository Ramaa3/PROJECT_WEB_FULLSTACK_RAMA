// Data simulasi bersama.
window.NucleoData = {
  facilities: [
    { id: "SEN-001", name: "Fasilitas PLTN A", location: "Lokasi A", capacity: "850 MW", status: "Beroperasi" },
    { id: "SEN-002", name: "Fasilitas PLTN B", location: "Lokasi B", capacity: "1.000 MW", status: "Pemeliharaan" },
    { id: "SEN-003", name: "Fasilitas PLTN C", location: "Lokasi C", capacity: "750 MW", status: "Tidak Aktif" }
  ],
  monitoring: [
    { id: "ENV-001", type: "Udara", parameter: "PM2.5", value: "12 µg/m³", activity: "Pemantauan partikulat udara" },
    { id: "ENV-002", type: "Air", parameter: "pH air", value: "7,2", activity: "Pemantauan kualitas air" },
    { id: "ENV-003", type: "Tanah", parameter: "pH tanah", value: "6,5", activity: "Pemantauan kondisi tanah" }
  ],
  reports: [
    { id: "LAP-001", category: "Kualitas Udara", date: "27 September 2026", status: "Ditinjau", description: "Laporan simulasi kualitas udara." },
    { id: "LAP-002", category: "Kualitas Air", date: "28 September 2026", status: "Ditinjau", description: "Laporan simulasi kualitas air." },
    { id: "LAP-003", category: "Kualitas Tanah", date: "29 September 2026", status: "Menunggu Tinjauan", description: "Laporan simulasi kondisi tanah." }
  ]
};
