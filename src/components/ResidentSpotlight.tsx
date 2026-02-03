
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const ResidentSpotlight = () => {
  return (
    <section className="py-24 bg-slate-950 text-white" id="residents">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-amber-500 text-amber-500 uppercase tracking-widest">Meet the Residents</Badge>
          <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase">Apex <span className="text-slate-600">Profiles</span></h2>
          <p className="max-w-2xl text-slate-400">Each resident has a story of survival. We provide the sanctuary they deserve.</p>
        </div>

        <Tabs defaultValue="tiger" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-slate-900 border border-slate-800 p-1 h-auto">
              <TabsTrigger value="tiger" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-slate-400 px-8 py-3 uppercase font-bold tracking-widest rounded-sm transition-all">Tiger</TabsTrigger>
              <TabsTrigger value="lion" className="data-[state=active]:bg-yellow-700 data-[state=active]:text-white text-slate-400 px-8 py-3 uppercase font-bold tracking-widest rounded-sm transition-all">Lion</TabsTrigger>
              <TabsTrigger value="leopard" className="data-[state=active]:bg-emerald-800 data-[state=active]:text-white text-slate-400 px-8 py-3 uppercase font-bold tracking-widest rounded-sm transition-all">Leopard</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="tiger" className="animate-in fade-in zoom-in-95 duration-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900/50 p-8 md:p-12 rounded-lg border border-slate-800">
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="font-oswald text-5xl font-bold text-amber-500">Raja</h3>
                <div className="flex gap-4 text-sm text-slate-400 font-mono uppercase">
                  <span>Male</span>
                  <span>•</span>
                  <span>Bengal Tiger</span>
                  <span>•</span>
                  <span>Age: 7</span>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Rescued from a roadside attraction in 2019, Raja arrived malnourished and fearful. Today, he commands the north territory with confidence. His transformation is a testament to the resilience of the species when given proper nutrition and space.
                </p>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="bg-slate-950 p-4 rounded border-l-2 border-amber-600">
                    <p className="text-xs text-slate-500 uppercase">Favorite Enrichment</p>
                    <p className="font-bold">Ice Blocks & Pumpkins</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded border-l-2 border-amber-600">
                    <p className="text-xs text-slate-500 uppercase">Daily Diet</p>
                    <p className="font-bold">18lbs Raw Beef</p>
                  </div>
                </div>
                <Button variant="link" className="text-amber-500 p-0 h-auto font-bold uppercase tracking-widest hover:text-white">
                  Read Full Rescue Story <Info className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative aspect-[4/5] md:aspect-square lg:aspect-[3/4] overflow-hidden rounded-lg">
                 <img src="/images/resident-tiger.jpg" alt="Raja the Tiger" className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lion" className="animate-in fade-in zoom-in-95 duration-500">
             <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900/50 p-8 md:p-12 rounded-lg border border-slate-800">
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="font-oswald text-5xl font-bold text-yellow-600">Xerxes</h3>
                <div className="flex gap-4 text-sm text-slate-400 font-mono uppercase">
                  <span>Male</span>
                  <span>•</span>
                  <span>African Lion</span>
                  <span>•</span>
                  <span>Age: 12</span>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Xerxes spent his first decade in a concrete cage. Since arriving at Haslet, he has felt grass under his paws for the first time. He is our vocal sentinel, his roar heard across the sanctuary every sunset.
                </p>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="bg-slate-950 p-4 rounded border-l-2 border-yellow-600">
                    <p className="text-xs text-slate-500 uppercase">Favorite Enrichment</p>
                    <p className="font-bold">Scent Marking Logs</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded border-l-2 border-yellow-600">
                    <p className="text-xs text-slate-500 uppercase">Daily Diet</p>
                    <p className="font-bold">15lbs Red Meat</p>
                  </div>
                </div>
                <Button variant="link" className="text-yellow-600 p-0 h-auto font-bold uppercase tracking-widest hover:text-white">
                  Read Full Rescue Story <Info className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative aspect-[4/5] md:aspect-square lg:aspect-[3/4] overflow-hidden rounded-lg">
                 <img src="/images/resident-lion.jpg" alt="Xerxes the Lion" className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="leopard" className="animate-in fade-in zoom-in-95 duration-500">
             <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900/50 p-8 md:p-12 rounded-lg border border-slate-800">
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="font-oswald text-5xl font-bold text-emerald-600">Luna</h3>
                <div className="flex gap-4 text-sm text-slate-400 font-mono uppercase">
                  <span>Female</span>
                  <span>•</span>
                  <span>Amur Leopard</span>
                  <span>•</span>
                  <span>Age: 4</span>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Part of a vital genetics conservation program, Luna is elusive and intelligent. Her enclosure features vertical complexity to challenge her climbing instincts. She is the shadow of the sanctuary.
                </p>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="bg-slate-950 p-4 rounded border-l-2 border-emerald-600">
                    <p className="text-xs text-slate-500 uppercase">Favorite Enrichment</p>
                    <p className="font-bold">Hidden Food Puzzles</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded border-l-2 border-emerald-600">
                    <p className="text-xs text-slate-500 uppercase">Daily Diet</p>
                    <p className="font-bold">8lbs Rabbit/Fowl</p>
                  </div>
                </div>
                <Button variant="link" className="text-emerald-600 p-0 h-auto font-bold uppercase tracking-widest hover:text-white">
                  Read Full Rescue Story <Info className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative aspect-[4/5] md:aspect-square lg:aspect-[3/4] overflow-hidden rounded-lg">
                 <img src="/images/resident-leopard.jpg" alt="Luna the Leopard" className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResidentSpotlight;
