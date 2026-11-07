import { useState, type FormEvent } from "react";
import {
  Leaf,
  Menu,
  X,
  Megaphone,
  Play,
  ClipboardList,
  Landmark,
  CheckCircle2,
  Clock3,
  Zap,
  ShieldCheck,
  Smartphone,
  Users,
  ArrowRight,
  MapPin,
  FileText,
  Camera,
  UserPlus,
  LogIn,
  HeartHandshake,
  Eye,
  Lock,
  Mail,
  User,
  Phone,
  BookOpen,
  Home,
  Newspaper,
} from "lucide-react";

import ComplaintPage from "./pages/ComplaintPage";
import DashboardPage from "./pages/DashboardPage";

// DATA STATISTIK
const statistics = [
  { icon: ClipboardList, value: "156+", label: "Total Pengaduan" },
  { icon: Landmark, value: "48+", label: "Desa Terdaftar" },
  { icon: CheckCircle2, value: "92%", label: "Tingkat Penyelesaian" },
  { icon: Clock3, value: "24 Jam", label: "Layanan Online" },
];

// DATA KEUNGGULAN
const features = [
  {
    icon: Zap,
    title: "Mudah & Cepat",
    description: "Laporkan permasalahan desa dengan beberapa klik saja.",
  },
  {
    icon: ShieldCheck,
    title: "Transparan",
    description: "Pantau perkembangan laporan secara terbuka.",
  },
  {
    icon: Smartphone,
    title: "Responsif",
    description: "Akses layanan melalui komputer maupun smartphone.",
  },
  {
    icon: Users,
    title: "Untuk Semua",
    description: "Dapat digunakan oleh seluruh masyarakat desa.",
  },
];

// DATA LAYANAN
const services = [
  {
    icon: Landmark,
    title: "Infrastruktur",
    description: "Jalan rusak, jembatan, drainase, dan fasilitas umum.",
  },
  {
    icon: Leaf,
    title: "Lingkungan",
    description: "Sampah, pencemaran, kebersihan, dan lingkungan desa.",
  },
  {
    icon: HeartHandshake,
    title: "Pelayanan Publik",
    description: "Pelayanan administrasi dan fasilitas masyarakat.",
  },
  {
    icon: Users,
    title: "Sosial",
    description: "Permasalahan sosial dan kebutuhan masyarakat.",
  },
];

// DATA PANDUAN
const guides = [
  {
    number: "01",
    icon: UserPlus,
    title: "Daftar Akun",
    description: "Buat akun menggunakan nama, email, dan data diri.",
  },
  {
    number: "02",
    icon: LogIn,
    title: "Login",
    description: "Masuk menggunakan akun yang telah didaftarkan.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Buat Pengaduan",
    description: "Pilih kategori dan tuliskan permasalahan secara jelas.",
  },
  {
    number: "04",
    icon: Camera,
    title: "Lampirkan Bukti",
    description: "Tambahkan foto dan lokasi untuk memperjelas laporan.",
  },
  {
    number: "05",
    icon: Eye,
    title: "Pantau Laporan",
    description: "Periksa perkembangan pengaduan melalui riwayat.",
  },
];

// DATA BERITA CONTOH
const news = [
  {
    category: "Infrastruktur",
    date: "Informasi Desa",
    title: "Peningkatan Infrastruktur untuk Kenyamanan Masyarakat",
    description:
      "Pembangunan dan perbaikan fasilitas umum menjadi salah satu upaya meningkatkan kualitas kehidupan masyarakat desa.",
    icon: Landmark,
  },
  {
    category: "Lingkungan",
    date: "Informasi Desa",
    title: "Membangun Kesadaran Masyarakat Menjaga Lingkungan",
    description:
      "Partisipasi warga dalam menjaga kebersihan lingkungan menjadi langkah penting menciptakan desa yang sehat.",
    icon: Leaf,
  },
  {
    category: "Pelayanan Publik",
    date: "Informasi Desa",
    title: "Mendorong Pelayanan Publik yang Lebih Transparan",
    description:
      "Pemanfaatan teknologi informasi membantu masyarakat menyampaikan aspirasi dan memantau pelayanan desa.",
    icon: HeartHandshake,
  },
];

