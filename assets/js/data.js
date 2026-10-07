const portfolioData = {
  skills: [
    {
      category: 'Web Development',
      items: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'Vanilla JavaScript', 'MVC Architecture', 'RBAC']
    },
    {
      category: 'Database & Backend',
      items: ['MySQL', 'InnoDB', 'ERD', 'Database Design', 'Session Management', 'Apache', 'XAMPP', 'phpMyAdmin']
    },
    {
      category: 'Embedded System',
      items: ['Arduino Uno', 'Digital Input/Output', 'Sensor', 'Actuator', 'Microcontroller Programming']
    },
    {
      category: 'Networking & Deployment',
      items: ['LAN', 'TCP/IP', 'IPv4', 'Subnetting', 'Network Topology', 'cPanel', 'Domain Management', 'Web Hosting']
    }
  ],

  projects: [
    {
      title: 'Rancang Bangun Aplikasi Presensi Siswa Berbasis Web dengan Fitur Akses untuk Orang Tua (Studi Kasus SMPN 9 Mandau)',
      category: 'FLAGSHIP PROJECT · TUGAS AKHIR',
      description:
        'Merancang dan membangun aplikasi presensi siswa berbasis web yang mengintegrasikan pengelolaan data siswa, guru, kelas, mata pelajaran, pencatatan kehadiran, rekapitulasi, pelaporan, serta portal monitoring bagi orang tua.',
      image: 'assets/images/presensi-preview.png',
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Apache', 'XAMPP', 'PhpSpreadsheet'],
      metrics: ['416 siswa', 'Black-Box Testing: 100% lulus', 'UAT Guru: 5.00 / 5.00', 'Usability Orang Tua: 93.8%'],
      links: {
        live: 'https://smpn9mandau.site/',
        github: 'https://github.com/MAHL217T/presensi'
      },
      featured: true,
      location: 'SMP Negeri 9 Mandau'
    },
    {
      title: 'Sistem Presensi & Manajemen Asistensi Praktikum Jurusan Teknik Elektro',
      category: 'ACADEMIC SYSTEM',
      description:
        'Membangun sistem portal asistensi dan pencatatan presensi praktikum daring bagi mahasiswa dan asisten laboratorium untuk mendukung pengelolaan kehadiran, tugas, dan riwayat kegiatan praktikum.',
      image: 'assets/images/PraktikumTE.png',
      tech: ['Web Development', 'Python', 'Relational Database', 'Academic Workflow'],
      metrics: ['Digital attendance', 'Assignment tracking', 'Report archiving', 'Meeting history'],
      links: {
        live: '#',
        github: 'https://github.com/MAHL217T/PraktikumTE'
      },
      featured: false,
      location: 'Academic project'
    }
  ],

  experiences: [
    {
      period: '2024 — 2025',
      role: 'Asisten Dosen — Praktikum Jaringan Komputer',
      institution: 'Laboratorium Teknik Elektro, UIN Sultan Syarif Kasim Riau',
      description:
        'Mendampingi mahasiswa dalam pelaksanaan praktikum jaringan komputer, meliputi implementasi topologi jaringan, konfigurasi alamat IPv4 dan subnetting, perakitan kabel jaringan, serta pengujian konektivitas perangkat.',
      skills: ['IPv4', 'Subnetting', 'LAN', 'Network Topology', 'Crimping', 'Troubleshooting']
    }
  ],

  education: [
    {
      period: '2021 — 2026',
      title: 'S1 Teknik Elektro — Konsentrasi Komputer',
      institution: 'Fakultas Sains dan Teknologi\nUIN Sultan Syarif Kasim Riau',
      description:
        'Mempelajari arsitektur komputer, pemrograman, sistem digital, jaringan komputer, sistem tertanam, otomasi, basis data, serta pengembangan perangkat lunak.',
      project: 'Tugas Akhir: Rancang Bangun Aplikasi Presensi Siswa Berbasis Web dengan Fitur Akses untuk Orang Tua (Studi Kasus SMPN 9 Mandau)'
    }
  ],

  certifications: [
    {
      title: 'Nakamate: School in The Cloud — Online Mentoring Program',
      issuer: 'Tokopedia × Zenius Education',
      date: '27 Februari 2021',
      image: 'assets/images/sertifikat nakamate.png',
      credential:
        'Sertifikat partisipasi sebagai peserta dalam program mentoring online Nakamate: School in The Cloud. Program ini menjadi bagian dari kegiatan pengembangan pembelajaran dan pengalaman belajar secara daring.'
    },
    {
      title: 'Kuliah Umum Fakultas Sains dan Teknologi UIN Suska Riau TA 2021/2022',
      issuer: 'Fakultas Sains dan Teknologi, UIN Sultan Syarif Kasim Riau',
      date: '16 September 2021',
      image: 'assets/images/sertifikat-kuliah-umum.png',
      credential:
        'Sertifikat partisipasi sebagai peserta dalam Kuliah Umum Fakultas Sains dan Teknologi UIN Suska Riau TA 2021/2022. Program ini membahas wawasan strategis mengenai perkembangan digitalisasi menuju era Industri 5.0, serta eksplorasi peluang dan tantangan dunia kerja di era ekonomi digital.'
    }
  ]
};

// ===============================
// UPDATE YOUR PROJECTS HERE
// ===============================
