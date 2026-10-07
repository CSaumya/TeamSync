import {
  Bolt,
  Bot,
  Building,
  CalendarCheck,
  File,
  LayoutDashboard,
  List,
  PersonStanding,
  User,
} from "lucide-react";

export const employeeNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/home/mytask",
    title: "My Tasks",
    icon: List,
  },
  {
    path: "/home/attendance",
    title: "Attendance",
    icon: CalendarCheck,
  },
  {
    path: "/home/chat",
    title: "Chat",
    icon: Bot,
  },
  {
    path: "/home/settings",
    title: "Settings",
    icon: Bolt,
  },
  {
    path: "/home/profile",
    title: "Profile",
    icon: User,
  },
];

export const adminNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/home/task",
    title: "Tasks",
    icon: List,
  },
  {
    path: "/home/employee",
    title: "Employee",
    icon: PersonStanding,
  },
  {
    path: "/home/department",
    title: "Department",
    icon: Building,
  },
  {
    path: "/home/chats",
    title: "Chat",
    icon: Bot,
  },
  {
    path: "/home/document",
    title: "Documents",
    icon: File,
  },
  {
    path: "/home/setting",
    title: "Settings",
    icon: Bolt,
  },
];