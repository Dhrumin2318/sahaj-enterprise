import React from "react";
export default function Footer() {
  return (
    <footer className="p-4 bg-gray-100 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} Sahaj Enterprise. All rights reserved.
      </p>
    </footer>
  );
}
