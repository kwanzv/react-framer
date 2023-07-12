import { useState } from "react";
import NotificationTray from "./NotificationTray";

const initialNotifications = [
  "User #20 left you a like!",
  "User #45 sent you a friend request",
  "Your song has been uploaded!",
  "Thanks for signing up!",
];

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationContent, setNotificationContent] =
    useState(initialNotifications);

  const handleDeleteNotification = (content) => {
    setNotificationContent(
      notificationContent.filter((item) => item !== content)
    );
  };

  return (
    <header>
      <div className="header__left">Brand</div>
      <ul className="header__right">
        <li
          className="notification__button"
          onClick={() => {
            setShowNotifications(!showNotifications);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="notification__icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>
        </li>
        <li className="image">
          <img src="https://www.dummyimage.com/48x48" />
        </li>
      </ul>

      {showNotifications ? (
        <NotificationTray
          notificationContent={notificationContent}
          handleDeleteNotification={handleDeleteNotification}
        ></NotificationTray>
      ) : null}
    </header>
  );
};
export default Header;
