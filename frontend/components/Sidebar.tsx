"use client"

import React, { useContext } from "react";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { createContext } from "react";
import { SideBarContext } from "@/components/SidebarContext";

export default function Sidebar({ children }) {
  const { expanded, setExpanded } = useContext(SideBarContext);

  return (
    <div className="flex h-screen">
      <aside className="flex-shrink-0">
        <nav className="bg-white flex flex-col h-full shadow-sm border-r">
          <div className="flex justify-between items-center p-4 pb-2">
            <p className = {` text-black tracking-wide font-mono font-semibold text-lg overflow-hidden transition-all ${expanded ? "w-52 ml-2" : "w-0"}`}>{expanded ? "BudgetBuilder" : ""}</p>
            <button 
            onClick = {() => setExpanded(!expanded)}
            className = "bg-white-100 hover:bg-gray-100 rounded p-1.5">
              { expanded ? <IconChevronLeft color = "black" size = {32}/> : <IconChevronRight color = "black" size = {32}/>}
            </button>
          </div>

          <ul className = "flex flex-col ml-2 mr-2">
          {React.Children.toArray(children).slice(0, 4)}
          </ul>

          <div className = "h-1 bg-lime-700 rounded-md mt-4 mb-4 ml-2 mr-2"></div>

          <ul className = "flex flex-col ml-2 mr-2">
          {React.Children.toArray(children).slice(4, 6)}
          </ul>

          <div className= "mt-auto flex p-3 ml-2 mr-2 mb-2 rounded-md shadow-sm items-center bg-gray-100 ">
            <div className= {`flex-row leading-4 ml-2 overflow-hidden transition-all ${expanded ? "w-30" : "w-0"}`}>
              <h4 className="text-black">Will Gaston</h4>
              <span className="text-sm text-gray-600">wsegaston@gmail.com</span>
            </div>
          </div>

          <div></div>
        </nav>
      </aside>
    </div>
  )
}

export function SidebarItem({text, icon, index}) {
  const {expanded, active, setActive} = useContext(SideBarContext)
  return (
    <li
      onClick = {() => setActive(index)} 
      className={`
      relative flex items-center py-2 px-4 my-2 rounded-md cursor-pointer transition-colors duration-300 ease-in-out
      ${ active === index ? "text-black, bg-lime-600" : 
        "text-black bg-white"
      } `}>

      {icon}
      <span className={`font-mono overflow-hidden transition-all ${expanded ? "w-52 ml-2" : "w-0"}`}>
        {text}
      </span>

    </li>
  )
}