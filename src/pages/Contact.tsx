
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-dark-vanilla/30">
      <div className="container mx-auto py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Connect With Chandralekha Jewels
          </h1>
          <p className="text-lg text-muted-foreground">
            We're here to help you find the perfect piece or bring your custom design to life. Reach out to us with any questions or schedule a visit to our Coimbatore showroom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" size="lg" className="w-full">Submit</Button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Visit Our Gold Jewellery Showroom in Coimbatore</h2>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-secondary mt-1" />
                <div>
                  <p className="text-muted-foreground">123, Gold Street, Big Bazaar</p>
                  <p className="text-muted-foreground">Coimbatore, Tamil Nadu 641001</p>
                  <a href="#" className="text-secondary hover:underline font-semibold mt-2 inline-block">Get Directions</a>
                </div>
              </div>
            </div>
             <div>
              <h3 className="text-xl font-bold text-primary mb-4">Contact Information</h3>
              <div className="flex items-center gap-4 mb-2">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">+91 987 654 3210</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:contact@chandralekhajewels.com" className="text-muted-foreground hover:text-primary">contact@chandralekhajewels.com</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Business Hours</h3>
              <p className="text-muted-foreground">Monday - Saturday: 10:00 AM - 8:00 PM</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
