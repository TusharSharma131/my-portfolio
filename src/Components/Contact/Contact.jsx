import React, { useState } from "react";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const afterSubmit = (e) =>{
     e.preventDefault();
     setEmail("");
     setName("");
     setSubject("");
     setMessage("");
     e.target.submit();
  }

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center relative "
    >
      <div className="max-w-3xl w-full p-4">
        <h1 className="text-5xl lg:text-4xl font-semibold text-center text-white mb-4">
          Contact
        </h1>
        <p className="text-lg text-center text-white mb-8">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <form
          action="https://formspree.io/f/xdoqlwre"
          method="POST"
          onSubmit={afterSubmit}
          className="w-full max-w-xl bg-gray-900 p-6 rounded-xl shadow-md mb-8 mx-auto"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Email Me 🚀
          </h2>
          <input
            className="w-full bg-transparent border border-text-secondary rounded-lg px-4 py-2 mb-4"
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full bg-transparent border border-text-secondary rounded-lg px-4 py-2 mb-4"
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full bg-transparent border border-white rounded-lg px-4 py-2 mb-4"
            type="text"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="w-full bg-transparent border rounded-lg px-4 py-2 mb-4"
            placeholder="Message"
            rows="4"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input
            className="w-full bg-gradient-to-r from-pink-600 to-purple-900 text-white py-2 rounded-lg font-semibold hover:opacity-80 transition duration-300 cursor-pointer"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
