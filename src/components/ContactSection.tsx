import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailSubject = `New Contact Form Submission from ${formData.name}`;
      const emailBody = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ""}
Date: ${new Date().toLocaleString()}

Message:
${formData.message}

---
This message was sent from the VGE website contact form.
      `;

      const mailtoLink = `mailto:adarshmishrajnv91@gmail.com?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(emailBody)}`;

      window.open(mailtoLink);

      toast({
        title: "Message Prepared!",
        description:
          "Your email client has been opened with the message. Please send it to complete the submission.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Failed to prepare message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-14 bg-gradient-to-b from-vge-beige to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-vge-blue-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your geotechnical engineering needs? Contact our
            expert team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form - Reduced Height */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 hover:shadow-3xl transition-shadow duration-500 h-full flex flex-col">
            <h3 className="text-2xl font-display font-semibold text-vge-blue-dark mb-6 flex items-center">
              <Mail className="w-6 h-6 text-vge-orange mr-3" />
              Send us a message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 flex-1 flex flex-col"
            >
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vge-orange focus:border-vge-orange transition-all duration-300 group-hover:border-gray-300 text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vge-orange focus:border-vge-orange transition-all duration-300 group-hover:border-gray-300 text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vge-orange focus:border-vge-orange transition-all duration-300 group-hover:border-gray-300 text-sm"
                  placeholder="+44 20 1234 5678"
                />
              </div>

              <div className="group flex-1 flex flex-col">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vge-orange focus:border-vge-orange transition-all duration-300 resize-none group-hover:border-gray-300 flex-1 text-sm"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-vge-orange to-vge-orange-light hover:from-vge-orange-light hover:to-vge-orange text-white py-3 px-6 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 mt-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Preparing...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info - Matching Height */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 h-full flex flex-col">
            <h3 className="text-2xl font-display font-semibold text-vge-blue-dark mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 flex-1">
              <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-vge-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-vge-blue-dark text-base mb-1">
                    Head Office
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    H.in.kh.no 293, S/f, Western Marg,near saket metro station
                    gate -2, Saidulajab, Gadaipur, South West Delhi, New Delhi,
                    Delhi, India, 110030
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <Phone className="w-6 h-6 text-vge-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-vge-blue-dark text-base mb-1">
                    Phone
                  </h4>
                  <p className="text-gray-600 text-base">+91 8448556657 </p>
                </div>
              </div>

              <div className="flex flex-col  mt-6 p-4 rounded-xl   transition-colors duration-300">
                <h4 className="font-bold text-vge-blue-dark text-base mb-2">
                  WhatsApp
                </h4>
                <p className="text-gray-600 text-sm mb-3 ">
                  Scan to chat with us directly on WhatsApp
                </p>
                <img
                  src="/whatsapp-qr.jpg"
                  alt="WhatsApp QR Code"
                  className="w-40 h-40 object-contain rounded-lg border border-gray-300 shadow-sm"
                />
              </div> */}
              <div className="flex flex-col md:flex-row items-start justify-between p-4 rounded-xltransition-colors duration-300 ">
                {/* Left Section: Phone + WhatsApp Text */}
                <div className="flex-1 space-y-4">
                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-vge-orange mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-vge-blue-dark text-base mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600 text-base">+91 8448556657</p>
                    </div>
                  </div>

                  {/* WhatsApp Text */}
                  <div className="pt-6">
                    <h4 className="font-bold text-vge-blue-dark text-base mb-2 ml-8">
                      WhatsApp
                    </h4>
                    <p className="text-gray-600 text-sm ml-8">
                      Scan to chat with us directly on WhatsApp
                    </p>
                  </div>
                </div>

                {/* Right Section: QR Code */}
                <div className="mt-6 md:mt-4 md:ml-6">
                  <img
                    src="/whatsapp-qr.jpg"
                    alt="WhatsApp QR Code"
                    className="w-28 h-28 object-contain rounded-lg border border-gray-300 shadow-sm"
                  />
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <Mail className="w-6 h-6 text-vge-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-vge-blue-dark text-base mb-1">
                    Email
                  </h4>
                  <p className="text-gray-600 text-base">
                    Venkat.geotech.engineering@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <Clock className="w-6 h-6 text-vge-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-vge-blue-dark text-base mb-1">
                    Business Hours
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
