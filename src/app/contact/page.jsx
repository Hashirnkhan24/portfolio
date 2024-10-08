"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full mx-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full py-4 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-3/4 w-full lg:w-4/5 lg:h-4/5 m-5 bg-white rounded-md text-xl flex flex-col gap-8 justify-center p-16 text-black shadow-md"
        >
          <span>Dear Hashir Khan,</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-red-500 outline-none resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-red-500 outline-none"
          />
          <span>Regards</span>
          <button className="bg-[#ea4335] rounded font-semibold text-white p-4 hover:scale-105 shadow-md transition-all">
            Send
          </button>
          {success && (
            <span className="text-white font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-white font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
