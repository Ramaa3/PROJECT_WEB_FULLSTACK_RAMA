import { useState } from 'react';

const pages = [
  { label: 'Dashboard', file: 'index.html' },
  { label: 'Data Fasilitas', file: 'data-pltn.html' },
  { label: 'Pemantauan', file: 'pemantauan.html' },
  { label: 'Laporan', file: 'laporan.html' },
];

export default function App() {
  const [page, setPage] = useState('index.html');
  return (
    <main className="app-shell">

      <iframe
        key={page}
        className="page-frame"
        title={pages.find((item) => item.file === page)?.label ?? 'NucleoMonitor'}
        src={`/pages/${page}`}
      />
    </main>
  );
}
