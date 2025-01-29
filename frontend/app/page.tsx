"use client"

import React, { useContext } from "react";
import Dashboard from "@/components/Dashboard";
import { SidebarItem } from "@/components/Sidebar";
import { SideBarProvider, SideBarContext } from "@/components/SidebarContext";
import Sidebar from "@/components/Sidebar";
import Transactions from "@/components/Transactions";
import { IconLayoutDashboard, IconCoins, IconReload, IconCalendarDollar,
         IconDownload, IconBell } from '@tabler/icons-react';

export default function Home() {
  return (
    <SideBarProvider>
      <HomeContent />
    </SideBarProvider>
  );
}

function HomeContent() {
  const { active } = useContext(SideBarContext);

  return (
    <div className="flex h-full w-full overflow-hidden">
      <Sidebar>
        <SidebarItem icon = {<IconLayoutDashboard/>} text="Dashboard" index={0}/>
        <SidebarItem icon = {<IconCoins/>} text="Transactions" index={1}/>
        <SidebarItem icon = {<IconReload/>} text="Recurring" index={2}/>
        <SidebarItem icon = {<IconCalendarDollar/>} text="Budget" index={3}/>
        <SidebarItem icon = {<IconDownload/>} text="Export" index={4}/>
        <SidebarItem icon = {<IconBell/>} text="Notifications" index={5}/>
      </Sidebar>
      <div className="flex overflow-hidden">
      {active === 0 && <Dashboard></Dashboard>}
      {active === 1 && <Transactions></Transactions>}
      </div>
    </div>
  );
}
