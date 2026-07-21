import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the huge "CONTACT" text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    setSuccess(false);

    const formData = new FormData(formRef.current);
    try {
      const res = await fetch('https://formspree.io/f/xqeokjoe', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSuccess(true);
        formRef.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
    setSending(false);
  };

  return (
    <section ref={containerRef} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-white/5 m-0 max-w-full">
      {/* Huge Background Parallax Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top opacity-5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-black tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
            Reach Out
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    id="firstName" 
                    placeholder="Your Name" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    id="email" 
                    placeholder="Email Address" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    name="subject"
                    id="subject" 
                    placeholder="Subject" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    name="message"
                    id="message" 
                    placeholder="Type your message here" 
                    required
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Success and Error messages */}
            {success && (
              <div className="p-4 rounded-xl bg-green-900/30 border border-green-500/50 text-white font-bold text-sm">
                ✅ Message sent successfully! I will get back to you soon.
              </div>
            )}
            {error && (
              <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/50 text-white font-bold text-sm">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            {/* Bottom Actions Row */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              {/* Permission Checkbox */}
              <div className="flex-1 flex items-start gap-4 text-xs md:text-sm font-semibold text-white/95">
                <input 
                  type="checkbox" 
                  id="permission" 
                  required
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-semibold">
                <p className="leading-relaxed max-w-[400px]">
                  This form is protected and messages are dispatched securely to my primary address.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    Direct Email: <a href="mailto:koppisettidhanasiri@gmail.com" className="underline hover:text-white transition-colors font-black">koppisettidhanasiri@gmail.com</a>
                  </p>
                  
                  <button 
                    type="submit" 
                    disabled={sending}
                    className="px-8 py-3 rounded-full border border-white/40 text-white font-black flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending...' : 'Send'}
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
