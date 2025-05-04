// app/page.tsx (або pages/index.tsx)
import Translator from "@/app/components/Translator";

const HomePage = () => {
  return (
      <div className={'bg-[#141F47] h-full'}>
        <Translator />
      </div>
  );
};

export default HomePage;