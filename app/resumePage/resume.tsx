import Navbar from '../../components/header';
import { ResumePDFCard } from '../../components/ResumePDFCard';

const ResumePage = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="block mb-4 w-full">
        <Navbar />
      </div>

      {/* Section Header */}
      <section id="resume">
        <div className="flex items-center justify-center w-full mb-6">
          <div className="bg-white p-3 rounded-lg">
            <h1 className="text-4xl font-bold text-center underline bg-clip-text bg-gradient-to-r from-[#ffcbdb] to-[#fbceb1] text-black">
              Resume
            </h1>
          </div>
        </div>

        {/* Resume Card */}
        <div className="flex justify-center px-6">
          <a
            href="/resume/Hannah_Sundar_Resume.pdf" // PDF in public folder
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <ResumePDFCard
              title="Hannah Sundar Resume"
              org="Personal"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
