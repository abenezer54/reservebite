import type React from "react";
import { Mail, Timer, Lock, Calendar } from "lucide-react";

type NotificationItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const notifications: NotificationItem[] = [
  {
    id: 1,
    title: "Email sent!!",
    description: "Check your inbox or spam folders",
    icon: <Mail className="w-5 h-5" />,
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "30min left, Hurry up!!",
    description: "Hotel name is waiting for you",
    icon: <Timer className="w-5 h-5" />,
    color: "bg-purple-700",
  },
  {
    id: 3,
    title: "Password changed",
    description: "Password was changes successfully!!",
    icon: <Lock className="w-5 h-5" />,
    color: "bg-red-600",
  },
  {
    id: 4,
    title: "Reservation Successfully",
    description: "Table booked in hotel name",
    icon: <Calendar className="w-5 h-5" />,
    color: "bg-green-700",
  },
];

const NotificationPopup = () => {
  return (
    <div className="absolute right-0 top-full mt-2 w-[320px] bg-white rounded-lg shadow-lg overflow-hidden z-20 border border-gray-200 transform -translate-x-1/2 md:translate-x-0 md:right-0 md:left-auto left-1/2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="flex items-start p-4 border-b border-gray-100 last:border-0"
        >
          <div
            className={`${notification.color} text-white p-3 rounded-full mr-3 flex-shrink-0`}
          >
            {notification.icon}
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm">{notification.title}</span>
            <span className="text-xs text-gray-500">
              {notification.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationPopup;
