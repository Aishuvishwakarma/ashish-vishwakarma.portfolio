
import React from "react";
import {
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const ContactSection: React.FC = () => {
  const email = "vishwakarmaa949@gmail.com";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const senderEmail = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = `Portfolio Contact - Message from ${name}`;

    const body = `
Hi Ashish,

${message}

-------------------------
Name: ${name}
Email: ${senderEmail}
-------------------------
    `;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080b16] py-20 md:py-28"
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-[-100px] w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-100px] w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-12">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-[3px] uppercase text-blue-400">
            Contact Me
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Touch
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-5" />

          <p className="text-gray-400 max-w-xl mx-auto mt-5 text-sm sm:text-base leading-relaxed">
            Have a project in mind or looking for a developer?
            Feel free to send me an email. I'd love to hear from you!
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">

          {/* Left Information */}
          <div className="lg:col-span-2 space-y-7">

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Let's work together
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                I'm always interested in discussing new projects,
                creative ideas and opportunities to contribute
                to exciting development teams.
              </p>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#111827] border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl group-hover:bg-blue-500 group-hover:text-white transition">
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Email Me
                </p>
                <p className="text-white text-sm sm:text-base font-medium break-all">
                  {email}
                </p>
              </div>

              <FaArrowRight className="ml-auto text-gray-500 group-hover:text-blue-400 transition shrink-0" />
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#111827] border border-white/10">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-white text-sm sm:text-base font-medium">
                  Bhopal, Madhya Pradesh, India
                </p>
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-[#111827] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl"
            >
              <div className="mb-7">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Send Me an Email
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Fill in the details below to start a conversation.
                </p>
              </div>

              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>

                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-[#080b16] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-[#080b16] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-7">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="w-full bg-[#080b16] border border-white/10 rounded-xl p-4 text-white text-sm placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300"
              >
                <FaPaperPlane />
                Send Email
              </button>

              <p className="text-center text-gray-500 text-xs mt-4">
                Your default email application will open with your message.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
