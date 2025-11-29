import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full md:h-[85vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop"
          alt="Featured content"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="relative flex h-full items-end pb-24 md:items-center md:pb-0">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-xl space-y-4 md:max-w-2xl">
            <h2 className="text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
              Stranger Things
            </h2>
            <p className="text-sm text-foreground md:text-lg">
              When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="gap-2 bg-foreground text-background hover:bg-foreground/90">
                <Play className="h-5 w-5 fill-current" />
                Play
              </Button>
              <Button size="lg" variant="secondary" className="gap-2 bg-secondary/80 text-foreground backdrop-blur-sm hover:bg-secondary">
                <Info className="h-5 w-5" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
