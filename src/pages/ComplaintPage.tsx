
import {
  House,
  PlusCircle,
  ClipboardList,
  User,
  LogOut,
  Megaphone,
  MapPin,
  CloudUpload,
  Send,
  ChevronDown,
  Check,
  Lightbulb,
  Menu,
  Plus,
  Minus,
} from "lucide-react";

import { useState, type ChangeEvent, type FormEvent } from "react";

// SIDEBAR
function Sidebar() {
  const menus = [
    { name: "Dashboard", icon: House },
    { name: "Buat Pengaduan", icon: PlusCircle, active: true },
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

// HEADER
function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-5 md:px-8">
      <button className="text-gray-600 md:hidden">
        <Menu />
      </button>

      <div className="ml-auto flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
          R
        </div>

        <span className="text-sm font-semibold text-gray-800">
          Ratmawati
        </span>

        <ChevronDown size={17} />
      </div>
    </header>
  );
}

// LOCATION MAP
function LocationMap() {
  return (
    <div>
      <h3 className="mb-3 font-semibold text-gray-800">
        Lokasi Anda
      </h3>

      <div className="relative h-[300px] overflow-hidden rounded-xl border bg-[#d9edcf]">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              repeating-linear-gradient(35deg, transparent 0px, transparent 45px, #ffffff 46px, #ffffff 50px),
              repeating-linear-gradient(120deg, transparent 0px, transparent 65px, #b6dca8 66px, #b6dca8 90px)
            `,
          }}
        />

        <div className="absolute left-[20%] top-[15%] h-28 w-32 rounded-2xl bg-green-200/60" />

        <div className="absolute bottom-[10%] right-[10%] h-32 w-28 rounded-full bg-green-300/50" />

        <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-lg bg-white px-4 py-2 text-center text-xs font-semibold shadow-lg">
            Lokasi Terpilih
            <br />
            Desa Sukamaju
          </div>

          <div className="mx-auto mt-2 flex h-10 w-10 rotate-[-45deg] items-center justify-center rounded-full rounded-bl-none bg-red-500 text-white shadow-lg">
            <MapPin size={23} className="rotate-45" />
          </div>
        </div>

        <div className="absolute bottom-3 right-3 flex flex-col overflow-hidden rounded-lg bg-white shadow">
          <button className="p-2 hover:bg-gray-100">
            <Plus size={20} />
          </button>

          <button className="border-t p-2 hover:bg-gray-100">
            <Minus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

// COMPLAINT TIPS
function ComplaintTips() {
  const tips = [
    "Isi data dengan jelas dan lengkap",
    "Unggah foto sebagai bukti",
    "Pastikan lokasi sudah sesuai",
  ];

  return (
    <div className="rounded-xl bg-emerald-50 p-5">
      <div className="mb-4 flex items-center gap-2">
        <Lightbulb className="text-emerald-700" size={23} />

        <h3 className="font-bold text-gray-800">
          Tips Pengaduan
        </h3>
      </div>

      <div className="space-y-3">
        {tips.map((tip) => (
          <div
            key={tip}
            className="flex items-center gap-3 text-sm text-gray-700"
          >
            <Check size={19} className="shrink-0 text-green-600" />
            {tip}
          </div>
        ))}
      </div>
    </div>
  );
}

// COMPLAINT FORM
function ComplaintForm() {
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Form pengaduan berhasil disiapkan!");
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files?.[0]?.name || "");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Kategori Pengaduan <span className="text-red-500">*</span>
        </label>

        <select
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        >
          <option value="">Pilih Kategori</option>
          <option value="Infrastruktur">Infrastruktur</option>
          <option value="Lingkungan">Lingkungan</option>
          <option value="Pelayanan Publik">Pelayanan Publik</option>
          <option value="Sosial">Sosial</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Judul Laporan <span className="text-red-500">*</span>
        </label>

        <input
          required
          type="text"
          placeholder="Contoh: Jalan rusak di Dusun Suka Maju"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Deskripsi <span className="text-red-500">*</span>
        </label>

        <textarea
          required
          rows={4}
          placeholder="Jelaskan permasalahan secara detail..."
          className="w-full resize-y rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Lokasi <span className="text-red-500">*</span>
        </label>

        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 px-3">
            <MapPin size={19} className="text-gray-500" />

            <input
              required
              placeholder="Pilih lokasi di peta"
              className="w-full py-3 text-sm outline-none"
            />
          </div>

          <button
            type="button"
            className="rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Pilih Lokasi
          </button>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Upload Foto (Opsional)
        </label>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-center transition hover:border-emerald-500">
          <CloudUpload size={32} className="mb-2 text-gray-600" />

          <span className="text-sm font-medium text-gray-700">
            Klik untuk mengunggah foto
          </span>

          <span className="text-xs text-gray-500">
            atau seret file ke sini
          </span>

          <span className="mt-1 text-xs text-gray-400">
            (JPG, PNG)
          </span>

          <input
            type="file"
            accept="image/png,image/jpeg"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {fileName && (
          <p className="mt-2 text-xs text-emerald-700">
            File dipilih: {fileName}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 py-3 font-semibold text-white transition hover:bg-emerald-800"
      >
        <Send size={18} />
        Kirim Pengaduan
      </button>
    </form>
  );
}

// MAIN COMPLAINT PAGE
export default function ComplaintPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-100 p-3 md:p-5">
      <h2 className="mb-3 text-xl font-bold text-emerald-950">
        2. Form Pengaduan
      </h2>

      <div className="mx-auto flex min-h-[calc(100vh-90px)] max-w-[1500px] flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-xl md:flex-row">
        <Sidebar />

        <main className="min-w-0 flex-1 bg-[#f8fafc]">
          <Header />

          <div className="px-4 pb-6 md:px-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm md:p-7">
              <div className="mb-6 flex items-center gap-4 border-b border-gray-100 pb-5">
                <Megaphone size={39} className="text-emerald-700" />

                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Form Pengaduan
                  </h1>

                  <p className="text-sm text-gray-500">
                    Sampaikan laporan dengan jelas dan lengkap
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.9fr]">
                <ComplaintForm />

                <div className="space-y-6">
                  <LocationMap />
                  <ComplaintTips />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
