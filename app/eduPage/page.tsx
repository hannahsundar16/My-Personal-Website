import { BarChart, Code, Cpu, Folder } from 'lucide-react';
import { ECProjectBox } from '../components/EducationCard';
import { SkillBox } from '../components/SkillCard';
import Navbar from '../components/header';

const eduPage = () => {
  return (
    <div>
      <div className="block mb-4 w-full">
        <Navbar />
      </div>

      <div className="flex items-center justify-center w-full">
        <div id="education" className="bg-white p-3 rounded-lg">
          <h1 className="text-4xl font-bold text-center underline text-black">
            Education & Skills
          </h1>
        </div>
      </div>

      <section className="flex flex-col gap-6 sm:gap-8 py-6 w-full px-4">
        
        <div className="w-full px-2">
          <ECProjectBox
            title="South Forsyth High School"
            org="AP Scholar with Distinction"
            color="#ffcbdb"
            borderColor="#fa98b6"
          />
        </div>
      </section>

      <div className="w-full flex items-center justify-center">
        <div className="grid max-w-6xl w-full pb-12 grid-cols-2 sm:grid-cols-4 gap-3 gap-x-2 sm:gap-4">

          {/* Programming Languages */}
          <div className="relative group flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full" style={{ backgroundColor: "#fbceb1" }}>
              <Code size={48} color="#000000" />
            </div>
            <span className="mt-2 text-sm font-semibold text-black">Programming</span>
            <div className="mt-3 flex flex-wrap items-center justify-center transition-all duration-300 z-10
                            opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                            relative sm:absolute sm:top-full sm:left-1/2 sm:transform sm:-translate-x-1/2">
              <SkillBox title="Python" color="#fbceb1" />
              <SkillBox title="SQL" color="#fbceb1" />
              <SkillBox title="Java" color="#fbceb1" />
              <SkillBox title="Swift" color="#fbceb1" />
              <SkillBox title="JavaScript" color="#fbceb1" />
              <SkillBox title="TypeScript" color="#fbceb1" />
              <SkillBox title="MATLAB" color="#fbceb1" />
              <SkillBox title="HTML/CSS (Tailwind)" color="#fbceb1" />
            </div>
          </div>

          {/* AI / Machine Learning */}
          <div className="relative group flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full" style={{ backgroundColor: "#ffcbdb" }}>
              <Cpu size={48} color="#000000" />
            </div>
            <span className="mt-2 text-sm font-semibold text-black">AI & ML</span>
            <div className="mt-3 flex flex-wrap items-center justify-center transition-all duration-300 z-10
                            opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                            relative sm:absolute sm:top-full sm:left-1/2 sm:transform sm:-translate-x-1/2">
              <SkillBox title="PyTorch" color="#ffcbdb" />
              <SkillBox title="TensorFlow" color="#ffcbdb" />
              <SkillBox title="OpenCV" color="#ffcbdb" />
              <SkillBox title="Transformers" color="#ffcbdb" />
            </div>
          </div>

          {/* Data & Cloud */}
          <div className="relative group flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full" style={{ backgroundColor: "#b1ddc9" }}>
              <BarChart size={48} color="#000000" />
            </div>
            <span className="mt-2 text-sm font-semibold text-black">Data & Cloud</span>
            <div className="mt-3 flex flex-wrap items-center justify-center transition-all duration-300 z-10
                            opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                            relative sm:absolute sm:top-full sm:left-1/2 sm:transform sm:-translate-x-1/2">
              <SkillBox title="Pandas" color="#b1ddc9" />
              <SkillBox title="NumPy" color="#b1ddc9" />
              <SkillBox title="AWS" color="#b1ddc9" />
              <SkillBox title="Firebase" color="#b1ddc9" />
              <SkillBox title="Simulink" color="#b1ddc9" />
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className="relative group flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full" style={{ backgroundColor: "#6cd0d0" }}>
              <Folder size={48} color="#000000" />
            </div>
            <span className="mt-2 text-sm font-semibold text-black">Tools & Frameworks</span>
            <div className="mt-3 flex flex-wrap items-center justify-center transition-all duration-300 z-10
                            opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                            relative sm:absolute sm:top-full sm:left-1/2 sm:transform sm:-translate-x-1/2">
              <SkillBox title="Git" color="#6cd0d0" />
              <SkillBox title="Firebase" color="#6cd0d0" />
              <SkillBox title="Microsoft Suite" color="#6cd0d0" />
              <SkillBox title="React" color="#6cd0d0" />
              <SkillBox title="Next.js" color="#6cd0d0" />
              <SkillBox title="Google Cloud" color="#6cd0d0" />
              <SkillBox title="Hugging Face" color="#6cd0d0" />
              <SkillBox title="Together AI" color="#6cd0d0" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default eduPage;
