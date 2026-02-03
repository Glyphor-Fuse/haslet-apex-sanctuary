
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-tiger.jpg"
          alt="Majestic tiger gaze"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex h-full flex-col justify-end pb-24 pt-32">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-sm">
            <span className="h-0.5 w-8 bg-amber-500" />
            Haslet Apex Sanctuary
          </div>
          
          <h1 className="font-oswald text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight uppercase text-white">
            Dignity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              Demands Action
            </span>
          </h1>
          
          <p className="max-w-xl text-lg text-slate-300 md:text-xl font-light leading-relaxed">
            We don't just rescue. We restore the apex spirit. Join the frontline of big cat conservation and sponsor a life today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-wide rounded-none px-8 h-14 text-lg">
              Support the Pack <Heart className="ml-2 h-5 w-5 fill-current" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white font-bold tracking-wide rounded-none px-8 h-14 text-lg backdrop-blur-sm">
              View Residents <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
