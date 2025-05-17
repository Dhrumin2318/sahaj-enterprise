import React from "react";

export default function DealerLocator() {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Find a Location</h2>
      <div className="border rounded overflow-hidden">
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.569416924325!2d72.6749641743694!3d23.07624241432506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e811ef8260dab%3A0x1d575ff40f59c7e7!2sSAHAJ%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1747480341985!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </section>
  );
}
