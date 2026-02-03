
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star } from 'lucide-react';

const TransparencyGrid = () => {
  return (
    <section className="bg-white text-slate-900 py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Mission Statement */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-oswald text-4xl font-bold uppercase text-slate-900">
              Radical <br/> <span className="text-amber-600">Transparency</span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We operate with an open-book policy. Your trust is the foundation of our work. Unlike roadside zoos, we are a GFAS-accredited sanctuary, meaning no breeding, no selling, and no cub petting.
            </p>
            
            <div className="bg-slate-100 p-6 rounded-lg">
              <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Accreditation Standards</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="text-green-600 h-5 w-5" /> Global Federation of Animal Sanctuaries
                </li>
                 <li className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="text-green-600 h-5 w-5" /> 501(c)(3) Non-Profit Status
                </li>
                 <li className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="text-green-600 h-5 w-5" /> 4-Star Charity Navigator Rating
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ & Financials */}
          <div className="lg:col-span-7 space-y-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-oswald text-xl uppercase font-bold text-slate-900">Where does the money go?</AccordionTrigger>
                <AccordionContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Category</TableHead>
                          <TableHead className="text-right">Allocation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Animal Care (Food/Vet)</TableCell>
                          <TableCell className="text-right">72%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Facility Maintenance</TableCell>
                          <TableCell className="text-right">18%</TableCell>
                        </TableRow>
                         <TableRow>
                          <TableCell className="font-medium">Advocacy & Education</TableCell>
                          <TableCell className="text-right">6%</TableCell>
                        </TableRow>
                         <TableRow>
                          <TableCell className="font-medium">Admin & Fundraising</TableCell>
                          <TableCell className="text-right">4%</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="font-oswald text-xl uppercase font-bold text-slate-900">Why no cub petting?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  Cub petting is the primary driver of big cat abuse in the US. Cubs are torn from their mothers at birth, used for photos for 12 weeks, and then discarded or killed when they become too dangerous. We exist to end this cycle, not participate in it.
                </AccordionContent>
              </AccordionItem>
              
               <AccordionItem value="item-3">
                <AccordionTrigger className="font-oswald text-xl uppercase font-bold text-slate-900">Can I visit the sanctuary?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  Yes, but with strict protocols. We offer guided educational tours that maintain a safe distance and respectful environment for the animals. No interaction is permitted. We prioritize the peace of our residents over entertainment.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencyGrid;
