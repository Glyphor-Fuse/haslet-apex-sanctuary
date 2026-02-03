
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield, Stethoscope, Star } from 'lucide-react';

const SponsorshipSlider = () => {
  const [amount, setAmount] = useState([50]);

  const getImpact = (val: number) => {
    if (val < 50) return { title: "Daily Sustenance", desc: "Provides specialized diet for one cub for a day.", icon: Beef };
    if (val < 150) return { title: "Medical Checkup", desc: "Covers monthly vitamins and a routine vet check.", icon: Stethoscope };
    if (val < 300) return { title: "Enclosure Enrichment", desc: "Builds climbing structures and sensory enrichment.", icon: Shield };
    return { title: "Apex Guardian", desc: "Funds comprehensive surgery or rescue transport operations.", icon: Shield };
  };

  const currentImpact = getImpact(amount[0]);
  const ImpactIcon = currentImpact.icon;

  return (
    <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#d97706 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight">
                Direct Impact <span className="text-amber-500">Calculator</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Transparency is our currency. See exactly what your monthly contribution achieves for the residents of Haslet Apex Sanctuary.
              </p>
            </div>

            <div className="space-y-10 pt-8">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Monthly Contribution</label>
                  <span className="text-5xl font-oswald font-bold text-white">${amount[0]}</span>
                </div>
                <Slider
                  defaultValue={[50]}
                  max={500}
                  min={10}
                  step={10}
                  value={amount}
                  onValueChange={setAmount}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-slate-600 uppercase font-mono">
                  <span>Starter ($10)</span>
                  <span>Guardian ($500)</span>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-sm backdrop-blur-md transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="bg-amber-600/20 p-4 rounded-full">
                    <ImpactIcon className="h-8 w-8 text-amber-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{currentImpact.title}</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {currentImpact.desc}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-700 flex flex-wrap gap-3">
                  <span className="inline-flex items-center text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <Check className="mr-1 h-3 w-3" /> Tax Deductible
                  </span>
                  <span className="inline-flex items-center text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <Check className="mr-1 h-3 w-3" /> Monthly Update
                  </span>
                </div>
              </div>

              <Button className="w-full h-16 text-lg font-bold uppercase tracking-widest bg-amber-600 hover:bg-amber-700 rounded-none">
                Commit ${amount[0]} / Month
              </Button>
            </div>
          </div>

          <div className="relative h-[600px] w-full hidden lg:block">
            <div className="absolute inset-0 bg-amber-500/10 rotate-3 rounded-3xl" />
            <img 
              src="/images/meat-prep.jpg" 
              alt="Care in action" 
              className="absolute inset-0 h-full w-full object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-8 left-8 bg-slate-950/90 p-6 border-l-4 border-amber-500 backdrop-blur-md">
              <p className="font-oswald text-2xl font-bold text-white">1,200 LBS</p>
              <p className="text-xs uppercase tracking-widest text-slate-400">Meat Processed Weekly</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SponsorshipSlider;
