"use client";
import { useSidebarStore } from "@/store/sidebarStore";
import React from "react";
// useSidebarStore

export default function Sidebar() {
    const { isOpen, toggle } = useSidebarStore();

    return (
        <aside className={`bg-primary transition-all duration-700 fixed ${isOpen ? "w-56" : "w-16"} h-screen rounded-md pt-5`}>
            <ul>
                <li>
                    <i className="ri-home-4-fill text-4xl"></i> <span className={`${isOpen ? "" : "hidden"} transition-all duration-700`}>Home</span>
                </li>
            </ul>
            <button onClick={toggle} className="btn-accent btn flex mx-auto"><i className={`ri-arrow-${isOpen ? "left" : "right"}-s-line`}></i></button>
        </aside>
    )
}