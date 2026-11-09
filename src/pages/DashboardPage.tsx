
import {
  Clock3,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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

// WELCOME BANNER
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
          <p className="mt-1 text-xs text-emerald-50">
            Total Pengaduan
          </p>
        </div>
      </div>
    </div>
  );
}

// STATUS TRACKER
function StatusTracker() {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm md:p-7">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-bold text-gray-900">
          Status Pengaduan Anda
        </h3>

        <button
          onClick={() => navigate("/history")}
          className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
        >
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
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${colorClasses[step.color]}`}
                >
                  <Icon size={22} />
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {step.label}
                </p>

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
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm md:p-7">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-bold text-gray-900">
          Pengaduan Terbaru Anda
        </h3>

        <button
          onClick={() => navigate("/history")}
          className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
        >
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
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeClasses[item.status]}`}
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
    <div className="space-y-5">
      <WelcomeBanner />
      <StatusTracker />
      <RecentComplaints />
    </div>
  );
}
