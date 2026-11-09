
import { useEffect, useState } from "react";
import {
  Search,
  Plus,
  Users,
  Pencil,
  Trash2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Sesuaikan dengan alamat backend kamu
const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

// Struktur data user dari backend
interface UserData {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

// Struktur pagination dari backend
interface Pagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// Struktur response API
interface UsersResponse {
  success: boolean;
  message: string;
  data: UserData[];
  pagination: Pagination;
}

export default function SuperAdminUsersPage() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [limit] = useState(5);

  const [pagination, setPagination] = useState<Pagination | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState("");
    const [refreshKey, setRefreshKey] = useState(0);

  // Mengambil data users dari backend
  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_BASE_URL}/users?page=${page}&limit=${limit}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(
            `Gagal mengambil data users. Status: ${response.status}`
          );
        }

        const result: UsersResponse = await response.json();

        if (!result.success) {
          throw new Error(result.message || "Gagal mengambil data users");
        }

        setUsers(result.data);
        setPagination(result.pagination);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "Terjadi kesalahan saat mengambil data."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => controller.abort();
  }, [page, limit, refreshKey]);

  // Pencarian pada data halaman yang sedang ditampilkan
  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Navigasi halaman
  const handlePreviousPage = () => {
    if (pagination?.hasPreviousPage) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination?.hasNextPage) {
      setPage((prev) => prev + 1);
    }
  };

  const handleDelete = async () => {
  if (!selectedUser) return;

  try {
    setDeleting(true);
    setDeleteError("");

    const response = await fetch(
      `${API_BASE_URL}/users/${selectedUser.id}`,
      {
        method: "DELETE",
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Gagal menghapus pengguna."
      );
    }

    setSelectedUser(null);
    setRefreshKey((prev) => prev + 1);

  } catch (err) {
    setDeleteError(
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan saat menghapus pengguna."
    );
  } finally {
    setDeleting(false);
  }
};

  // Format tanggal
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  };

  return (

    
    <div className="space-y-6">

      {/* HEADER HALAMAN */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Manajemen Users
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Kelola seluruh pengguna dan hak akses sistem LaporDesa.
          </p>
        </div>

        <button
          onClick={() =>
            alert("Fitur tambah pengguna akan diintegrasikan berikutnya.")
          }
          className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          <Plus size={18} />
          Tambah User
        </button>
      </div>

      {/* STATISTIK */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Pengguna</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                {pagination?.totalItems ?? 0}
              </h2>
            </div>

            <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
              <Users size={24} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Halaman Saat Ini</p>
          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            {pagination?.page ?? page}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Halaman</p>
          <h2 className="mt-2 text-3xl font-bold text-purple-600">
            {pagination?.totalPages ?? 0}
          </h2>
        </div>

      </div>

      {/* TABEL USERS */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

        <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-bold text-gray-900">
              Daftar Pengguna
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Data akun yang terdaftar pada sistem.
            </p>
          </div>

          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari pengguna..."
              className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-emerald-500 sm:w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left text-sm">

            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4">Pengguna</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Tanggal Daftar</th>
                <th className="px-6 py-4">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">

              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                    Memuat data pengguna...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-red-500">
                    {error}
                    <br />
                    <button
                      onClick={() => setPage((prev) => prev)}
                      className="mt-2 font-semibold underline"
                    >
                      Periksa koneksi backend
                    </button>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                    Pengguna tidak ditemukan.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="transition hover:bg-gray-50">

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                          {user.name.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <p className="font-semibold text-gray-800">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                        Belum tersedia
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                        Belum tersedia
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {formatDate(user.createdAt)}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          title="Edit pengguna"
                          onClick={() =>
                            alert(`Edit pengguna: ${user.name}`)
                          }
                          className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
                        >
                          <Pencil size={17} />
                        </button>

                        <button
  title="Hapus pengguna"
  onClick={() => {
    setSelectedUser(user);
    setDeleteError("");
  }}
  className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
>
  <Trash2 size={17} />
</button>
                      </div>
                    </td>

                  </tr>
                ))
              )}

            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex flex-col justify-between gap-3 border-t border-gray-100 p-4 sm:flex-row sm:items-center">

          <p className="text-xs text-gray-500">
            Menampilkan {filteredUsers.length} dari {pagination?.totalItems ?? 0} pengguna.
          </p>

          <div className="flex items-center gap-3">

            <button
              onClick={handlePreviousPage}
              disabled={!pagination?.hasPreviousPage || loading}
              className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={16} />
              Sebelumnya
            </button>

            <span className="text-sm font-semibold text-gray-700">
              {pagination?.page ?? page} / {pagination?.totalPages ?? 0}
            </span>

            <button
              onClick={handleNextPage}
              disabled={!pagination?.hasNextPage || loading}
              className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Selanjutnya
              <ChevronRight size={16} />
            </button>

          </div>
        </div>

      </div>
    
    {/* MODAL KONFIRMASI DELETE */}
{selectedUser && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

      {/* ICON */}
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
        <Trash2 size={26} />
      </div>

      {/* JUDUL */}
      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold text-gray-900">
          Hapus Pengguna?
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Apakah kamu yakin ingin menghapus akun berikut?
        </p>
      </div>

      {/* INFORMASI USER */}
      <div className="mt-5 rounded-xl bg-gray-50 p-4">
        <p className="font-semibold text-gray-800">
          {selectedUser.name}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          {selectedUser.email}
        </p>
      </div>

      {/* ERROR */}
      {deleteError && (
        <p className="mt-3 text-center text-sm text-red-600">
          {deleteError}
        </p>
      )}

      {/* BUTTON */}
      <div className="mt-6 flex gap-3">

        <button
          onClick={() => setSelectedUser(null)}
          disabled={deleting}
          className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
        >
          Batal
        </button>

        <button
          onClick={handleDelete}
          disabled={deleting}
          className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {deleting ? "Menghapus..." : "Ya, Hapus"}
        </button>

      </div>

    </div>
  </div>
)}

      {/* INFORMASI */}
      <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
        <ShieldCheck className="mt-0.5 shrink-0 text-emerald-700" size={20} />

        <p className="text-sm text-emerald-800">
          Pengelolaan pengguna hanya tersedia untuk Super Admin.
        </p>
      </div>

    </div>



  );

}
