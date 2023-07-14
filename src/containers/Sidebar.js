import {} from "./_Sidebar.scss";
import { Dashboart } from "../assets/css/icon";
import SidebarBtn from "./Sidebarbtn";
import {
  Chart,
  Tickets,
  Ideas,
  Concats,
  Agents,
  Articles,
  Settings,
  Subscription,
} from "../assets/css/icon";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Dashboart />
        <h1 className="sidebar__header-text">Dashboard Kit</h1>
      </div>
      <SidebarBtn img={<Chart/>} title="Overview" />
      <SidebarBtn img={<Tickets/>} title="Tickets" />
      <SidebarBtn img={<Ideas/>} title="Ideas" />
      <SidebarBtn img={<Concats/>} title="Contacts" />
      <SidebarBtn img={<Agents/>} title="Agents" />
      <SidebarBtn img={<Articles/>} title="Articles" />
      <SidebarBtn img={<Settings/>} title="Settings" />
      <SidebarBtn img={<Subscription/>} title="Subscription" />
    </div>
  );
};

export default Sidebar;
