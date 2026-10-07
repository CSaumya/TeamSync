import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowLeft,
  User,
  Mail,
  ShieldCheck,
  Building2,
  CircleUserRound,
  Save,
  X,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { createEmployee } from "../../apis/employeeApi";

import {
  getEmployeeById,
  updateEmployee,
} from "../../apis/employeeApi";

const AddEmployee = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const isEditMode = Boolean(id);

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
  defaultValues: {
  name: "",
  email: "",
  password: "",
  role: "",
  department: "",
  status: "active",
  avatar: "",
}
  });

 const onSubmit = async (data) => {
  try {
    if (isEditMode) {
      const res = await updateEmployee(id, data);

      console.log("Employee updated:", res);

      navigate("/home/employee");
      return;
    }

    const res = await createEmployee(data);

    console.log("Employee data:", res);

    navigate("/home/employee");
} catch (error) {
  console.log("Error saving employee:", error);
  console.log("Status:", error.response?.status);
  console.log("Response:", error.response?.data);
  console.log("Message:", error.response?.data?.message);
}
};

  const handleCancel = () => {
    reset();
    navigate("/home/employee");
  };

  useEffect(() => {
  if (!id) return;

  const fetchEmployee = async () => {
    try {
      const res = await getEmployeeById(id);

      console.log("Employee response:", res);

      const employee = res.data.data;

      reset({
        name: employee.name || "",
        email: employee.email || "",
        role: employee.role || "",
        department: employee.department || "",
        status: employee.status || "active",
        avatar: employee.avatar || "",
      });
    } catch (error) {
      console.log("Error fetching employee:", error);
    }
  };

  fetchEmployee();
}, [id, reset]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] p-4 sm:p-6 lg:p-8">

      <div className="mx-auto w-full max-w-5xl">

        {/* ================= HEADER ================= */}
        <div className="mb-6 sm:mb-8">

          <button
            type="button"
            onClick={() => navigate("/home/employee")}
            className="mb-4 flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] transition hover:text-[var(--color-primary)]"
          >
            <ArrowLeft size={18} />
            Back to Employees
          </button>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

            <div>
             <h1 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl lg:text-4xl">
  {isEditMode ? "Edit Employee" : "Add Employee"}
</h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-secondary)] sm:text-base">
  {isEditMode
    ? "Update the employee information and save your changes."
    : "Add a new employee to your organization and assign their role and department."}
</p>
            </div>

          </div>
        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">

            {/* ================= PERSONAL INFO ================= */}
            <div className="p-5 sm:p-6 lg:p-8">

              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                  <User
                    size={20}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <h2 className="text-base font-semibold text-[var(--color-text)] sm:text-lg">
                    Employee Information
                  </h2>

                  <p className="text-xs text-[var(--color-secondary)] sm:text-sm">
                    Basic information about the employee
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* NAME */}
                <div className="md:col-span-2">

                  <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                    Full Name
                  </label>

                  <div className="relative">

                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-secondary)]"
                    />

                    <input
                      type="text"
                      placeholder="Enter employee name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must contain at least 2 characters",
                        },
                      })}
                      className={`w-full rounded-xl border bg-[var(--color-card)] py-3 pl-11 pr-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-secondary)] ${
                        errors.name
                          ? "border-red-400"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
                      }`}
                    />

                  </div>

                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}

                </div>

               {/* EMAIL */}
<div>
  <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
    Email Address
  </label>

  <div className="relative">
    <Mail
      size={18}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-secondary)]"
    />

    <input
      type="email"
      placeholder="employee@example.com"
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Enter a valid email address",
        },
      })}
      className={`w-full rounded-xl border bg-[var(--color-card)] py-3 pl-11 pr-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-secondary)] ${
        errors.email
          ? "border-red-400"
          : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
      }`}
    />
  </div>

  {errors.email && (
    <p className="mt-1.5 text-xs text-red-400">
      {errors.email.message}
    </p>
  )}
</div>

