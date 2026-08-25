import { ProcessStep } from "@/data/process";

export default function ProcessStrip({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="py-24 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="sub-title">How We Work</span>
          <h2 className="mt-4">
            A process that keeps{" "}
            <span className="font-extralight text-muted-foreground">
              you in control.
            </span>
          </h2>
        </div>
        {/* Fixed at five columns on desktop. SERVICES_PAGE_PROCESS has five
            steps, so change both together if that ever needs to grow. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="relative group">
              <div className="p-6 rounded-2xl border border-border/50 bg-card h-full hover:border-primary/40 transition-colors duration-300">
                <div className="text-3xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                  {item.step}
                </div>
                <h6 className="font-bold text-sm mb-2">{item.title}</h6>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
