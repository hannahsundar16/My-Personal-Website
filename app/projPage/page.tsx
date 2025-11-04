// ./app/projPage/page.tsx
import Navbar from '../components/header';
import { IndBox } from '../components/IndependentCard';

const projPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="block mb-4 w-full">
        <Navbar />
      </div>
      <section id="proj" className="w-full flex flex-col items-center">
        <div className="flex items-center justify-center w-full mb-6">
          <div className="bg-white p-3 pb-0 pt-3 rounded-lg">
            <h1 className="text-4xl font-bold text-center bg-clip-text underline text-black bg-gradient-to-r from-[#ffcbdb] to-[#fbceb1]">
              Recent Projects
            </h1>
          </div>
        </div>    

        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">

          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
            <div className="w-96 h-72 p-2">
              <IndBox
                title="FinTech Agentic AI"
                org={
                  <div className="h-32 overflow-auto">
                    Developed a financial AI agent designed to assist users in making intelligent, automated investment and budgeting decisions. The project leverages machine learning algorithms and predictive analytics to optimize personal finance management, providing insights into spending patterns, risk assessment, and portfolio optimization.
                  </div>
                }
                color="#fbceb1"
                borderColor="#e0b594"
              />
            </div>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
            <div className="w-96 h-72 p-2">
              <IndBox
                title="Soarin' Around the World"
                org={
                  <div className="h-32 overflow-auto">
                    Created a virtual travel adventure application aimed at increasing digital literacy among older communities. The app enables immersive experiences around global destinations, combining interactive navigation, educational content, and gamified challenges to help seniors become more comfortable with technology while exploring cultural and historical landmarks.
                  </div>
                }
                color="#ffcbdb"
                borderColor="#fa98b6"
              />
            </div>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
            <div className="w-96 h-72 p-2">
              <IndBox
                title="EEG-Based Music Classification"
                org={
                  <div className="h-32 overflow-auto">
                    Designed a research project using EEG signals to classify melodies and musical patterns. The system analyzes brainwave data to detect and differentiate between musical sequences, providing insights into neural responses to music. This project bridges neuroscience and computer science, with potential applications in music therapy and brain-computer interface research.
                  </div>
                }
                color="#b1ddc9"
                borderColor="#86b0a0"
              />
            </div>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
            <div className="w-96 h-72 p-2">
              <IndBox
                title="KSU Housing Market Prediction"
                org={
                  <div className="h-32 overflow-auto">
                    Developed a data science model to predict housing market trends using historical real estate data. Leveraged machine learning techniques, including regression analysis and feature engineering, to forecast prices and assess market dynamics. The project provides actionable insights for potential homebuyers, investors, and policy planners.
                  </div>
                }
                color="#6cd0d0"
                borderColor="#519e9e"
              />
            </div>
          </a>

        </div>
      </section>
    </div>
  );
};

export default projPage;