{/* PASSWORD */}
<div>
  <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
    Password
  </label>

  <div className="relative">
    <ShieldCheck
      size={18}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-secondary)]"
    />

    <input
      type="password"
      placeholder="Enter employee password"
      {...register("password", {
        required: !isEditMode ? "Password is required" : false,
        minLength: {
          value: 6,
          message: "Password must contain at least 6 characters",
        },
      })}
      className={`w-full rounded-xl border bg-[var(--color-card)] py-3 pl-11 pr-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-secondary)] ${
        errors.password
          ? "border-red-400"
          : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
      }`}
    />
  </div>

  {errors.password && (
    <p className="mt-1.5 text-xs text-red-400">
      {errors.password.message}
    </p>
  )}
</div>

{/* AVATAR */}
<div>
  <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
    Avatar URL
    <span className="ml-1 text-xs font-normal text-[var(--color-secondary)]">
      (optional)
    </span>
  </label>

  <div className="relative">
    <CircleUserRound
      size={18}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-secondary)]"
    />

    <input
      type="url"
      placeholder="https://example.com/avatar.jpg"
      {...register("avatar")}
      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] py-3 pl-11 pr-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-secondary)] focus:border-[var(--color-primary)]"
    />
  </div>
</div>

              </div>
            </div>

            {/* ================= WORK INFO ================= */}
            <div className="border-t border-[var(--color-border)] p-5 sm:p-6 lg:p-8">

              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                  <Building2
                    size={20}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <h2 className="text-base font-semibold text-[var(--color-text)] sm:text-lg">
                    Organization Details
                  </h2>

                  <p className="text-xs text-[var(--color-secondary)] sm:text-sm">
                    Assign the employee's role and department
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* ROLE */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                    Role
                  </label>

                  <div className="relative">

                    <ShieldCheck
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-secondary)]"
                    />

                    <select
                      {...register("role", {
                        required: "Role is required",
                      })}
                      className={`w-full appearance-none rounded-xl border bg-[var(--color-card)] py-3 pl-11 pr-4 text-sm text-[var(--color-text)] outline-none transition ${
                        errors.role
                          ? "border-red-400"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
                      }`}
                    >
                      <option value="">Select role</option>
                      <option value="admin">Admin</option>
                      <option value="employee">Employee</option>
                    </select>

                  </div>

                  {errors.role && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.role.message}
                    </p>
                  )}

                </div>

                {/* DEPARTMENT */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                    Department
                  </label>

                  <div className="relative">

                    <Building2
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-secondary)]"
                    />

                    <select
                      {...register("department", {
                        required: "Department is required",
                      })}
                      className={`w-full appearance-none rounded-xl border bg-[var(--color-card)] py-3 pl-11 pr-4 text-sm text-[var(--color-text)] outline-none transition ${
                        errors.department
                          ? "border-red-400"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
                      }`}
                    >
                      <option value="">Select department</option>
                      <option value="common">Common</option>
                      <option value="development">Development</option>
                      <option value="design">Design</option>
                      <option value="marketing">Marketing</option>
                      <option value="hr">Human Resources</option>
                      <option value="finance">Finance</option>
                    </select>

                  </div>

                  {errors.department && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.department.message}
                    </p>
                  )}

                </div>

                {/* STATUS */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                    Status
                  </label>

                  <div className="relative">

                    <ShieldCheck
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-secondary)]"
                    />

                    <select
                      {...register("status")}
                      className="w-full appearance-none rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] py-3 pl-11 pr-4 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>

                  </div>

                </div>

              </div>
            </div>

            {/* ================= ACTIONS ================= */}
            <div className="flex flex-col-reverse gap-3 border-t border-[var(--color-border)] p-5 sm:flex-row sm:justify-end sm:p-6 lg:px-8">

              <button
                type="button"
                onClick={handleCancel}
                className="flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-secondary)] transition hover:bg-[var(--color-card)] hover:text-[var(--color-text)]"
              >
                <X size={17} />
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Save size={17} />

{isSubmitting
  ? isEditMode
    ? "Saving..."
    : "Adding..."
  : isEditMode
    ? "Save Changes"
    : "Add Employee"}              </button>

            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;