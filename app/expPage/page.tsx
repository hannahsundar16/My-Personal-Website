import Navbar from '../components/header';
import { UCProjectBox } from '../components/UnclickableCard';

const ExpPage = () => {
  return (
    <div>
      <div className="block mb-4 w-full">
        <Navbar />
      </div>

      <section id="exp">
        <div className="flex items-center justify-center w-full">
          <div className="bg-white p-3 rounded-lg">
            <h1 className="text-4xl font-bold text-center bg-clip-text underline text-black bg-gradient-to-r from-[#ffcbdb] to-[#fbceb1]">
              Recent Experience
            </h1>
          </div>
        </div>

        <div className="w-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-6 pt-6 pb-10 xl:p-10 px-6">
          <UCProjectBox
            title="STEM@GTRI Intern"
            org="CIPHER Lab"
            date="2025 - Present"
            desc="As an intern with the Athena Initiative, I research attack strategies targeting large language models. My projects focus on adversarial perturbations, prompt injection, and model extraction. Through this work, I am contributing to the safety and resilience of AI systems. I also collaborate with peers to analyze emerging threats in machine learning. This internship has deepened my interest in ethical AI and responsible research practices."
            color="#fbceb1"
            borderColor="#e0b594"
          />

          <UCProjectBox
            title="Athena Initiative Intern"
            org="Athena Initiative"
            date="2025 - Present"
            desc="I serve as a STEM@GTRI intern at the CIPHER Lab, where I support initiatives that empower young women in technology. I assist with planning and managing outreach activities designed to increase interest in STEM across Atlanta. My work emphasizes fostering collaboration and mentoring girls exploring careers in science and engineering. This role has given me exposure to professional research environments and leadership in technical outreach. I continue to strengthen both my technical and organizational skills in this internship."
            color="#b1ddc9"
            borderColor="#86b0a0"
          />

          <UCProjectBox
            title="Stanford Harris Neuroscience Intern"
            org="Stanford University"
            date="Summer 2025"
            desc="I was selected as one of 12 students nationwide for the Stanford Harris Neuroscience Internship. This year-long program will expose me to cutting-edge neuroscience research. I will participate in journal club sessions to learn from faculty and peers. The internship will strengthen my understanding of experimental methods and scientific communication. It also motivated me to pursue further study in neuroscience and medicine."
            color="#6cd0d0"
            borderColor="#519e9e"
          />

          <UCProjectBox
            title="Founder"
            org="Rhythms of Joy"
            date="2021 - Present"
            desc="I founded Rhythms of Joy to bring music and service to senior citizens. Over four years, I organized more than 70 concerts across local senior living facilities. I recruited student musicians and coordinated performances to foster intergenerational connections. The program has impacted hundreds of residents, creating meaningful community engagement. For this work, I received the Gold President’s Volunteer Service Award and was featured in the Forsyth County News."
            color="#ffcbdb"
            borderColor="#fa98b6"
          />

          <UCProjectBox
            title="National Tournament Director & Chapter Head of Georgia"
            org="Mustang Math"
            date="2021 - Present"
            desc="I serve as the Tournament Director for Mustang Math in Georgia, running competitions across schools statewide. I lead a development team through bi-weekly meetings to prepare events. My outreach has expanded participation to over 600 students in the U.S. and 1,000 internationally. I regularly present at MathCounts competitions to recruit new students. Through this work, I have promoted math education and leadership opportunities for middle schoolers."
            color="#fbceb1"
            borderColor="#e0b594"
          />

          <UCProjectBox
            title="Vice President"
            org="Girls Who Code @ SFHS"
            date="2025 - Present"
            desc="As Vice President of the Girls Who Code chapter at SFHS, I provide coding opportunities for girls across the country. I support hackathons that empower underrepresented genders in technology. I also help develop sponsorships and partnerships to grow chapter resources. Our group fosters digital literacy and encourages girls to pursue careers in computer science. This role combines my passion for leadership and technical advocacy."
            color="#b1ddc9"
            borderColor="#86b0a0"
          />
        </div>
      </section>
    </div>
  );
};

export default ExpPage;