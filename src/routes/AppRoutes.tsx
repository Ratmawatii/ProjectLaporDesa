
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// IMPORT PAGES
import LandingPage from "../pages/LandingPage";
import ComplaintPage from "../pages/ComplaintPage";
import DashboardPage from "../pages/DashboardPage";
import SuperAdminUsersPage from "../pages/SuperAdminUsersPage";

// IMPORT LAYOUT
import DashboardLayout from "../components/layouts/DashboardLayout";

// HALAMAN SEMENTARA
function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Halaman ini sedang dalam tahap pengembangan.
      </p>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>

      {/* HALAMAN PUBLIK */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/complaints"
        element={<ComplaintPage />}
      />

      {/* DASHBOARD WARGA */}
      <Route element={<DashboardLayout role="warga" />}>
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/history"
          element={<PlaceholderPage title="Riwayat Pengaduan" />}
        />
      </Route>

      {/* DASHBOARD ADMIN */}
      <Route element={<DashboardLayout role="admin" />}>
        <Route
          path="/admin/dashboard"
          element={<PlaceholderPage title="Dashboard Admin" />}
        />

        <Route
          path="/admin/complaints"
          element={<PlaceholderPage title="Data Pengaduan" />}
        />

        <Route
          path="/admin/users"
          element={<PlaceholderPage title="Manajemen Users" />}
        />
      </Route>

      {/* DASHBOARD PETUGAS */}
      <Route element={<DashboardLayout role="petugas" />}>
        <Route
          path="/petugas/dashboard"
          element={<PlaceholderPage title="Dashboard Petugas" />}
        />

        <Route
          path="/petugas/complaints"
          element={<PlaceholderPage title="Pengaduan Petugas" />}
        />
      </Route>

      {/* DASHBOARD SUPER ADMIN */}
      <Route element={<DashboardLayout role="superadmin" />}>
        <Route
          path="/superadmin/dashboard"
          element={<PlaceholderPage title="Dashboard Super Admin" />}
        />

        <Route
          path="/superadmin/complaints"
          element={<PlaceholderPage title="Pengaduan Super Admin" />}
        />

        <Route
          path="/superadmin/users"
          element={<SuperAdminUsersPage />}
        />

        <Route
          path="/superadmin/settings"
          element={<PlaceholderPage title="Pengaturan Sistem" />}
        />
      </Route>

      {/* HALAMAN TIDAK DITEMUKAN */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}
