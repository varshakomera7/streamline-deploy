import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MovieRow from "@/components/MovieRow";

const Index = () => {
  const trendingMovies = [
    { id: 1, title: "The Witcher", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1470&auto=format&fit=crop", match: 95 },
    { id: 2, title: "Dark", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop", match: 88 },
    { id: 3, title: "Money Heist", image: "https://images.unsplash.com/photo-1574267432644-f610a4ab5e3b?q=80&w=1631&auto=format&fit=crop", match: 92 },
    { id: 4, title: "Ozark", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1470&auto=format&fit=crop", match: 90 },
    { id: 5, title: "Breaking Bad", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1528&auto=format&fit=crop", match: 98 },
    { id: 6, title: "Black Mirror", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=1470&auto=format&fit=crop", match: 85 },
  ];

  const popularMovies = [
    { id: 7, title: "The Crown", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1470&auto=format&fit=crop", match: 87 },
    { id: 8, title: "Bridgerton", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop", match: 89 },
    { id: 9, title: "The Queen's Gambit", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1470&auto=format&fit=crop", match: 94 },
    { id: 10, title: "Squid Game", image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=1472&auto=format&fit=crop", match: 96 },
    { id: 11, title: "Peaky Blinders", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop", match: 91 },
    { id: 12, title: "Narcos", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1470&auto=format&fit=crop", match: 93 },
  ];

  const topRated = [
    { id: 13, title: "The Office", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1470&auto=format&fit=crop", match: 97 },
    { id: 14, title: "Friends", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1469&auto=format&fit=crop", match: 95 },
    { id: 15, title: "Sherlock", image: "https://images.unsplash.com/photo-1478827536114-da961b7f86c1?q=80&w=1470&auto=format&fit=crop", match: 92 },
    { id: 16, title: "Westworld", image: "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?q=80&w=1374&auto=format&fit=crop", match: 88 },
    { id: 17, title: "The Mandalorian", image: "https://images.unsplash.com/photo-1516981442399-a91139e20f41?q=80&w=1470&auto=format&fit=crop", match: 94 },
    { id: 18, title: "Succession", image: "https://images.unsplash.com/photo-1477666250292-991d8a79522e?q=80&w=1374&auto=format&fit=crop", match: 96 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div className="space-y-8 pb-16">
          <MovieRow title="Trending Now" movies={trendingMovies} />
          <MovieRow title="Popular on StreamFlix" movies={popularMovies} />
          <MovieRow title="Top Rated" movies={topRated} />
        </div>
      </main>
    </div>
  );
};

export default Index;
