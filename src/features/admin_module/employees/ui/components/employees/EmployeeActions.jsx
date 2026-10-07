import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { MoreVertical, Pencil, Trash2, UserX } from "lucide-react";

import {
  updateEmployee,
  deleteEmployee,
} from "../../../apis/employeeApi";

const EmployeeActions = ({ employee }) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  // =========================
  // EDIT
  // =========================

  const handleEdit = () => {
    navigate(`/home/employee/add-employee/${employee._id}`);
    setOpen(false);
  };

  // =========================
  // DELETE
  // =========================

  const handleDelete = async () => {
    try {
      const confirmDelete = window.confirm(
        `Are you sure you want to delete ${employee.name}?`
      );

      if (!confirmDelete) return;

      await deleteEmployee(employee._id);

      // Refresh employee list
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });

      alert("Employee deleted successfully");

      setOpen(false);
    } catch (error) {
      console.log("Delete failed:", error);
    }
  };

  // =========================
  // ACTIVE / INACTIVE
  // =========================

  const handleStatusChange = async () => {
    try {
      const newStatus =
        employee.status === "inactive"
          ? "active"
          : "inactive";

      await updateEmployee(employee._id, {
        status: newStatus,
      });

      // Refresh employee list
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });

      alert(
        newStatus === "active"
          ? "Employee marked active"
          : "Employee marked inactive"
      );

      setOpen(false);
    } catch (error) {
      console.log("Status update failed:", error);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>

      {/* THREE DOT BUTTON */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:bg-[var(--color-surface)]"
      >
        <MoreVertical
          size={20}
          className="text-[var(--text-muted)]"
        />
      </button>

      {/* DROPDOWN */}

      {open && (
        <div className="absolute right-0 top-12 z-50 w-52 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-xl">

          {/* EDIT */}

          <button
            type="button"
            onClick={handleEdit}
            className="flex h-12 w-full items-center gap-3 rounded-xl px-4 text-[var(--color-primary)] transition-all hover:bg-[var(--color-card)]"
          >
            <Pencil size={18} />
            Edit Employee
          </button>

          {/* ACTIVE / INACTIVE */}

          <button
            type="button"
            onClick={handleStatusChange}
            className="flex h-12 w-full items-center gap-3 rounded-xl px-4 text-orange-500 transition-all hover:bg-[var(--color-card)]"
          >
            <UserX size={18} />

            {employee.status === "active"
              ? "Mark Inactive"
              : "Mark Active"}
          </button>

          {/* DELETE */}

          <button
            type="button"
            onClick={handleDelete}
            className="flex h-12 w-full items-center gap-3 rounded-xl px-4 text-red-500 transition-all hover:bg-red-50"
          >
            <Trash2 size={18} />
            Delete Employee
          </button>

        </div>
      )}
    </div>
  );
};

export default EmployeeActions;