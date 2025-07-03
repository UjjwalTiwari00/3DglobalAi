import React from "react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "CTRM/ETRM Solutions",
      description:
        "Sophisticated software systems designed to support the entire lifecycle of trading commodities and energy products.",
      icon: "💼",
    },
    {
      title: "Resource Outsourcing",
      description:
        "Contract external professionals or firms to handle specific business functions like IT, development, QA, and more.",
      icon: "⏰",
    },
    {
      title: "DevOps",
      description:
        "Combines software development and IT operations to shorten the development lifecycle and provide continuous delivery.",
      icon: "💻",
    },
    {
      title: "Robotic Process Automation (RPA)",
      description:
        "Use software robots or bots to automate routine, manual tasks that are typically performed by humans.",
      icon: "🤖",
    },
    {
      title: "Database Migration",
      description:
        "Move data from one database to another — upgrade, switch systems, or migrate to the cloud securely.",
      icon: "🗄️",
    },
    {
      title: "Cloud Solutions",
      description:
        "A range of services delivered over the internet — computing power, storage, databases, networking, and analytics.",
      icon: "☁️",
    },
    {
      title: "Quality Assurance",
      description:
        "A systematic process ensuring software products meet requirements and are free of defects through various QA activities.",
      icon: "✅",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Top */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Amazing <span className="text-indigo-600">Services</span> to give you success.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our principle and values are unbreakable because quality is what we aim at.
            In the times when software has become an impeccable part of business,
            it needs special care in order to test its performance. Our belief is on We! not on me.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://3dglobalit.com/wp-content/uploads/2024/05/depositphotos_110634064-stock-photo-what-we-do-concept-on.webp"
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-xl shadow-md bg-white hover:shadow-2xl transition-all border border-gray-100"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-12">
        You can also find our <span className="text-red-500 font-medium">Services</span> to contact for the IT consulting.
      </p>
    </section>
  );
}
