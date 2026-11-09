
import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import Sidebar, {
  type UserRole,
} from "../layout/Sidebar";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface DashboardLayoutProps {
  role: UserRole;
  userName?: string;
  roleLabel?: string;
}

interface StoredUser {
  role: UserRole;
  email: string;
  name: string;
}

function getStoredUser(): StoredUser | null {
  try {
    const data = localStorage.getItem("lapordesa_user");

    if (!data) return null;

    const user = JSON.parse(data) as StoredUser;

    const validRoles: UserRole[] = [
      "warga",
      "admin",
      "petugas",
      "superadmin",
    ];

    if (!validRoles.includes(user.role)) {
      return null;
    }

    return user;
  } catch {
    return null;
  }
}

export default function DashboardLayout({
  role,
  userName,
  roleLabel,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const currentUser = getStoredUser();

  const currentRoleLabel =
    roleLabel ??
    (role === "superadmin"
      ? "Super Admin"
      : role === "petugas"
        ? "Petugas"
        : role === "admin"
          ? "Admin"
          : "Warga");

  const handleLogout = () => {
    localStorage.removeItem("lapordesa_user");
    navigate("/", { replace: true });
  };

  // Proteksi simulasi berdasarkan role
  if (!currentUser || currentUser.role !== role) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR DESKTOP */}
      <div className="hidden md:flex">
        <Sidebar
          role={role}
          onLogout={handleLogout}
        />
      </div>

      {/* SIDEBAR MOBILE */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="relative z-10 flex w-[260px]">
            <Sidebar
              role={role}
              onLogout={handleLogout}
              onNavigate={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* KONTEN UTAMA */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* HEADER */}
        <Header
          userName={userName ?? currentUser.name}
          roleLabel={currentRoleLabel}
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* KONTEN HALAMAN */}
        <main className="flex-1 bg-[#f8fafc] p-5 md:p-8">
          <Outlet />
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
