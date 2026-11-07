import {
  House,
  Building2,
  Users,
  FileCheck2,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  Menu,
  ClipboardList,
  CheckCircle2,
  Clock3,
  Crown,
} from "lucide-react";

// SIDEBAR
function Sidebar() {
  const menus = [
    { name: "Dashboard", icon: House, active: true },
    { name: "Kelola Desa", icon: Building2 },
    { name: "Kelola Admin", icon: Users },
    { name: "Kelola Pengaduan", icon: FileCheck2 },
    { name: "Laporan Global", icon: BarChart3 },
    { name: "Pengaturan", icon: Settings },
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

// HEADER
function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-5 md:px-8">
      <button className="text-gray-600 md:hidden">
        <Menu />
      </button>

      <div className="hidden items-center gap-2 text-sm font-semibold text-amber-600 md:flex">
        <Crown size={18} />
        Super Admin Mode
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button className="relative text-gray-500 transition hover:text-emerald-700">
          <Bell size={21} />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            9
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">
            S
          </div>

          <span className="text-sm font-semibold text-gray-800">
            Super Admin
          </span>

          <ChevronDown size={17} />
        </div>
      </div>
    </header>
  );
}

// DATA STAT CARDS
const statCards = [
  {
    label: "Total Desa",
    value: 12,
    icon: Building2,
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    label: "Total Pengaduan",
    value: 248,
    icon: ClipboardList,
    bg: "bg-indigo-100",
    text: "text-indigo-600",
  },
  {
    label: "Selesai",
    value: 228,
    icon: CheckCircle2,
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    label: "Dalam Proses",
    value: 20,
    icon: Clock3,
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
];

function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {statCards.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
            <div
              className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${item.bg} ${item.text}`}
            >
              <Icon size={20} />
            </div>

            <p className="text-2xl font-extrabold text-gray-900">
              {item.value}
            </p>
            <p className="text-xs text-gray-500">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}

// DATA DESA
const villages = [
  { name: "Desa Sukamaju", status: "Aktif" },
  { name: "Desa Sumber Rejeki", status: "Aktif" },
  { name: "Desa Mekar Sari", status: "Aktif" },
  { name: "Desa Jaya Makmur", status: "Aktif" },
];

function VillageList() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-gray-900">Data Desa</h3>
        <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
          Lihat Semua →
        </button>
      </div>

      <div className="space-y-3">
        {villages.map((v) => (
          <div
            key={v.name}
            className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 p-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Building2 size={18} />
              </div>
              <p className="text-sm font-semibold text-gray-900">
                {v.name}
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              {v.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// STATISTIK PLATFORM (BAR CHART)
function PlatformStats() {
  const months = ["Jun", "Jul", "Ags", "Sep", "Okt"];
  const values = [55, 70, 90, 110, 150];
  const max = 160;

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h3 className="mb-5 font-bold text-gray-900">Statistik Platform</h3>

      <div className="flex h-40 items-end justify-between gap-3">
        {values.map((v, i) => (
          <div key={months[i]} className="flex flex-1 flex-col items-center">
            <div
              className="w-full rounded-t-md bg-emerald-600"
              style={{ height: `${(v / max) * 100}%` }}
            />
            <span className="mt-2 text-xs text-gray-500">{months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// BANNER STATUS PLATFORM
function PlatformStatusBanner() {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-emerald-800">
      <CheckCircle2 size={20} className="shrink-0" />
      <p className="text-sm font-semibold">
        Platform LaporDesa berjalan dengan baik
      </p>
    </div>
  );
}

// MAIN PAGE
export default function SuperAdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-100 p-3 md:p-5">
      <div className="mx-auto flex min-h-[calc(100vh-90px)] max-w-[1500px] flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-xl md:flex-row">
        <Sidebar />

        <main className="min-w-0 flex-1 bg-[#f8fafc]">
          <Header />

          <div className="space-y-5 px-4 pb-6 md:px-6">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Dashboard Super Admin
              </h1>
              <p className="text-sm text-gray-500">
                Kelola seluruh desa dalam satu platform
              </p>
            </div>

            <StatCards />

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <VillageList />
              <PlatformStats />
            </div>

            <PlatformStatusBanner />
          </div>
        </main>
      </div>
    </div>
  );
}