// NAVBAR
function Navbar({
  onLogin,
  onRegister,
}: {
  onLogin: () => void;
  onRegister: () => void;
  onComplaint: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menus = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang", href: "#tentang" },
    { name: "Layanan", href: "#layanan" },
    { name: "Panduan", href: "#panduan" },
    { name: "Berita", href: "#berita" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white px-6 py-4 shadow-sm md:px-12">
      <div className="flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-3">
          <div className="rounded-full bg-green-100 p-2">
            <Leaf className="h-8 w-8 text-green-700" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">LaporDesa</h2>
            <p className="text-xs text-gray-600">Suara Masyarakat Desa</p>
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {menus.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold transition hover:text-green-700 ${
                index === 0 ? "text-green-700" : "text-gray-700"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={onLogin}
            className="rounded-full border border-gray-200 px-6 py-2 text-sm font-semibold transition hover:bg-gray-50"
          >
            Login
          </button>

          <button
            onClick={onRegister}
            className="rounded-full bg-green-700 px-6 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Daftar
          </button>
        </div>

        <button
          className="text-gray-700 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Buka menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mt-4 space-y-2 border-t pt-4 md:hidden">
          {menus.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-green-50"
            >
              {item.name}
            </a>
          ))}

          <div className="flex gap-2 pt-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onLogin();
              }}
              className="flex-1 rounded-lg border py-2 text-sm font-semibold"
            >
              Login
            </button>

            <button
              onClick={() => {
                setMobileOpen(false);
                onRegister();
              }}
              className="flex-1 rounded-lg bg-green-700 py-2 text-sm font-semibold text-white"
            >
              Daftar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// HERO - VIDEO BACKGROUND
function Hero({ onComplaint }: { onComplaint: () => void }) {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[650px] items-center overflow-hidden bg-green-950 md:min-h-[700px]"
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/desa.mp4" type="video/mp4" />
        Browser Anda tidak mendukung pemutaran video.
      </video>

      {/* OVERLAY VIDEO */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f0faf3]/95 via-[#f0faf3]/80 to-[#f0faf3]/20"></div>

      {/* KONTEN HERO */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-20 md:px-14">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-700/20 bg-white/70 px-4 py-2 text-sm font-semibold text-green-800 backdrop-blur-sm">
            <Megaphone size={17} />
            Suara Masyarakat Desa 
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-green-950 md:text-6xl">
            Sampaikan Aspirasi,
            <span className="block text-green-700">
              Wujudkan Desa Lebih Baik
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-700 md:text-lg">
            LaporDesa hadir sebagai platform digital yang memudahkan
            masyarakat untuk menyampaikan pengaduan dan aspirasi.
            Bersama, kita wujudkan pelayanan desa yang lebih transparan,
            responsif, dan berkualitas.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={onComplaint}
              className="flex items-center gap-2 rounded-full bg-green-700 px-7 py-3.5 font-bold text-white shadow-lg transition hover:bg-green-800"
            >
              <Megaphone size={19} />
              Buat Pengaduan
              <ArrowRight size={18} />
            </button>

            <a
              href="#panduan"
              className="flex items-center gap-2 rounded-full border-2 border-green-800 bg-white/70 px-7 py-3.5 font-bold text-green-900 backdrop-blur-sm transition hover:bg-green-100"
            >
              <Play size={18} />
              Lihat Panduan
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-medium text-green-950">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={19} className="text-green-700" />
              Mudah Digunakan
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={19} className="text-green-700" />
              Transparan
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={19} className="text-green-700" />
              Layanan 24 Jam
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// STATISTICS
function Statistics() {
  return (
    <section className="relative z-10 -mt-7 px-6 md:px-14">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-2xl border border-green-50 bg-white p-5 shadow-md"
            >
              <div className="rounded-full bg-green-100 p-3">
                <Icon className="h-7 w-7 text-green-700" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// TENTANG
function About() {
  return (
    <section id="tentang" className="scroll-mt-24 px-6 py-20 md:px-14">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-green-700">
            Tentang LaporDesa
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            Suara Masyarakat, Awal Perubahan Desa
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            LaporDesa merupakan platform digital yang dirancang
            untuk memudahkan masyarakat dalam menyampaikan
            pengaduan, aspirasi, dan permasalahan yang terjadi
            di lingkungan desa.
          </p>

          <p className="mt-3 leading-8 text-gray-600">
            Melalui sistem ini, masyarakat dapat menyampaikan
            laporan secara lebih mudah dan memantau perkembangan
            penanganannya secara transparan.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="rounded-full bg-green-100 p-3">
              <HeartHandshake className="text-green-700" />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Bersama Membangun Desa
              </h3>
              <p className="text-sm text-gray-500">
                Partisipasi warga untuk kemajuan bersama.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-green-50 p-8 md:p-12">
          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Leaf size={34} className="text-green-700" />
            </div>

            <h3 className="text-2xl font-bold text-green-950">
              Tujuan Kami
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Menciptakan pelayanan masyarakat yang lebih
              responsif, terbuka, dan melibatkan partisipasi
              aktif warga dalam pembangunan desa.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Memudahkan penyampaian aspirasi",
                "Meningkatkan transparansi pelayanan",
                "Mendorong penyelesaian masalah desa",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <CheckCircle2 size={18} className="text-green-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FEATURES
function Features() {
  return (
    <section className="bg-[#F3F9F5] px-6 py-16 md:px-14">
      <h2 className="mb-3 text-center text-2xl font-extrabold text-gray-900 md:text-3xl">
        Mengapa Memilih LaporDesa?
      </h2>

      <p className="mx-auto mb-10 max-w-xl text-center text-sm leading-6 text-gray-600">
        Kami menyediakan kemudahan bagi masyarakat untuk
        menyampaikan aspirasi dan mendapatkan pelayanan.
      </p>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Icon className="h-8 w-8 text-green-700" />
              </div>

              <h3 className="font-bold text-gray-900">{item.title}</h3>

              <p className="mx-auto mt-2 max-w-[220px] text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// LAYANAN
function Services({ onComplaint }: { onComplaint: () => void }) {
  return (
    <section id="layanan" className="scroll-mt-24 px-6 py-20 md:px-14">
      <div className="mb-10 text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-green-700">
          Layanan Kami
        </span>

        <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
          Sampaikan Pengaduan Anda
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
          Pilih kategori pengaduan sesuai permasalahan yang
          Anda temukan di lingkungan desa.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 transition group-hover:bg-green-700">
                <Icon
                  className="text-green-700 group-hover:text-white"
                  size={28}
                />
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.description}
              </p>

              <button
                onClick={onComplaint}
                className="mt-5 flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-900"
              >
                Buat Laporan
                <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// PANDUAN
function Guide({ onRegister }: { onRegister: () => void }) {
  return (
    <section
      id="panduan"
      className="scroll-mt-24 bg-[#F3F9F5] px-6 py-20 md:px-14"
    >
      <div className="mb-12 text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-green-700">
          Panduan Penggunaan
        </span>

        <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
          Bagaimana Cara Menggunakan LaporDesa?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
          Ikuti langkah-langkah berikut untuk menyampaikan
          pengaduan melalui platform LaporDesa.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {guides.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.number}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-3xl font-extrabold text-green-200">
                  {item.number}
                </span>

                <div className="rounded-xl bg-green-100 p-3">
                  <Icon className="text-green-700" size={25} />
                </div>
              </div>

              <h3 className="font-bold text-gray-900">{item.title}</h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl bg-green-800 px-6 py-8 text-center text-white md:px-12">
        <BookOpen size={34} className="mx-auto mb-3" />

        <h3 className="text-2xl font-bold">
          Siap Menyampaikan Aspirasi?
        </h3>

        <p className="mt-2 text-sm text-green-100">
          Daftarkan akun Anda dan mulai gunakan layanan LaporDesa.
        </p>

        <button
          onClick={onRegister}
          className="mt-6 rounded-full bg-white px-7 py-3 text-sm font-bold text-green-800 transition hover:bg-green-100"
        >
          Daftar Sekarang
        </button>
      </div>
    </section>
  );
}

// BERITA
function News() {
  return (
    <section id="berita" className="scroll-mt-24 px-6 py-20 md:px-14">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-green-700">
            Informasi
          </span>

          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            Berita dan Informasi
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Informasi seputar pelayanan dan pembangunan desa.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-green-700">
          <Newspaper size={19} />
          Informasi LaporDesa
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {news.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-48 items-center justify-center bg-green-50">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <Icon size={42} className="text-green-700" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                    {item.category}
                  </span>

                  <span className="text-xs text-gray-400">
                    {item.date}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold leading-7 text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-gray-400">
        Konten di atas merupakan contoh informasi untuk tampilan awal.
      </p>
    </section>
  );
}

// FOOTER
function Footer() {
  return (
    <footer className="bg-[#004735] px-6 py-12 text-white md:px-14">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Leaf size={30} />
            <h2 className="text-2xl font-bold">LaporDesa</h2>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-7 text-green-100">
            Platform pengaduan masyarakat untuk mewujudkan
            pelayanan desa yang lebih baik, terbuka, dan responsif.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Navigasi</h3>

          <div className="space-y-3 text-sm text-green-100">
            <a href="#beranda" className="block hover:text-white">Beranda</a>
            <a href="#tentang" className="block hover:text-white">Tentang</a>
            <a href="#layanan" className="block hover:text-white">Layanan</a>
            <a href="#panduan" className="block hover:text-white">Panduan</a>
            <a href="#berita" className="block hover:text-white">Berita</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Informasi Layanan</h3>

          <div className="space-y-3 text-sm text-green-100">
            <p className="flex items-center gap-2">
              <Clock3 size={17} />
              Layanan Online 24 Jam
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={17} />
              Pelayanan Masyarakat Desa
            </p>
            <p className="flex items-center gap-2">
              <Mail size={17} />
              Informasi dan Pengaduan
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-green-100">
        © 2026 LaporDesa. Suara Masyarakat Desa .
      </div>
    </footer>
  );
}


// LOGIN DAN REGISTER - GLASSMORPHISM VIDEO BACKGROUND
function AuthModal({
  mode,
  onClose,
  onChangeMode,
  onLoginSuccess,
}: {
  mode: "login" | "register";
  onClose: () => void;
  onChangeMode: (mode: "login" | "register") => void;
  onLoginSuccess: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mode === "login") {
      onLoginSuccess();
      return;
    }

    alert(
      "Form pendaftaran berhasil diisi. Integrasi penyimpanan akun belum tersedia."
    );
  };

  return (
    <div className="fixed inset-0 z-[100] min-h-screen overflow-y-auto bg-black">

      {/* ANIMATION */}
      <style>{`
        @keyframes authFade {
          from {
            opacity: 0;
            transform: translateY(25px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .auth-card {
          animation: authFade .6s cubic-bezier(.2,.8,.2,1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .auth-card {
            animation: none;
          }
        }
      `}</style>

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="fixed inset-0 h-full w-full object-cover"
      >
        <source src="/videos/desa.mp4" type="video/mp4" />
      </video>

      {/* DARK GREEN OVERLAY */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/75 via-[#003D2D]/70 to-black/80" />

      {/* LIGHT EFFECT */}
      <div className="pointer-events-none fixed -left-32 top-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px]" />
      <div className="pointer-events-none fixed -bottom-32 -right-20 h-96 w-96 rounded-full bg-green-300/20 blur-[120px]" />

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        aria-label="Kembali ke beranda"
        className="fixed right-4 top-4 z-30 flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-black/50 sm:right-7 sm:top-7"
      >
        <X size={18} />
        Kembali
      </button>

      {/* MAIN LAYOUT */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 sm:px-6 sm:py-16">

        {/* BRAND - OUTSIDE CARD */}
        <div className="mb-7 text-center text-white">

          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 shadow-xl backdrop-blur-xl">
            <Leaf size={35} className="text-emerald-300" />
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight">
            Lapor<span className="text-emerald-300">Desa</span>
          </h1>

          <p className="mt-2 text-sm text-white/80">
            Suara Masyarakat Desa
          </p>
        </div>

        {/* WHITE GLASS CARD */}
        <div className="auth-card w-full max-w-[480px] overflow-hidden rounded-[28px] border border-white/60 bg-white/90 shadow-2xl shadow-black/30 backdrop-blur-2xl">

          <div className="px-7 py-8 sm:px-10 sm:py-9">

            {/* HEADING */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#123B2D]">
                {mode === "login"
                  ? "Selamat Datang!"
                  : "Buat Akun Baru"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {mode === "login"
                  ? "Masuk ke akun Anda untuk melanjutkan."
                  : "Daftarkan diri dan mulai sampaikan aspirasi Anda."}
              </p>
            </div>

            {/* LOGIN REGISTER TAB */}
            <div className="mb-6 grid grid-cols-2 gap-1 rounded-xl bg-gray-100 p-1">

              <button
                type="button"
                onClick={() => {
                  setShowPassword(false);
                  onChangeMode("login");
                }}
                className={`rounded-lg py-3 text-sm font-semibold transition-all duration-300 ${
                  mode === "login"
                    ? "bg-emerald-700 text-white shadow-md"
                    : "text-gray-500 hover:text-emerald-800"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowPassword(false);
                  onChangeMode("register");
                }}
                className={`rounded-lg py-3 text-sm font-semibold transition-all duration-300 ${
                  mode === "register"
                    ? "bg-emerald-700 text-white shadow-md"
                    : "text-gray-500 hover:text-emerald-800"
                }`}
              >
                Daftar
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* FULL NAME */}
              {mode === "register" && (
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Nama Lengkap
                  </label>

                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition-all duration-300 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/10">
                    <User size={19} className="shrink-0 text-emerald-700" />

                    <input
                      required
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      autoComplete="name"
                      className="w-full bg-transparent py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>
              )}

              {/* PHONE */}
              {mode === "register" && (
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Nomor Telepon
                  </label>

                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition-all duration-300 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/10">
                    <Phone size={19} className="shrink-0 text-emerald-700" />

                    <input
                      required
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      autoComplete="tel"
                      className="w-full bg-transparent py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>
              )}

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition-all duration-300 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/10">
                  <Mail size={19} className="shrink-0 text-emerald-700" />

                  <input
                    required
                    type="email"
                    placeholder="nama@email.com"
                    autoComplete="email"
                    className="w-full bg-transparent py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition-all duration-300 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/10">
                  <Lock size={19} className="shrink-0 text-emerald-700" />

                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    minLength={6}
                    placeholder="Masukkan password"
                    autoComplete={
                      mode === "login"
                        ? "current-password"
                        : "new-password"
                    }
                    className="w-full bg-transparent py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="shrink-0 text-gray-400 transition hover:text-emerald-700"
                    aria-label={
                      showPassword
                        ? "Sembunyikan password"
                        : "Tampilkan password"
                    }
                  >
                    <Eye size={19} />
                  </button>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 py-3.5 font-bold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl active:translate-y-0"
              >
                {mode === "login" ? (
                  <>
                    <LogIn size={19} />
                    Masuk ke Akun
                  </>
                ) : (
                  <>
                    <UserPlus size={19} />
                    Daftar Sekarang
                  </>
                )}

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* SWITCH AUTH MODE */}
            <div className="mt-6 border-t border-gray-200 pt-5 text-center text-sm text-gray-600">
              {mode === "login" ? (
                <>
                  Belum memiliki akun?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword(false);
                      onChangeMode("register");
                    }}
                    className="font-bold text-emerald-700 transition hover:text-emerald-900 hover:underline"
                  >
                    Daftar sekarang
                  </button>
                </>
              ) : (
                <>
                  Sudah memiliki akun?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword(false);
                      onChangeMode("login");
                    }}
                    className="font-bold text-emerald-700 transition hover:text-emerald-900 hover:underline"
                  >
                    Login di sini
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <p className="mt-6 text-center text-xs text-white/70">
          © 2026 LaporDesa. Suara Masyarakat Desa.
        </p>
      </div>
    </div>
  );
}


// MAIN APP
export default function App() {
  const [authMode, setAuthMode] = useState<"login" | "register" | null>(null);
  const [showComplaint, setShowComplaint] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const openComplaint = () => {
    setShowComplaint(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeComplaint = () => {
    setShowComplaint(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openDashboard = () => {
    setShowDashboard(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeDashboard = () => {
    setShowDashboard(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showDashboard) {
    return (
      <div>
        <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-5 py-3 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-green-800">
            <Leaf size={23} />
            LaporDesa
          </div>

          <button
            onClick={closeDashboard}
            className="flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
          >
            <Home size={17} />
            Kembali ke Beranda
          </button>
        </div>

        <DashboardPage />
      </div>
    );
  }

  if (showComplaint) {
    return (
      <div>
        <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-5 py-3 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-green-800">
            <Leaf size={23} />
            LaporDesa
          </div>

          <button
            onClick={closeComplaint}
            className="flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
          >
            <Home size={17} />
            Kembali ke Beranda
          </button>
        </div>

        <ComplaintPage />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1440px] overflow-hidden bg-white shadow-xl">
        <Navbar
          onLogin={() => setAuthMode("login")}
          onRegister={() => setAuthMode("register")}
          onComplaint={openComplaint}
        />

        <Hero onComplaint={openComplaint} />

        <Statistics />

        <About />

        <Features />

        <Services onComplaint={openComplaint} />

        <Guide onRegister={() => setAuthMode("register")} />

        <News />

        <Footer />
      </div>

      {authMode && (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onChangeMode={setAuthMode}
          onLoginSuccess={() => {
            setAuthMode(null);
            openDashboard();
          }}
        />
      )}
    </main>
  );
}