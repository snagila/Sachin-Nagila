import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    message: "",
    success: false,
  });

  const [buttonText, setButtonText] = useState("Send Message");

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setButtonText("Send Message");
          setStatus({
            message: "Message sent successfully!",
            success: true,
          });
          setFormDetails({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setButtonText("Send Message");
          setStatus({
            message: "Failed to send message. Please try again.",
            success: false,
          });
        }
      );
  };

  return (
    <section
      className="py-16 bg-[#121212] text-black bg-customlight"
      id="contact"
    >
      <div className="pt-[1rem] md:pt-[4rem] pb-[2rem] md:pb-[4rem] ">
        <div className="text-4xl font-bold leading-tight text-center  py-3 ">
          <span className="backdrop-blur-sm border-b-4 border-orange-600">
            Contact &nbsp;
            <span className="text-orange-600">Me</span>
          </span>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h3 className="text-3xl font-semibold mb-8 ">
            <span className="backdrop-blur-sm ">
              {" "}
              Get In <span className="text-orange-600 ">Touch</span>
            </span>
          </h3>
          <div className="space-y-6">
            <a href="tel:0410263444" className="block">
              <div
                data-aos="zoom-in"
                className="flex items-center shadow-md shadow-[#06092e41] duration-500 p-4 rounded-md bg-customdark backdrop-blur-sm cursor-pointer"
              >
                <p className="rounded-full bg-gray-700 bg-opacity-50 p-4">
                  <BsFillTelephoneFill size={20} />
                </p>
                <span className="ml-4 text-black">0410263444</span>
              </div>
            </a>

            <div
              data-aos="zoom-in"
              className="flex items-center shadow-md shadow-[#06092e41] duration-500 p-4 rounded-md bg-customdark backdrop-blur-sm cursor-pointer"
            >
              <p className="rounded-full bg-gray-700 bg-opacity-50 p-4">
                <CgMail size={20} />
              </p>
              <span className="ml-4">sachinnagila2053@gmail.com</span>
            </div>
            <div
              data-aos="zoom-in"
              className="flex items-center shadow-md shadow-[#06092e41] duration-500 p-4 rounded-md bg-customdark backdrop-blur-sm"
            >
              <p className="rounded-full bg-gray-700 bg-opacity-50 p-4">
                <MdLocationOn size={20} />
              </p>
              <span className="ml-4">
                Based in Sydney, Australia (Open to relocation)
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 p-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
                className="p-4 rounded-lg bg-customdark backdrop-blur-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#55e6a5]"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
                className="p-4 rounded-lg bg-customdark backdrop-blur-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#55e6a5]"
                required
              />
              <input
                type="email"
                name="email"
                value={formDetails.email}
                placeholder="Email Address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
                className="p-4 rounded-lg bg-customdark backdrop-blur-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#55e6a5]"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formDetails.phone}
                placeholder="Phone No."
                onChange={(e) => onFormUpdate("phone", e.target.value)}
                className="p-4 rounded-lg bg-customdark backdrop-blur-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#55e6a5]"
                required
              />
            </div>
            <textarea
              name="message"
              rows={6}
              value={formDetails.message}
              placeholder="Message"
              onChange={(e) => onFormUpdate("message", e.target.value)}
              className="w-full p-4 rounded-lg bg-customdark backdrop-blur-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#55e6a5]"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-teal-800 text-white font-bold hover:bg-teal-500 transition duration-300"
            >
              {buttonText}
            </button>
            {status.message && (
              <div
                className={`mt-4 text-center ${
                  status.success ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
