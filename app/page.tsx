// app/page.tsx (або pages/index.tsx)
import Translator from "@/app/components/Translator";

const HomePage = () => {
  return (
      <div className={'bg-[#141F47] h-full  sm:h-screen'}>
        <Translator />
      </div>
  );
};

export default HomePage;