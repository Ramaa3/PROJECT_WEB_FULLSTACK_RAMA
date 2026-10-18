
window.NucleoData = {
    facilities: [
        {
            id: "SEN-001",
            name: "Fasilitas A",
            status: "Beroperasi (simulasi)",
            capacity: "850 MW"
        },
        {
            id: "SEN-002",
            name: "Fasilitas B",
            status: "Pemeliharaan (simulasi)",
            capacity: "700 MW"
        },
        {
            id: "SEN-003",
            name: "Fasilitas C",
            status: "Siaga (simulasi)",
            capacity: "600 MW"
        }
    ],

    monitoring: [
        {
            id: "ENV-001",
            type: "Udara",
            value: "12 µg/m³",
            status: "Normal (simulasi)"
        },
        {
            id: "ENV-002",
            type: "Air",
            value: "pH 7.2",
            status: "Normal (simulasi)"
        },
        {
            id: "ENV-003",
            type: "Tanah",
            value: "pH 6.5",
            status: "Normal (simulasi)"
        }
    ],

    reports: [
        {
            id: "LAP-001",
            title: "Pemeriksaan fasilitas",
            category: "Fasilitas",
            status: "Selesai"
        },
        {
            id: "LAP-002",
            title: "Pemeriksaan data lingkungan",
            category: "Lingkungan",
            status: "Diproses"
        }
    ]
};
