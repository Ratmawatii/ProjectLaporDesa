
import { NavLink } from "react-router-dom";
import {
  House,
  PlusCircle,
  ClipboardList,
  Users,
  LogOut,
  Leaf,
  LayoutDashboard,
  Settings,
  FileText,
} from "lucide-react";

export type UserRole =
  | "warga"
  | "admin"
  | "petugas"
  | "superadmin";

interface SidebarProps {
  role: UserRole;
  onLogout?: () => void;
  onNavigate?: () => void;
}

const menuByRole = {
  warga: [
    { name: "Dashboard", path: "/dashboard", icon: House },
    { name: "Buat Pengaduan", path: "/complaints", icon: PlusCircle },
    { name: "Riwayat", path: "/history", icon: ClipboardList },
  ],

  admin: [
    { name: "Dashboard", path: "/admin/dashboard", icon: House },
    { name: "Pengaduan", path: "/admin/complaints", icon: FileText },
    { name: "Users", path: "/admin/users", icon: Users },
  ],

  petugas: [
    { name: "Dashboard", path: "/petugas/dashboard", icon: House },
    { name: "Pengaduan", path: "/petugas/complaints", icon: FileText },
  ],

  superadmin: [
    { name: "Dashboard", path: "/superadmin/dashboard", icon: LayoutDashboard },
    { name: "Pengaduan", path: "/superadmin/complaints", icon: FileText },
    { name: "Users", path: "/superadmin/users", icon: Users },
    { name: "Pengaturan", path: "/superadmin/settings", icon: Settings },
  ],
};

export default function Sidebar({
  role,
  onLogout,
  onNavigate,
}: SidebarProps) {
  const menus = menuByRole[role];

  const roleLabel = {
    warga: "Warga",
    admin: "Admin",
    petugas: "Petugas",
    superadmin: "Super Admin",
  }[role];

  return (
    <aside className="flex min-h-screen w-full shrink-0 flex-col overflow-hidden bg-[#004735] text-white md:w-[250px]">

      {/* LOGO */}
      <div className="border-b border-white/10 px-6 py-7 text-center">
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20">
          <Leaf size={30} className="text-emerald-300" />
        </div>

        <h1 className="text-2xl font-bold">LaporDesa</h1>

        <p className="text-xs text-emerald-100">
          Suara Warga, Desa Maju
        </p>
      </div>

      {/* MENU ROLE */}
      <div className="px-5 pt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
          Menu {roleLabel}
        </p>
      </div>

      {/* NAVIGASI */}
      <nav className="flex flex-row gap-2 overflow-x-auto p-3 md:flex-col md:py-5">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              end
              onClick={onNavigate}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md"
                    : "text-emerald-50 hover:bg-white/10"
                }`
              }
            >
              <Icon size={20} />
              {menu.name}
            </NavLink>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="mt-auto p-3">
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-emerald-50 transition hover:bg-red-500/20 hover:text-white"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

      {/* ILUSTRASI */}
      <div className="hidden h-32 items-end justify-center bg-gradient-to-t from-emerald-800 to-transparent md:flex">
        <div className="pb-4 text-6xl">🏡</div>
      </div>
    </aside>
  );
}
