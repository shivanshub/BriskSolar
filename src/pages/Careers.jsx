import React from 'react';
import { Briefcase, MapPin, Clock, Building, Database, Zap, Send, Phone, User, Mail, Upload } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterB';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

const jobDetails = {
  title: "Business Operations Associate",
  location: "Patiala, Punjab (On-Site)",
  type: "Full-Time",
  department: "Operations & Technology",
  software: "Zoho One (full training provided)",
  responsibilities: [
    { icon: <Database />, text: "CRM Management - maintain and update customer database in Zoho" },
    { icon: <Zap />, text: "Workflow Automation - design automated paths (e.g., auto email after contract signing)" },
    { icon: <Clock />, text: "Project Tracking - monitor installation progress, alert managers on delays" },
    { icon: <Database />, text: "Data Reporting - weekly sales and installation reports in Excel or dashboard tools" },
    { icon: <Zap />, text: "Process Improvement - find bottlenecks, suggest digital solutions" }
  ],
  requirements: [
    "Education: Bachelor's degree in BBA, IT, Engineering, or related field",
    "Quick to learn new software - CRM or project management tool experience is a plus",
    "Logical thinking - comfortable with If-Then workflow logic",
    "Good communication - can explain tech steps to non-technical teammates",
    "Highly organized - nothing falls through the cracks"
  ],
  offers: [
    "Full training on Zoho One Business Suite",
    "Mentorship in the rapidly growing renewable energy industry",
    "Fast-paced work environment where your ideas are valued"
  ]
};

