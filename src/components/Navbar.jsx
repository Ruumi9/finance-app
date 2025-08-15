"use client"
import { useSidebarStore } from "@/store/sidebarStore";
import React from "react";

export default function Navbar() {
    const { isOpen } = useSidebarStore();
    return (
        <div className={`z-30 poppins-regular fixed transition-all duration-700 ${isOpen ? "left-60" : "left-20"} bg-accent-content w-screen h-12`}>
            <p>16</p>
        </div>
    )
}