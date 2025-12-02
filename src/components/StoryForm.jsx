import React, { useMemo, useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  province: '',
  story: '',
  consent: false,
};

const StoryForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const hasRequiredFields = useMemo(
    () => formData.name && formData.email && formData.province && formData.story && formData.consent,
    [formData]
  );

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.province.trim()) newErrors.province = 'Province is required.';
    if (!formData.story.trim()) newErrors.story = 'Please share your story.';
    if (!formData.consent) newErrors.consent = 'Consent is required to submit your story.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage('');

    if (!validate()) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setStatus('success');
      setStatusMessage('Thank you. Your story has been submitted.');
      setFormData(initialFormState);
      if (onSuccess) onSuccess();
    } catch (error) {
      setStatus('error');
      setStatusMessage(error.message || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name*
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          placeholder="Your name"
        />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email*
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="province" className="block text-sm font-medium text-gray-700">
          Province*
        </label>
        <input
          id="province"
          name="province"
          type="text"
          value={formData.province}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          placeholder="e.g., British Columbia"
        />
        {errors.province && <p className="text-sm text-red-600 mt-1">{errors.province}</p>}
      </div>

      <div>
        <label htmlFor="story" className="block text-sm font-medium text-gray-700">
          Your Story*
        </label>
        <textarea
          id="story"
          name="story"
          rows={5}
          value={formData.story}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          placeholder="Share as much detail as you feel comfortable."
        />
        {errors.story && <p className="text-sm text-red-600 mt-1">{errors.story}</p>}
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
          />
        </div>
        <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
          I consent to anonymously share this story for analysis and pattern detection.*
        </label>
      </div>
      {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}

      {status === 'success' && <p className="text-green-700 text-sm">{statusMessage}</p>}
      {status === 'error' && <p className="text-red-700 text-sm">{statusMessage}</p>}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status === 'loading' || !hasRequiredFields}
          className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Submitting…' : 'Submit Story Securely'}
        </button>
      </div>
    </form>
  );
};

export default StoryForm;
