import React from "react";

export default function Contact() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="max-w-xl grid gap-4">
        <input type="text" placeholder="Name" className="p-2 border rounded" />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
        />
        <textarea placeholder="Message" className="p-2 border rounded h-32" />
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400">
          Submit
        </button>
      </form>
    </section>
  );
}
