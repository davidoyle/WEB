import { ExternalLink, MapPin } from 'lucide-react';
import BeforeYouDoAnything from '../components/BeforeYouDoAnything';
import { screwedSituations } from '../data/content';

const Home = ({ onNavigate }) => (
  <div className="max-w-4xl mx-auto">
    <BeforeYouDoAnything />
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Start Here: Where Are You Getting Screwed?</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        This isn't a therapy site. It's a map, a weapons locker, and a receipts folder for injured workers in British Columbia
        who are getting run in circles by WorkSafeBC.
      </p>
    </div>
    <div className="space-y-8">
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">You do not need to know the law.</h2>
        <p className="text-gray-700 mb-4">You just need to know:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Where you are in the process</li>
          <li>What your next 1–3 moves are</li>
          <li>What to send, and to who</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {screwedSituations.map((situation, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{situation.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{situation.description}</p>
            <div className="mb-4">
              <h4 className="font-bold text-gray-900 mb-2">What this usually looks like:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {situation.indicators.map((indicator, i) => (
                  <li key={i}>{indicator}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-900 mb-2">Your priorities now:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {situation.priorities.map((priority, i) => (
                  <li key={i}>{priority}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Your next moves:</h4>
              <ul className="space-y-1">
                {situation.nextMoves.map((move, i) => (
                  <li
                    key={i}
                    className="text-blue-600 flex items-center cursor-pointer hover:underline"
                    onClick={() => onNavigate(move.section)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {move.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Site Actually Does For You</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="text-left">
            <h3 className="font-bold text-xl mb-3 text-gray-800">This site will NOT:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Magically win your case</li>
              <li>Replace legal advice when you can get it</li>
              <li>Talk you out of being angry (you're allowed to be)</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-xl mb-3 text-gray-800">This site WILL:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Show you where the system is weak</li>
              <li>Help you turn your story into evidence</li>
              <li>Give you ready-made language and templates to hit WorkSafeBC, employers, and politicians in ways they can't just hand-wave away</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-gray-700">Your next step, right now:</p>
        <ol className="list-decimal pl-5 text-left max-w-lg mx-auto mt-4 space-y-2 text-gray-700">
          <li>Pick the box that feels most like you</li>
          <li>Click through to the tools it points to</li>
          <li>Steal everything you find useful</li>
          <li>Put it in writing and send it</li>
        </ol>
        <p className="mt-6 text-gray-700 font-medium">
          Every email, every log entry, every uploaded document is another brick in a wall of proof. And institutions have a hard time walking through walls.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
