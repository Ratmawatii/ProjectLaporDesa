
import { useState, type FormEvent } from "react";
import {
  X,
  Leaf,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  LogIn,
  UserPlus,
  ArrowRight,
} from "lucide-react";

import type { UserRole } from "../layout/Sidebar";

type AuthMode = "login" | "register";

interface AuthModalProps {
  mode: AuthMode | null;
  onClose: () => void;
  onChangeMode: (mode: AuthMode) => void;
  onLoginSuccess: (role: UserRole) => void;
}

const demoAccounts: {
  role: UserRole;
  label: string;
  email: string;
  password: string;
}[] = [
  {
    role: "warga",
    label: "Warga",
    email: "warga@lapordesa.test",
    password: "warga123",
  },
  {
    role: "admin",
    label: "Admin",
    email: "admin@lapordesa.test",
    password: "admin123",
  },
  {
    role: "petugas",
    label: "Petugas",
    email: "petugas@lapordesa.test",
    password: "petugas123",
  },
  {
    role: "superadmin",
    label: "Super Admin",
    email: "superadmin@lapordesa.test",
    password: "super123",
  },
];

export default function AuthModal({
  mode,
  onClose,
  onChangeMode,
  onLoginSuccess,
}: AuthModalProps) {
  const [selectedRole, setSelectedRole] =
    useState<UserRole>("warga");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  if (!mode) return null;

  const fillDemoAccount = (role: UserRole) => {
    const account = demoAccounts.find(
      (item) => item.role === role
    );

    if (!account) return;

    setSelectedRole(role);
    setEmail(account.email);
    setPassword(account.password);
    setError("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (mode === "register") {
      if (!fullName.trim() || !phone.trim()) {
        setError("Lengkapi seluruh data pendaftaran.");
        return;
      }

      alert(
        "Pendaftaran berhasil disimulasikan. Silakan gunakan akun demo untuk login."
      );

      setFullName("");
      setPhone("");
      setEmail("");
      setPassword("");
      onChangeMode("login");
      return;
    }

    const account = demoAccounts.find(
      (item) =>
        item.role === selectedRole &&
        item.email === email.trim() &&
        item.password === password
    );

    if (!account) {
      setError(
        "Email atau password salah. Periksa kembali akun dan role yang dipilih."
      );
      return;
    }

    onLoginSuccess(account.role);
  };

  return (
    <div className="fixed inset-0 z-[100] min-h-screen overflow-y-auto bg-black">
      <style>{`
        @keyframes authFade {
          from {
            opacity: 0;
            transform: translateY(25px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .auth-card {
          animation: authFade .6s cubic-bezier(.2,.8,.2,1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .auth-card {
            animation: none;
          }
        }
      `}</style>

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="fixed inset-0 h-full w-full object-cover"
      >
        <source src="/videos/desa.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-gradient-to-br from-black/75 via-[#003D2D]/70 to-black/80" />

      <div className="pointer-events-none fixed -left-32 top-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px]" />

      <div className="pointer-events-none fixed -bottom-32 -right-20 h-96 w-96 rounded-full bg-green-300/20 blur-[120px]" />

      <button
        type="button"
        onClick={onClose}
        aria-label="Kembali ke beranda"
        className="fixed right-4 top-4 z-30 flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-black/50 sm:right-7 sm:top-7"
      >
        <X size={18} />
        Kembali
      </button>

      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 sm:px-6">
        <div className="mb-7 text-center text-white">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 shadow-xl backdrop-blur-xl">
            <Leaf size={35} className="text-emerald-300" />
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight">
            Lapor<span className="text-emerald-300">Desa</span>
          </h1>

          <p className="mt-2 text-sm text-white/80">
            Suara Masyarakat Desa
          </p>
        </div>

        <div className="auth-card w-full max-w-[480px] overflow-hidden rounded-[28px] border border-white/60 bg-white/95 shadow-2xl shadow-black/30 backdrop-blur-2xl">
          <div className="px-7 py-8 sm:px-10 sm:py-9">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#123B2D]">
                {mode === "login"
                  ? "Selamat Datang!"
                  : "Buat Akun Baru"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {mode === "login"
                  ? "Masuk ke akun Anda untuk melanjutkan."
                  : "Daftarkan diri dan mulai sampaikan aspirasi Anda."}
              </p>
            </div>

            {/* TAB LOGIN DAN REGISTER */}
            <div className="mb-6 grid grid-cols-2 gap-1 rounded-xl bg-gray-100 p-1">
              <button
                type="button"
                onClick={() => {
                  setError("");
                  onChangeMode("login");
                }}
                className={`rounded-lg py-3 text-sm font-semibold transition ${
                  mode === "login"
                    ? "bg-emerald-700 text-white shadow-md"
                    : "text-gray-500 hover:text-emerald-800"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => {
                  setError("");
                  onChangeMode("register");
                }}
                className={`rounded-lg py-3 text-sm font-semibold transition ${
                  mode === "register"
                    ? "bg-emerald-700 text-white shadow-md"
                    : "text-gray-500 hover:text-emerald-800"
                }`}
              >
                Daftar
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* PILIH ROLE */}
              {mode === "login" && (
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Masuk Sebagai
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    {demoAccounts.map((account) => (
                      <button
                        key={account.role}
                        type="button"
                        onClick={() => fillDemoAccount(account.role)}
                        className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                          selectedRole === account.role
                            ? "border-emerald-700 bg-emerald-50 text-emerald-800"
                            : "border-gray-200 text-gray-600 hover:border-emerald-400"
                        }`}
                      >
                        {account.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* NAMA LENGKAP */}
              {mode === "register" && (
                <>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Nama Lengkap
                    </label>

                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/10">
                      <User size={19} className="shrink-0 text-emerald-700" />

                      <input
                        required
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Masukkan nama lengkap"
                        autoComplete="name"
                        className="w-full bg-transparent py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Nomor Telepon
                    </label>

                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/10">
                      <Phone size={19} className="shrink-0 text-emerald-700" />

                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="08xxxxxxxxxx"
                        autoComplete="tel"
                        className="w-full bg-transparent py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/10">
                  <Mail size={19} className="shrink-0 text-emerald-700" />

                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    autoComplete="email"
                    className="w-full bg-transparent py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/10">
                  <Lock size={19} className="shrink-0 text-emerald-700" />

                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    autoComplete={
                      mode === "login"
                        ? "current-password"
                        : "new-password"
                    }
                    className="w-full bg-transparent py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="shrink-0 text-gray-400 transition hover:text-emerald-700"
                    aria-label={
                      showPassword
                        ? "Sembunyikan password"
                        : "Tampilkan password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* PESAN ERROR */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* TOMBOL SUBMIT */}
              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 py-3.5 font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl"
              >
                {mode === "login" ? (
                  <>
                    <LogIn size={19} />
                    Masuk ke Akun
                  </>
                ) : (
                  <>
                    <UserPlus size={19} />
                    Daftar Sekarang
                  </>
                )}

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* AKUN DEMO */}
            {mode === "login" && (
              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-3">
                <p className="mb-1 text-xs font-bold text-blue-800">
                  AKUN DEMO
                </p>

                <p className="text-xs leading-5 text-blue-700">
                  Pilih role di atas. Email dan password akan terisi otomatis.
                </p>
              </div>
            )}

            <div className="mt-6 border-t border-gray-200 pt-5 text-center text-sm text-gray-600">
              {mode === "login" ? (
                <>
                  Belum memiliki akun?{" "}
                  <button
                    type="button"
                    onClick={() => onChangeMode("register")}
                    className="font-bold text-emerald-700 hover:underline"
                  >
                    Daftar sekarang
                  </button>
                </>
              ) : (
                <>
                  Sudah memiliki akun?{" "}
                  <button
                    type="button"
                    onClick={() => onChangeMode("login")}
                    className="font-bold text-emerald-700 hover:underline"
                  >
                    Login di sini
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/70">
          © 2026 LaporDesa. Suara Masyarakat Desa.
        </p>
      </div>
    </div>
  );
}
