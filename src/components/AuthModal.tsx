
import { useState, type FormEvent } from "react";
import {
  X,
  Eye,
  EyeOff,
  Leaf,
  Mail,
  Lock,
  User,
  ArrowRight,
} from "lucide-react";

type AuthMode = "login" | "register";

interface AuthModalProps {
  mode: AuthMode;
  onClose: () => void;
  onChangeMode: (mode: AuthMode) => void;
}

export default function AuthModal({
  mode,
  onClose,
  onChangeMode,
}: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isLogin = mode === "login";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    // Pertahankan handler autentikasi lama di bagian ini.
    if (isLogin) {
      alert("Login berhasil diproses!");
    } else {
      alert("Pendaftaran berhasil diproses!");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/15 bg-white/[0.08] py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-emerald-400 focus:bg-white/[0.13] focus:ring-2 focus:ring-emerald-400/20";

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-y-auto bg-[#032b20] px-4 py-8">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 h-full w-full object-cover"
      >
        <source src="/videos/desa.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#002d20]/90 via-[#003d2b]/70 to-[#001b15]/90" />

      {/* DECORATIVE LIGHT */}
      <div className="pointer-events-none fixed -left-32 top-10 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="pointer-events-none fixed -bottom-32 -right-20 h-96 w-96 rounded-full bg-green-400/20 blur-[120px]" />

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        aria-label="Tutup"
        className="absolute right-6 top-6 z-20 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-xl transition-all hover:rotate-90 hover:bg-white/20"
      >
        <X size={20} />
      </button>

      {/* AUTH CARD */}
      <div
        key={mode}
        className="auth-card relative z-10 my-auto w-full max-w-md overflow-hidden rounded-[28px] border border-white/20 bg-[#063c2d]/65 p-7 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-9"
      >

        {/* LOGO */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-400/15 text-emerald-300 shadow-lg shadow-emerald-950/30">
            <Leaf size={30} />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-white">
            Lapor<span className="text-emerald-400">Desa</span>
          </h1>

          <p className="mt-2 text-sm text-white/65">
            {isLogin
              ? "Selamat datang kembali! Silakan masuk."
              : "Bergabunglah dan sampaikan aspirasi Anda."}
          </p>
        </div>

        {/* LOGIN / REGISTER TOGGLE */}
        <div className="mb-7 grid grid-cols-2 rounded-xl border border-white/10 bg-black/20 p-1">
          <button
            type="button"
            onClick={() => onChangeMode("login")}
            className={`rounded-lg py-3 text-sm font-semibold transition-all duration-300 ${
              isLogin
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-900/30"
                : "text-white/55 hover:text-white"
            }`}
          >
            Masuk
          </button>

          <button
            type="button"
            onClick={() => onChangeMode("register")}
            className={`rounded-lg py-3 text-sm font-semibold transition-all duration-300 ${
              !isLogin
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-900/30"
                : "text-white/55 hover:text-white"
            }`}
          >
            Daftar
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (
            <div className="auth-field">
              <label className="mb-2 block text-sm font-medium text-white/80">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-300/70" size={18} />
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  className={inputClass}
                />
              </div>
            </div>
          )}

          <div className="auth-field">
            <label className="mb-2 block text-sm font-medium text-white/80">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-300/70" size={18} />
              <input
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className={inputClass}
              />
            </div>
          </div>

          <div className="auth-field">
            <label className="mb-2 block text-sm font-medium text-white/80">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-300/70" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete={isLogin ? "current-password" : "new-password"}
                className={`${inputClass} pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Tampilkan password"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 transition hover:text-emerald-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div className="auth-field">
              <label className="mb-2 block text-sm font-medium text-white/80">
                Konfirmasi Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-300/70" size={18} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Ulangi password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                  className={`${inputClass} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label="Tampilkan konfirmasi password"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 transition hover:text-emerald-300"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          )}

          {isLogin && (
            <div className="flex justify-end">
              <button
                type="button"
                className="text-xs text-emerald-300 transition hover:text-emerald-200 hover:underline"
              >
                Lupa password?
              </button>
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="group mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/40 transition-all duration-300 hover:-translate-y-1 hover:from-emerald-400 hover:to-green-500 hover:shadow-emerald-500/25 active:translate-y-0"
          >
            {isLogin ? "Masuk Sekarang" : "Buat Akun"}
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* FOOTER */}
        <p className="mt-7 text-center text-xs leading-relaxed text-white/45">
          Dengan melanjutkan, Anda menyetujui ketentuan
          penggunaan LaporDesa.
        </p>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes authAppear {
          from {
            opacity: 0;
            transform: translateY(22px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .auth-card {
          animation: authAppear .55s cubic-bezier(.2,.8,.2,1) both;
        }

        .auth-field {
          animation: authAppear .45s ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .auth-card, .auth-field {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
