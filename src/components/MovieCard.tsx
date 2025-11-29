import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  title: string;
  image: string;
  match?: number;
}

const MovieCard = ({ title, image, match }: MovieCardProps) => {
  return (
    <div className="group relative aspect-video min-w-[200px] flex-shrink-0 cursor-pointer overflow-hidden rounded-md bg-card transition-all duration-300 hover:scale-110 hover:z-10 md:min-w-[280px]">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          <h3 className="text-sm font-semibold text-foreground md:text-base">{title}</h3>
          {match && (
            <div className="flex items-center gap-2 text-xs text-green-500">
              <span className="font-semibold">{match}% Match</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Button size="icon" className="h-8 w-8 rounded-full bg-foreground text-background hover:bg-foreground/90">
              <Play className="h-4 w-4 fill-current" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full border-2 border-muted-foreground text-foreground hover:border-foreground">
              <Plus className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full border-2 border-muted-foreground text-foreground hover:border-foreground">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="ml-auto h-8 w-8 rounded-full border-2 border-muted-foreground text-foreground hover:border-foreground">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