const Careers = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for applying. We will review your profile and get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <PageHero 
        badge="Join The Team"
        title="Build the"
        highlight="Future."
        description="Build India's solar future with us. Join a high-performance team dedicated to changing how Punjab thinks about energy."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-12">
             <div className="p-12 bg-surface-muted border border-black/5 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl -z-0 group-hover:scale-110 transition-transform duration-700" />
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 relative z-10">
                   <div className="space-y-6">
                      <div className="flex gap-4">
                         <span className="px-4 py-1.5 bg-primary text-white font-sans font-black text-[9px] uppercase tracking-widest">{jobDetails.type}</span>
                         <span className="px-4 py-1.5 bg-black/5 text-text-primary border border-black/5 font-sans font-black text-[9px] uppercase tracking-widest">{jobDetails.department}</span>
                      </div>
                      <h2 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter text-text-primary leading-none">{jobDetails.title}</h2>
                      <div className="flex gap-10">
                         <div className="flex items-center gap-3 text-text-muted">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span className="font-sans font-bold text-sm">{jobDetails.location}</span>
                         </div>
                         <div className="flex items-center gap-3 text-text-muted">
                            <Building className="w-5 h-5 text-primary" />
                            <span className="font-sans font-bold text-sm">On-Site Office</span>
                         </div>
                      </div>
                   </div>
                   <div className="p-8 bg-white/50 backdrop-blur-xl border border-black/5 rounded-sm space-y-4 min-w-[300px]">
                      <span className="text-primary font-sans font-black text-[10px] uppercase tracking-[0.4em] block">Core Stack</span>
                      <p className="font-sans font-bold text-text-primary text-lg italic tracking-tight">{jobDetails.software}</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7 space-y-24">
             <div className="space-y-12">
                <div className="space-y-4">
                   <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">The Role</span>
                   <h2 className="text-4xl lg:text-5xl font-black italic tracking-tighter uppercase text-text-primary">Key Responsibilities.</h2>
                </div>
                <div className="space-y-6">
                   {jobDetails.responsibilities.map((item, i) => (
                      <div key={i} className="flex gap-8 p-8 bg-surface-muted border border-black/5 group hover:border-primary/20 transition-all rounded-sm">
                         <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                            {item.icon}
                         </div>
                         <p className="font-sans font-bold text-text-muted leading-relaxed flex-1 mt-2">{item.text}</p>
                      </div>
                   ))}
                </div>
             </div>

             <div className="space-y-12">
                <div className="space-y-4">
                   <span className="text-primary font-sans font-black text-xs uppercase tracking-[0.5em]">The Fit</span>
                   <h2 className="text-4xl lg:text-5xl font-black italic tracking-tighter uppercase text-text-primary">Who We're Looking For.</h2>
                </div>
                <div className="grid gap-4">
                   {jobDetails.requirements.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 border-l-4 border-primary/20 font-sans italic text-text-muted">
                         <Zap className="w-4 h-4 text-primary mt-1 shrink-0" />
                         <span>{item}</span>
                      </div>
                   ))}
                </div>
             </div>

             <div className="p-12 bg-primary text-white space-y-10 relative overflow-hidden rounded-sm group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl -z-0" />
                <div className="space-y-4 relative z-10">
                   <span className="text-white/50 font-sans font-black text-xs uppercase tracking-[0.5em]">Advantage</span>
                   <h2 className="text-4xl font-black italic tracking-tighter uppercase leading-none">What We Offer.</h2>
                </div>
                <div className="space-y-6 relative z-10">
                   {jobDetails.offers.map((item, i) => (
                      <div key={i} className="flex items-center gap-6">
                         <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-[10px] font-black">{i+1}</div>
                         <p className="font-sans font-bold italic tracking-tight text-lg">{item}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="lg:col-span-5 sticky top-32 h-fit">
             <div className="bg-surface-muted p-12 border border-black/5 rounded-sm space-y-10 shadow-2xl">
                <div className="space-y-2">
                   <h3 className="text-3xl font-black italic tracking-tighter uppercase text-text-primary">Apply Now.</h3>
                   <p className="font-sans text-xs text-text-muted uppercase tracking-widest">Submit your application below</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="space-y-6">
                      <div className="space-y-2 group">
                         <label className="text-[9px] font-sans font-black uppercase tracking-widest text-text-muted group-focus-within:text-primary transition-colors">Full Name *</label>
                         <div className="relative">
                            <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                            <input 
                               type="text" 
                               required 
                               className="w-full bg-transparent border-b border-black/10 py-4 pl-10 focus:outline-none focus:border-primary font-sans font-bold text-sm transition-all" 
                               placeholder="e.g., Amar Singh" 
                            />
                         </div>
                      </div>
                      <div className="space-y-2 group">
                         <label className="text-[9px] font-sans font-black uppercase tracking-widest text-text-muted group-focus-within:text-primary transition-colors">Phone Number *</label>
                         <div className="relative">
                            <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                            <input 
                               type="tel" 
                               required 
                               className="w-full bg-transparent border-b border-black/10 py-4 pl-10 focus:outline-none focus:border-primary font-sans font-bold text-sm transition-all" 
                               placeholder="+91 00000 00000" 
                            />
                         </div>
                      </div>
                      <div className="space-y-2 group">
                         <label className="text-[9px] font-sans font-black uppercase tracking-widest text-text-muted group-focus-within:text-primary transition-colors">Email Address *</label>
                         <div className="relative">
                            <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                            <input 
                               type="email" 
                               required 
                               className="w-full bg-transparent border-b border-black/10 py-4 pl-10 focus:outline-none focus:border-primary font-sans font-bold text-sm transition-all" 
                               placeholder="amar@email.com" 
                            />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[9px] font-sans font-black uppercase tracking-widest text-text-muted">Upload Resume (PDF/DOC) *</label>
                         <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-primary/20 border-dashed rounded-md bg-white hover:bg-primary/5 transition-all group cursor-pointer">
                           <div className="space-y-1 text-center">
                             <Upload className="mx-auto h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                             <div className="flex text-sm text-text-muted">
                               <span className="relative cursor-pointer font-sans font-black text-xs uppercase tracking-widest text-primary">Click to upload resume</span>
                             </div>
                             <p className="text-[10px] text-text-muted/60 font-sans uppercase">Up to 10MB</p>
                           </div>
                         </div>
                      </div>
                   </div>
                   <button type="submit" className="w-full bg-text-primary text-white py-6 font-sans font-black uppercase tracking-[0.4em] text-xs hover:bg-primary transition-all flex items-center justify-center gap-3 group">
                      Submit Profile <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </form>
             </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 max-w-[1800px] mx-auto pb-24">
         <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
