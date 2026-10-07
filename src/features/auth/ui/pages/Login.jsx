import {
  Mail,
  Lock,
  Sparkles,
  Eye,
  EyeOff,
  LogOut,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    errors,
    showPassword,
    setShowPassword,
    onLoginSubmit,
    navigate,
  } = useAuth();

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#121015] text-white">
      <div className="min-h-screen flex">

        <section
          className="
            flex-1
            min-h-screen
            flex
            items-center
            justify-center
            px-4
            py-4
            min-[375px]:px-5
            sm:px-6
            md:px-10
            lg:px-12
          "
        >
          <div className="w-full max-w-[480px]">

            <div className="mb-5 flex items-center justify-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7957b8] to-[#c6a9fa] shadow-md shadow-[#7957b8]/20">
                <Sparkles
                  size={17}
                  strokeWidth={2.2}
                  className="text-[#17121d]"
                />
              </div>

              <h1 className="text-xl font-bold tracking-tight text-white">
                TeamSync
              </h1>
            </div>

            <div className="mb-5">
              <h2
                className="
                  text-[26px]
                  min-[375px]:text-[28px]
                  sm:text-[30px]
                  leading-tight
                  font-bold
                  tracking-tight
                "
              >
                Welcome back
              </h2>

              <p
                className="
                  mt-1.5
                  text-[13px]
                  sm:text-[14px]
                  leading-5
                  text-[#aaa4b2]
                "
              >
                Sign in to continue to your collaborative workspace.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onLoginSubmit)}
              className="space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[12px] font-semibold text-[#ddd7e5]">
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <Mail
                    size={17}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#625d6b]
                    "
                  />

                  <input
                    type="email"
                    placeholder="name@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                    className={`
                      w-full
                      h-[46px]
                      rounded-lg
                      border
                      bg-[#1c1a1f]
                      pl-[52px]
                      pr-4
                      text-[14px]
                      text-white
                      placeholder:text-[#514d57]
                      outline-none
                      transition
                      ${
                        errors.email
                          ? "border-red-500"
                          : "border-[#45414a] focus:border-[#9c7be5]"
                      }
                    `}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[12px] font-semibold text-[#ddd7e5]">
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() => console.log("Forgot password")}
                    className="
                      text-[11px]
                      font-medium
                      text-[#c7a2ff]
                      hover:text-[#d8bfff]
                      transition
                    "
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <Lock
                    size={17}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#625d6b]
                    "
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message:
                          "Password must contain at least 8 characters",
                      },
                    })}
                    className={`
                      w-full
                      h-[46px]
                      rounded-lg
                      border
                      bg-[#1c1a1f]
                      pl-[52px]
                      pr-[52px]
                      text-[14px]
                      text-white
                      placeholder:text-[#514d57]
                      outline-none
                      transition
                      ${
                        errors.password
                          ? "border-red-500"
                          : "border-[#45414a] focus:border-[#9c7be5]"
                      }
                    `}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-[#625d6b]
                      hover:text-[#c7a2ff]
                      transition
                    "
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-[11px] text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="peer sr-only"
                />

                <span
                  className="
                    flex
                    h-[18px]
                    w-[18px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[4px]
                    border
                    border-[#48434e]
                    bg-[#1c1a1f]
                    transition
                    peer-checked:border-[#aa8ce5]
                    peer-checked:bg-[#aa8ce5]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="hidden h-3.5 w-3.5 text-[#17131c] peer-checked:block"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </span>

                <span className="text-[12px] text-[#bdb6c6]">
                  Remember me
                </span>
              </label>

              <button
                type="submit"
                className="
                  w-full
                  h-[46px]
                  rounded-lg
                  bg-gradient-to-r
                  from-[#7957b8]
                  to-[#c6a9fa]
                  text-[14px]
                  font-bold
                  text-[#160d25]
                  transition
                  duration-200
                  hover:brightness-110
                  active:scale-[0.99]
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                Sign In
                <LogOut size={17} />
              </button>

              <div className="flex items-center gap-3 py-1">
                <div className="h-px flex-1 bg-[#29262d]" />

                <span
                  className="
                    whitespace-nowrap
                    text-[9px]
                    font-medium
                    tracking-wide
                    text-[#625d6b]
                  "
                >
                  OR CONTINUE WITH
                </span>

                <div className="h-px flex-1 bg-[#29262d]" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="
                    h-[44px]
                    rounded-lg
                    border
                    border-[#38343d]
                    bg-[#1a181d]
                    text-[12px]
                    font-medium
                    text-[#d6d0dc]
                    transition
                    hover:bg-[#211e25]
                  "
                >
                  Google
                </button>

                <button
                  type="button"
                  className="
                    h-[44px]
                    rounded-lg
                    border
                    border-[#38343d]
                    bg-[#1a181d]
                    text-[12px]
                    font-medium
                    text-[#d6d0dc]
                    transition
                    hover:bg-[#211e25]
                  "
                >
                  Microsoft
                </button>
              </div>

              <p
                className="
                  text-center
                  text-[12px]
                  text-[#8f8996]
                  pt-0.5
                "
              >
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className="
                    font-semibold
                    text-[#c7a2ff]
                    hover:text-[#d8bfff]
                    transition
                  "
                >
                  Create account
                </button>
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;