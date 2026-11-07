import {
  House,
  FileCheck2,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  Menu,
  CalendarCheck2,
  Clock3,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

// SIDEBAR
function Sidebar() {
  const menus = [
    { name: "Dashboard", icon: House, active: true },
    { name: "Kelola Pengaduan", icon: FileCheck2 },
    { name: "Tanggapan", icon: MessageSquare },
    { name: "Laporan", icon: BarChart3 },
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

      <div className="hidden items-center gap-2 text-sm font-semibold text-gray-700 md:flex">
        <ShieldCheck size={18} className="text-emerald-700" />
        Desa Sukamaju
        <ChevronDown size={16} />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button className="relative text-gray-500 transition hover:text-emerald-700">
          <Bell size={21} />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            6
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
            A
          </div>

          <span className="text-sm font-semibold text-gray-800">
            Admin Desa
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
    label: "Total Laporan",
    value: 24,
    icon: CalendarCheck2,
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    label: "Dalam Proses",
    value: 6,
    icon: Clock3,
    bg: "bg-orange-100",
    text: "text-orange-500",
  },
  {
    label: "Selesai",
    value: 15,
    icon: CheckCircle2,
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    label: "Ditolak",
    value: 3,
    icon: AlertTriangle,
    bg: "bg-red-100",
    text: "text-red-500",
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

// GRAFIK PENGADUAN 6 BULAN TERAKHIR (SVG LINE CHART)
function ComplaintChart() {
  const months = ["Mei", "Jun", "Jul", "Agu", "Sep", "Okt"];
  const values = [8, 10, 9, 11, 14, 15];
  const max = 16;

  const width = 460;
  const height = 160;
  const stepX = width / (values.length - 1);

  const points = values
    .map((v, i) => `${i * stepX},${height - (v / max) * height}`)
    .join(" ");

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h3 className="mb-4 font-bold text-gray-900">
        Grafik Pengaduan (6 Bulan Terakhir)
      </h3>

      <svg viewBox={`0 0 ${width} ${height + 24}`} className="w-full">
        <polyline
          points={points}
          fill="none"
          stroke="#059669"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {values.map((v, i) => (
          <circle
            key={i}
            cx={i * stepX}
            cy={height - (v / max) * height}
            r="4"
            fill="#059669"
          />
        ))}

        {months.map((m, i) => (
          <text
            key={m}
            x={i * stepX}
            y={height + 18}
            textAnchor="middle"
            fontSize="11"
            fill="#6b7280"
          >
            {m}
          </text>
        ))}
      </svg>
    </div>
  );
}

// KATEGORI TERBANYAK (DONUT CHART)
const categories = [
  { label: "Infrastruktur", value: 40, color: "#059669" },
  { label: "Kebersihan", value: 35, color: "#3b82f6" },
  { label: "Pelayanan", value: 25, color: "#f59e0b" },
];

function CategoryDonut() {
  let cumulative = 0;

  const gradientParts = categories.map((cat) => {
    const start = cumulative;
    cumulative += cat.value;
    return `${cat.color} ${start}% ${cumulative}%`;
  });

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h3 className="mb-4 font-bold text-gray-900">Kategori Terbanyak</h3>

      <div className="flex items-center gap-6">
        <div
          className="h-28 w-28 shrink-0 rounded-full"
          style={{
            background: `conic-gradient(${gradientParts.join(", ")})`,
          }}
        >
          <div className="m-[18px] flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white" />
        </div>

        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.label} className="flex items-center gap-2 text-sm">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <span className="text-gray-600">{cat.label}</span>
              <span className="font-semibold text-gray-900">
                {cat.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// LAPORAN TERBARU
const latestReports = [
  {
    title: "Lampu jalan mati di RT 02",
    date: "28 Okt 2025",
    status: "Diproses",
  },
];

const statusBadgeClasses: Record<string, string> = {
  Diproses: "bg-blue-100 text-blue-700",
  Menunggu: "bg-orange-100 text-orange-700",
  Selesai: "bg-green-100 text-green-700",
  Ditolak: "bg-red-100 text-red-700",
};

function LatestReports() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-gray-900">Laporan Terbaru</h3>
        <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
          Lihat Semua →
        </button>
      </div>

      <div className="space-y-3">
        {latestReports.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 p-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-gray-900">
                {item.title}
              </p>
              <p className="text-xs text-gray-500">{item.date}</p>
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

// MAIN PAGE
export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-100 p-3 md:p-5">

      <div className="mx-auto flex min-h-[calc(100vh-90px)] max-w-[1500px] flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-xl md:flex-row">
        <Sidebar />

        <main className="min-w-0 flex-1 bg-[#f8fafc]">
          <Header />

          <div className="space-y-5 px-4 pb-6 md:px-6">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Dashboard Desa Sukamaju
              </h1>
              <p className="text-sm text-gray-500">
                Ringkasan data pengaduan desa Anda
              </p>
            </div>

            <StatCards />

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_0.9fr]">
              <ComplaintChart />
              <CategoryDonut />
            </div>

            <LatestReports />
          </div>
        </main>
      </div>
    </div>
  );
}