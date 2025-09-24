import Navbar from '../components/header';
import { UCProjectBox } from '../components/UnclickableCard';

const ProjPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="block mb-4 w-full">
        <Navbar />
      </div>
      <section id="proj" className="w-full flex flex-col items-center">
        <div className="flex items-center justify-center w-full mb-6">
          <div className="bg-white p-3 rounded-lg">
            <h1 className="text-4xl font-bold text-center bg-clip-text underline text-black bg-gradient-to-r from-[#ffcbdb] to-[#fbceb1]">
              Recent Projects
            </h1>
          </div>
        </div>  

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center max-w-5xl">

          <UCProjectBox
            title="FinTech Agentic AI"
            org="Independent Project"
            date="2025"
            desc={`Developed an intelligent financial AI agent to assist users in investment and budgeting decisions. Leveraged predictive analytics and machine learning algorithms to provide actionable insights on spending patterns, portfolio optimization, and risk assessment. Designed the system to be user-friendly and adaptive, helping individuals make informed financial choices with minimal technical expertise.`}
            color="#fbceb1"
            borderColor="#e0b594"
          />

          <UCProjectBox
            title="Soarin' Around the World"
            org="Independent Project"
            date="2025"
            desc={`Created a virtual travel adventure application aimed at increasing digital literacy among older communities. The app provides immersive experiences around global destinations, combining interactive navigation, gamified challenges, and educational content. Encourages seniors to engage with technology in a meaningful way while exploring cultural and historical landmarks.`}
            color="#ffcbdb"
            borderColor="#fa98b6"
          />

          <UCProjectBox
            title="EEG-Based Music Classification"
            org="Independent Research Project"
            date="2025"
            desc={`Designed a system to classify melodies and musical patterns using EEG signals. Analyzed brainwave data to detect and differentiate musical sequences, providing insight into neural responses to music. This project bridges neuroscience and computer science and has potential applications in music therapy, brain-computer interfaces, and cognitive research.`}
            color="#b1ddc9"
            borderColor="#86b0a0"
          />

          <UCProjectBox
            title="KSU Housing Market Prediction"
            org="Kennesaw State University"
            date="2024"
            desc={`Developed a data science model to predict housing market trends using historical real estate data. Utilized regression analysis, feature engineering, and predictive modeling to forecast housing prices and assess market dynamics. The project provides actionable insights for potential homebuyers, investors, and policy planners, highlighting key factors driving market fluctuations.`}
            color="#6cd0d0"
            borderColor="#519e9e"
          />

        </div>
      </section>
    </div>
  );
};

export default ProjPage;