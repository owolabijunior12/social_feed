import React from "react";

function NavigationBar() {
  return (
    <nav className="flex justify-center space-x-4 bg-bl">
      <a
        href="/dashboard"
        className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Music
      </a>
      <a
        href="/"
        className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Team
      </a>
      <a
        href="/"
        className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Projects
      </a>
      <a
        href="/"
        className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Reports
      </a>
    </nav>
  );
}

export default NavigationBar;
