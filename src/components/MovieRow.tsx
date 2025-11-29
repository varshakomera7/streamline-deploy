import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface Movie {
  id: number;
  title: string;
  image: string;
  match?: number;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow = ({ title, movies }: MovieRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -800 : 800;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="group relative space-y-2 px-4 py-4 md:px-8">
      <h2 className="text-lg font-semibold text-foreground md:text-xl">{title}</h2>
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 z-10 hidden h-full -translate-y-1/2 rounded-none bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-opacity hover:bg-background/90 group-hover:opacity-100 md:flex"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide md:gap-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} image={movie.image} match={movie.match} />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 z-10 hidden h-full -translate-y-1/2 rounded-none bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-opacity hover:bg-background/90 group-hover:opacity-100 md:flex"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default MovieRow;
