import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Left Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Office address</h3>
            <p>
              A-223 / A-218, NX-Byte T3, NX One, Plot No. 17, Techzone-4, Greater Noida, Uttar Pradesh 201306
            </p>
            <p className="mt-2">
              3DGlobal IT Consulting LLC 5900 Balcones Drive 21841 Austin, TX 78731
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
            <p>Mon - Sat : 9 AM - 9 PM</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
            <p>+91 120-6056078</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Mail address</h3>
            <p>sales@3dglobalit.com</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Name (required)</label>
                <input type="text" placeholder="Your name*" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email address (required)</label>
                <input type="email" placeholder="Mail*" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Phone (optional)</label>
                <input type="tel" placeholder="Your phone" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Services (required)</label>
                <select className="w-full border px-3 py-2 rounded">
                  <option>Select Service</option>
                  <option>Consulting</option>
                  <option>Development</option>
                  <option>Support</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Your message</label>
              <textarea rows="4" placeholder="Type message*" className="w-full border px-3 py-2 rounded"></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
