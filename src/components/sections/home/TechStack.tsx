import { cn } from "@/lib/utils";

import { TECH_STACK } from "@/data/tech-stack";

export default function TechStack() {
  return (
    <section className="py-12 bg-background relative overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Label */}
          <div className="shrink-0 space-y-1 text-center lg:text-left">
            <h6 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              The Velocity Stack
            </h6>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Architecture for Scale
            </p>
          </div>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-4">
            {TECH_STACK.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center justify-center text-center space-y-3 opacity-40 hover:opacity-100 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500 group-hover:scale-110">
                  <item.icon className={cn("w-6 h-6")} />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase tracking-wider block">
                    {item.name}
                  </span>
                  <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-tighter hidden lg:block">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
}
