import { useRef, useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatusMessage({ text: "✅ Message sent! I’ll get back to you within 24 hours.", type: "success" });
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        setStatusMessage({ text: "Failed to send message. Please try again.", type: "error" });
      });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">Sahiltiwari.cis@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 331 318 9504</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border bg-white/50 dark:bg-gray-700/50"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border bg-white/50 dark:bg-gray-700/50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      className="w-full px-4 py-2 rounded-lg border bg-white/50 dark:bg-gray-700/50 h-32"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>

                  {statusMessage && (
                    <p
                      className={`text-sm mt-2 ${
                        statusMessage.type === "success"
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {statusMessage.text}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
