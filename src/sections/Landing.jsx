import React, { useRef, useState } from 'react';
import { Shield } from 'lucide-react';
import StoryForm from '../components/StoryForm';

const Landing = ({ onStart }) => {
  const [showStoryForm, setShowStoryForm] = useState(false);
  const formRef = useRef(null);

  const handleStoryButtonClick = () => {
    setShowStoryForm((open) => {
      const nextState = !open;

      if (!open) {
        requestAnimationFrame(() => {
          formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }

      return nextState;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Shield className="w-16 h-16 text-red-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-6">The Worker’s Toolkit</h1>
        <p className="text-xl text-gray-700 mb-8">
          Evidence, strategy, and leverage for injured workers in B.C. getting stonewalled by WorkSafeBC.
        </p>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
        <p className="font-bold text-red-800">This is not a legal service. It’s a survival kit.</p>
        <p className="text-red-700">
          If you’ve been denied care, cut off benefits, or told your injury is “resolved” while you’re still in pain—this is
          for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">For Workers</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Turn confusion into clear next steps</li>
            <li>Document your case like a pro</li>
            <li>Push back with ready-made language</li>
            <li>Escalate to MLAs, Ministers, and the Premier</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">Anonymous? You’re safe.</h3>
          <p>No account needed. No tracking. No ads.</p>
          <p>Everything works on your phone. Save as PDFs. Use offline.</p>
        </div>
      </div>

      <div className="text-center mb-12">
        <button
          onClick={onStart}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
        >
          Start Here — Where Are You Getting Screwed?
        </button>
      </div>

      <div className="border-t pt-8" ref={formRef}>
        <h3 className="font-bold mb-2">Want to help build this?</h3>
        <p className="mb-4">Share your anonymous story to help expose patterns.</p>
        <button
          type="button"
          onClick={handleStoryButtonClick}
          className="bg-gray-800 text-white px-6 py-2 rounded"
        >
          {showStoryForm ? 'Hide Story Form' : 'Upload Your Story (Secure)'}
        </button>

        {showStoryForm && (
          <div className="mt-6">
            <StoryForm onSuccess={() => setShowStoryForm(true)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
