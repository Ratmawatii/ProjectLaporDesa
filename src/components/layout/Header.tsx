
import {
  Menu,
  Bell,
  UserRound,
  ChevronDown,
} from "lucide-react";

interface HeaderProps {
  userName?: string;
  roleLabel?: string;
  onMenuClick?: () => void;
}

export default function Header({
  userName = "Pengguna",
  roleLabel = "Warga",
  onMenuClick,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-gray-100 bg-white px-5 shadow-sm md:px-8">

      {/* KIRI */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl p-2 text-gray-600 transition hover:bg-gray-100 md:hidden"
          aria-label="Buka sidebar"
        >
          <Menu size={24} />
        </button>

        <div>
          <h2 className="text-lg font-bold text-gray-800">
            Dashboard
          </h2>
          <p className="hidden text-xs text-gray-500 sm:block">
            Selamat datang di LaporDesa
          </p>
        </div>
      </div>

      {/* KANAN */}
      <div className="flex items-center gap-3 md:gap-5">
        <button
          type="button"
          className="relative rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
          aria-label="Notifikasi"
        >
          <Bell size={21} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="hidden h-9 w-px bg-gray-200 sm:block" />

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
            <UserRound size={21} />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold text-gray-800">
              {userName}
            </p>
            <p className="text-xs text-gray-500">
              {roleLabel}
            </p>
          </div>

          <ChevronDown
            size={16}
            className="hidden text-gray-400 sm:block"
          />
        </div>
      </div>
    </header>
  );
}
