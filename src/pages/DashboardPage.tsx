import {
  House,
  PlusCircle,
  ClipboardList,
  User,
  LogOut,
  Bell,
  ChevronDown,
  Menu,
  Clock3,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";

// SIDEBAR (disalin dari ComplaintPage, menu "Dashboard" yang aktif)
function Sidebar() {
  const menus = [
    { name: "Dashboard", icon: House, active: true },
    { name: "Buat Pengaduan", icon: PlusCircle },
    { name: "Riwayat", icon: ClipboardList },
    { name: "Profil", icon: User },
    { name: "Logout", icon: LogOut },
  ];

  return (
    <aside className="relative flex w-full flex-col overflow-hidden bg-[#004735] text-white md:w-[230px] md:shrink-0">
      <div className="border-b border-white/10 px-6 py-7 text-center">
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20 text-3xl">
          🌿
        </div>

        <h1 className="text-2xl font-bold">LaporDesa</h1>

        <p className="text-xs text-emerald-100">
          Suara Warga, Desa Maju
        </p>
      </div>

      <nav className="flex flex-row gap-2 overflow-x-auto p-3 md:flex-col md:py-6">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <button
              key={menu.name}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                menu.active
                  ? "bg-emerald-600 text-white"
                  : "text-emerald-50 hover:bg-white/10"
              }`}
            >
              <Icon size={20} />
              {menu.name}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto hidden h-48 items-end justify-center bg-gradient-to-t from-emerald-800 to-transparent md:flex">
        <div className="pb-5 text-7xl">🏡</div>
      </div>
    </aside>
  );
}

// HEADER (sama seperti ComplaintPage, ditambah ikon notifikasi lonceng)
function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-5 md:px-8">
      <button className="text-gray-600 md:hidden">
        <Menu />
      </button>

      <div className="ml-auto flex items-center gap-4">
        <button className="relative text-gray-500 transition hover:text-emerald-700">
          <Bell size={21} />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            2
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
            R
          </div>

          <span className="text-sm font-semibold text-gray-800">
            Ratmawati
          </span>

          <ChevronDown size={17} />
        </div>
      </div>
    </header>
  );
}

// DATA CONTOH STATUS PENGADUAN
const statusSteps = [
  { label: "Menunggu", value: 1, icon: Clock3, color: "orange" },
  { label: "Diproses", value: 1, icon: BadgeCheck, color: "blue" },
  { label: "Selesai", value: 0, icon: CheckCircle2, color: "green" },
];

const colorClasses: Record<string, string> = {
  orange: "bg-orange-100 text-orange-500",
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
};

// DATA CONTOH PENGADUAN TERBARU
const recentComplaints = [
  {
    title: "Jalan rusak di Dusun Maju",
    date: "28 Okt 2025",
    location: "Desa Sukamaju",
    status: "Diproses",
    image:
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=200&auto=format&fit=crop",
  },
];

const statusBadgeClasses: Record<string, string> = {
  Diproses: "bg-blue-100 text-blue-700",
  Menunggu: "bg-orange-100 text-orange-700",
  Selesai: "bg-green-100 text-green-700",
};

// WELCOME BANNER + TOTAL PENGADUAN
function WelcomeBanner() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
      <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-sm">
        <span className="text-3xl">👋</span>

        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Halo, Ratmawati!
          </h2>

          <p className="text-sm text-gray-500">
            Pantau laporan Anda di sini
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 rounded-2xl bg-emerald-600 px-6 py-5 text-white shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
          <CheckCircle2 size={22} />
        </div>

        <div>
          <p className="text-2xl font-extrabold leading-none">2</p>
          <p className="mt-1 text-xs text-emerald-50">Total Pengaduan</p>
        </div>
      </div>
    </div>
  );
}

// STATUS TRACKER
function StatusTracker() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm md:p-7">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-bold text-gray-900">Status Pengaduan Anda</h3>

        <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
          Lihat Semua →
        </button>
      </div>

      <div className="flex items-center justify-between">
        {statusSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.label} className="flex flex-1 items-center">
              <div className="flex flex-1 flex-col items-center text-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    colorClasses[step.color]
                  }`}
                >
                  <Icon size={22} />
                </div>

                <p className="mt-2 text-sm text-gray-500">{step.label}</p>
                <p className="text-xl font-extrabold text-gray-900">
                  {step.value}
                </p>
              </div>

              {index < statusSteps.length - 1 && (
                <div className="mx-1 mb-8 h-0.5 flex-1 bg-gray-200 sm:mx-2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// PENGADUAN TERBARU
function RecentComplaints() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm md:p-7">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-bold text-gray-900">Pengaduan Terbaru Anda</h3>

        <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
          Lihat Semua →
        </button>
      </div>

      <div className="space-y-3">
        {recentComplaints.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 rounded-xl border border-gray-100 p-3 transition hover:shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-14 w-14 shrink-0 rounded-lg object-cover"
            />

            <div className="min-w-0 flex-1">
              <h4 className="truncate font-semibold text-gray-900">
                {item.title}
              </h4>

              <p className="text-xs text-gray-500">
                {item.date} • {item.location}
              </p>
            </div>

            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                statusBadgeClasses[item.status]
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// MAIN DASHBOARD PAGE
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-100 p-3 md:p-5">

      <div className="mx-auto flex min-h-[calc(100vh-90px)] max-w-[1500px] flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-xl md:flex-row">
        <Sidebar />

        <main className="min-w-0 flex-1 bg-[#f8fafc]">
          <Header />

          <div className="space-y-5 px-4 pb-6 md:px-6">
            <WelcomeBanner />
            <StatusTracker />
            <RecentComplaints />
          </div>
        </main>
      </div>
    </div>
  );
}