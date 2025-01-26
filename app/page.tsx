import Dashboard from "@/components/Dashboard";
import { SidebarItem } from "@/components/Sidebar";
import Sidebar from "@/components/Sidebar";
import { IconLayoutDashboard, IconCoins, IconReload, IconCalendarDollar,
         IconDownload, IconBell } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar>
        <SidebarItem icon = {<IconLayoutDashboard/>} text="Dashboard" index={0}/>
        <SidebarItem icon = {<IconCoins/>} text="Transactions" index={1}/>
        <SidebarItem icon = {<IconReload/>} text="Recurring Payments" index={2}/>
        <SidebarItem icon = {<IconCalendarDollar/>} text="Budget" index={3}/>
        <SidebarItem icon = {<IconDownload/>} text="Export" index={4}/>
        <SidebarItem icon = {<IconBell/>} text="Notifications" index={5}/>
      </Sidebar>
      <div className="flex overflow-hidden">
      <Dashboard></Dashboard>
      </div>
    </div>
  );
}
