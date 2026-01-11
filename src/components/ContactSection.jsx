// Contact section - get in touch form
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";


const EMAILJS_SERVICE_ID = "service_3ha05fd"; 
const EMAILJS_TEMPLATE_ID = "template_ce6205e"; 
const EMAILJS_PUBLIC_KEY = "dbzscSR9N8nPmbjSu"; 

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const formData = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
      to_email: "waiyanminmin29@gmail.com", // Your email address
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      e.target.reset(); // Reset form
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error sending message",
        description:
        error.text,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        {/* Contact information - Centered cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <div className="bg-card p-6 rounded-2xl shadow-md border border-border/50 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Email</h4>
            <a
              href="mailto:waiyanminmin29@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
            >
              waiyanminmin29@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-card p-6 rounded-2xl shadow-md border border-border/50 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Phone</h4>
            <a
              href="tel:+6591366148"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              +65 9136 6143
            </a>
          </div>

          {/* Location */}
          <div className="bg-card p-6 rounded-2xl shadow-md border border-border/50 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Location</h4>
            <span className="text-sm text-muted-foreground">Singapore</span>
          </div>
        </div>

        {/* Social media links - Centered */}
        <div className="text-center mb-12">
          <h4 className="font-semibold text-lg mb-4">Connect With Me</h4>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/wai-yan-min-min-0ba7251b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border-2 border-border hover:border-primary hover:bg-primary/10 text-foreground/80 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/WaiYanMinMin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border-2 border-border hover:border-primary hover:bg-primary/10 text-foreground/80 hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Contact form - Centered and wider */}
        <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-3xl shadow-lg border border-border/50">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Send a Message</h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="Wai Yan Min Min"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="waiyanminmin29@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none transition-all"
                placeholder="I'd like to talk about..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2 mt-8"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

