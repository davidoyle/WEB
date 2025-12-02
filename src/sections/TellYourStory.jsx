import { useState } from 'react';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  postalCode: '',
  incidentMonthYear: '',
  issueTags: [],
  story: '',
  publicPermission: 'private',
  consent: false,
};

const ISSUE_OPTIONS = [
  'Employer did not report my injury',
  'Case manager not returning calls/emails',
  'Benefits stopped without clear explanation',
  'Psychological injury minimized or ignored',
  'Medical advisor overruled my doctor',
  'Security or intimidation tactics used',
  'Decision letters missing or hard to access',
  'Other',
];

const TellYourStory = ({ onNavigate }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'consent') {
      setForm((prev) => ({ ...prev, consent: checked }));
    } else if (name === 'publicPermission') {
      setForm((prev) => ({ ...prev, publicPermission: value }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleIssueToggle = (option) => {
    setForm((prev) => {
      const exists = prev.issueTags.includes(option);
      return {
        ...prev,
        issueTags: exists ? prev.issueTags.filter((o) => o !== option) : [...prev.issueTags, option],
      };
    });
  };

  const handleSubmit = async () => {
    setStatus('loading');
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      let data
      const contentType = response.headers.get('content-type') || ''

      try {
        if (contentType.includes('application/json')) {
          data = await response.json()
        } else {
          const text = await response.text()
          throw new Error(text || 'Unexpected response from server.')
        }
      } catch (parseError) {
        throw new Error('Unexpected response from server.')
      }

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || 'Submission failed')
      }

      setStatus('success');
      setSuccess('Thank you. Your story has been submitted.');
      setForm(initialForm);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Tell Your Story (Secure)</h1>
      <p className="text-gray-700 mb-4">
        This form lets you share what happened in your WorkSafeBC claim. We use these stories to spot patterns and build better
        tools for workers. We can’t promise your case will be taken on or that the system won’t stonewall you, but we
        <span className="font-semibold"> will</span> treat your information with care.
      </p>
      <p className="text-gray-700 mb-6">
        If we share any part of your story publicly, all individual names — medical advisors, claims managers, employers, and
        witnesses — will be redacted. You can also choose to keep your story fully private. This is completely free.
      </p>

      {success && (
        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
          {success}
        </div>
      )}
      {status === 'error' && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          {error || 'Something went wrong while submitting your story. Please try again later.'}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name<span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="postalCode">
              Postal code (optional)
            </label>
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              value={form.postalCode}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="incidentMonthYear">
              Month/Year of incident or decision<span className="text-red-600">*</span>
            </label>
            <input
              id="incidentMonthYear"
              name="incidentMonthYear"
              type="text"
              required
              placeholder="e.g., March 2024"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              value={form.incidentMonthYear}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <span className="block text-sm font-medium text-gray-700">Issue tags (check all that apply)</span>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {ISSUE_OPTIONS.map((option) => (
              <label key={option} className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  checked={form.issueTags.includes(option)}
                  onChange={() => handleIssueToggle(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="story">
            Tell us what happened<span className="text-red-600">*</span>
          </label>
          <textarea
            id="story"
            name="story"
            required
            rows={6}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            value={form.story}
            onChange={handleChange}
          />
        </div>

        <div>
          <span className="block text-sm font-medium text-gray-700">Can we share your story publicly?</span>
          <div className="mt-2 space-y-2">
            <label className="flex items-center space-x-3 text-sm text-gray-700" htmlFor="public">
              <input
                id="public"
                type="radio"
                name="publicPermission"
                value="public"
                checked={form.publicPermission === 'public'}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span>You may share my story publicly, with all names redacted</span>
            </label>
            <label className="flex items-center space-x-3 text-sm text-gray-700" htmlFor="private">
              <input
                id="private"
                type="radio"
                name="publicPermission"
                value="private"
                checked={form.publicPermission === 'private'}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span>Do not share my story publicly; use it only for pattern tracking</span>
            </label>
          </div>
        </div>

        <div className="rounded-md border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
          This is not legal advice. Submitting does not guarantee representation or a specific outcome. Institutions may still
          stonewall or delay. We will redact individual names if any part of your story is shared publicly.
        </div>

        <div className="flex items-start space-x-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            checked={form.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
          />
          <label className="text-sm text-gray-800" htmlFor="consent">
            I understand this is not legal advice and that you can’t guarantee an outcome. I consent to you storing and reviewing
            this information.
          </label>
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`rounded-md bg-gray-900 px-6 py-3 text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
              status === 'loading' ? 'cursor-not-allowed opacity-75' : ''
            }`}
          >
            {status === 'loading' ? 'Submitting…' : 'Submit securely'}
          </button>
          <button
            type="button"
            className="text-sm text-blue-600 underline"
            onClick={() => onNavigate('home')}
          >
            ← Back to home
          </button>
        </div>
      </form>
    </div>
  );
};

export default TellYourStory;
