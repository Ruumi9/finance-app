// app/dashboard/layout.tsx
'use client';
// import { ReactNode } from 'react';
import '../../globals.css'; // ⬅️ Arahkan ke lokasi globals.css kamu // ⬅️ Wajib kalau kamu pakai Tailwind


export default function DashboardLayout({ children }) {
    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
                rel="stylesheet"
            />
                
            <div className="px-10 pt-10">
                {children}
            </div>
        </>
    );
}