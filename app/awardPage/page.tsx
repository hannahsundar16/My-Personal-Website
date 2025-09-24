import { ACProjectBox } from '../components/AwardCard';
import Navbar from '../components/header';

const awardPage = () => {
  return (
    <div>
      <div className="block mb-4 w-full">
        <Navbar />
      </div>

      <div className="flex items-center justify-center w-full">
        <div id="education" className="bg-white p-3 rounded-lg">
          <h1 className="text-4xl font-bold text-center underline text-black">
            Awards
          </h1>
        </div>
      </div>

      <div className="flex py-6 items-center justify-center w-full px-4">
        <div
          className="w-full max-w-5xl p-6 rounded-xl shadow-xl space-y-4"
          style={{
            background: 'linear-gradient(to bottom, #fbceb1, #ffcbdb)',
          }}
        >
          <h2 className="text-xl font-semibold">Achievements</h2>
          <div className="border-l-2 border-[#000000] pl-4">
            <ACProjectBox
              title="National Champion - 1st Place at FBLA National Leadership Conference for Introduction to Programming"
              org="Top 1% of 96+ teams"
            />
          </div>
          <div className="border-l-2 border-[#000000] pl-4">
            <ACProjectBox title="USACO Silver Medalist" />
          </div>
          <div className="border-l-2 border-[#000000] pl-4">
            <ACProjectBox
              title="National American Computer Science League Finalist"
              org="Top 10% of 10,000+"
            />
          </div>
          <div className="border-l-2 border-[#000000] pl-4">
            <ACProjectBox
              title="National League of Performing Arts Gold Medalist"
              org="Invited to perform my solo debut at Carnegie Hall"
            />
          </div>
          <div className="border-l-2 border-[#000000] pl-4">
            <ACProjectBox
              title="2x National Presidential Volunteer Service Award Gold Medalist"
            />
            </div>
          <div className="border-l-2 border-[#000000] pl-4">
            <ACProjectBox
              title="Atlanta Music Club Scholarship Recipient"
              org="Awarded $1,000 scholarship for music studies"
            />
          </div>
          <div className="border-l-2 border-[#000000] pl-4">
            <ACProjectBox
              title="3x Southeastern Young Artist Piano Competition Winner"
            />
          </div>
          <div className="border-l-2 border-[#000000] pl-4">
            <ACProjectBox
              title="OPUS Music Competition 1st Place State Winner"
            />
          </div>
          <div className="border-l-2 border-[#000000] pl-4">
            <ACProjectBox
              title="2x Georgia Music Teacher's Association Solo Piano Top Prize"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default awardPage;