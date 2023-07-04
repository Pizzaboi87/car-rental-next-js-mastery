import { Hero, MainContent } from "@/components";
import { SearchParams } from "@/types";

const Home = ({ searchParams }: SearchParams) => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <MainContent searchParams={searchParams} />
    </main>
  );
};

export default Home;
