import React from 'react';
import './Sidebar.css';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
    PeopleOutline,
    CalendarViewDayOutlined
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
          <Link to="/" className="link">
          <li className="sidebarListItem active">
            <LineStyle className="sidebarIcon" />
            Home
          </li>
          </Link>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            Analytics
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
          <Link to="/users" className="link">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
          </Link>
          <Link to="/departments" className="link">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Departments
            </li>
          </Link>
          <Link to="/families" className="link">
            <li className="sidebarListItem">
              <PeopleOutline className="sidebarIcon" />
              Families
            </li>
          </Link>
          <Link to="/calender" className="link">
            <li className="sidebarListItem">
              <CalendarViewDayOutlined className="sidebarIcon" />
              Calender
            </li>
          </Link>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MailOutline className="sidebarIcon" />
            Mail
          </li>
          <li className="sidebarListItem">
            <DynamicFeed className="sidebarIcon" />
            Feedback
          </li>
          <li className="sidebarListItem">
            <ChatBubbleOutline className="sidebarIcon" />
            Messages
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            Manage
          </li>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            <Report className="sidebarIcon" />
            Reports
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar