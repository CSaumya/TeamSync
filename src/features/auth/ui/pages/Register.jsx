import {
  User,
  Mail,
  Lock,
  Sparkles,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    errors,
    showPassword,
    setShowPassword,
    password,
    strength,
    getStrengthText,
    onRegisterSubmit,
    navigate,
  } = useAuth();

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#121015] text-white">
      <div className="min-h-screen flex">

        <section className="relative hidden lg:flex lg:w-[41%] xl:w-[40%] min-h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=90')",
            }}
          />

          <div className="absolute inset-0 bg-[#071127]/75" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071127] via-transparent to-[#071127]/30" />

          <div className="relative z-10 p-7 xl:p-8">
            <h1 className="text-[22px] font-bold tracking-tight text-white">
              TeamSync
            </h1>
          </div>

          <div className="relative z-10 mt-auto p-8 xl:p-12 pb-10 xl:pb-12">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles
                size={21}
                strokeWidth={2}
                className="text-[#d7b8ff]"
              />

              <span className="text-[11px] xl:text-[12px] font-semibold tracking-[2px] text-[#d8bfff]">
                NEXT-GEN INTELLIGENCE
              </span>
            </div>

            <h2 className="max-w-[500px] text-3xl xl:text-[38px] leading-[1.15] font-bold tracking-tight text-white">
              Accelerate your team's
              <br />
              intelligence.
            </h2>
          </div>
        </section>

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
            lg:px-10
            xl:px-14
          "
        >
          <div className="w-full max-w-[480px]">

            <div className="lg:hidden mb-5 flex items-center justify-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7957b8] to-[#c6a9fa]">
                <Sparkles
                  size={17}
                  strokeWidth={2.3}
                  className="text-[#17131c]"
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
                Create your account
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
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="space-y-3.5"
            >
              <div>
                <label className="block mb-1.5 text-[12px] font-semibold text-[#ddd7e5]">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#625d6b]"
                  />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    {...register("fullName", {
                      required: "Full name is required",
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
                        errors.fullName
                          ? "border-red-500"
                          : "border-[#45414a] focus:border-[#9c7be5]"
                      }
                    `}
                  />
                </div>

                {errors.fullName && (
                  <p className="mt-1 text-[11px] text-red-400">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1.5 text-[12px] font-semibold text-[#ddd7e5]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#625d6b]"
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
                <label className="block mb-1.5 text-[12px] font-semibold text-[#ddd7e5]">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#625d6b]"
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
                      text-[11px]
                      font-medium
                      text-[#a99abf]
                      hover:text-[#c7a2ff]
                      transition
                    "
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <div className="mt-1.5">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className={`
                          h-[3px]
                          flex-1
                          rounded-full
                          transition-all
                          ${
                            item < strength
                              ? "bg-[#c9a8ff]"
                              : "bg-[#29262d]"
                          }
                        `}
                      />
                    ))}
                  </div>

                  {password && (
                    <p
                      className={`
                        mt-1
                        text-[10px]
                        ${
                          strength >= 3
                            ? "text-[#c7a4ff]"
                            : "text-[#a39aa9]"
                        }
                      `}
                    >
                      {getStrengthText()}
                    </p>
                  )}
                </div>

                {errors.password && (
                  <p className="mt-1 text-[11px] text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="pt-0.5">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required:
                        "You must agree to the Terms of Service and Privacy Policy",
                    })}
                    className="peer sr-only"
                  />

                  <span
                    className="
                      mt-[1px]
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

                  <span className="text-[11px] sm:text-[12px] leading-4 text-[#d0cad5]">
                    I agree to the{" "}
                    <span className="text-[#c7a2ff]">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-[#c7a2ff]">
                      Privacy Policy
                    </span>
                    .
                  </span>
                </label>

                {errors.terms && (
                  <p className="mt-1 text-[11px] text-red-400">
                    {errors.terms.message}
                  </p>
                )}
              </div>

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
                  cursor-pointer
                "
              >
                Create Account
              </button>

              <div className="flex items-center gap-3 py-0.5">
                <div className="h-px flex-1 bg-[#29262d]" />

                <span className="whitespace-nowrap text-[9px] font-medium tracking-wide text-[#625d6b]">
                  OR CONTINUE WITH
                </span>

                <div className="h-px flex-1 bg-[#29262d]" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="
                    h-[42px]
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
                    h-[42px]
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

              <div className="pt-0.5 text-center">
                <p className="text-[13px] text-[#8f8996] font-bold">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="
                      
                      text-[#c7a2ff]
                      hover:text-[#d8bfff]
                      transition cursor-pointer
                    "
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;