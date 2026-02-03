
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-white font-oswald font-bold text-2xl uppercase tracking-widest">
              <span className="h-6 w-1 bg-amber-500" />
              Haslet Apex Sanctuary
            </div>
            <p className="max-w-md text-slate-500">
              Restoring dignity to the wild. A non-profit sanctuary dedicated to the rescue, rehabilitation, and lifelong care of abused big cats.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Resident Profiles</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Financial Transparency</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Visit Us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Sanctuary Road</li>
              <li>Haslet, TX 76052</li>
              <li>info@hasletapex.org</li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="text-white hover:text-amber-500"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-white hover:text-amber-500"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-white hover:text-amber-500"><Twitter className="h-5 w-5" /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Haslet Apex Sanctuary. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
