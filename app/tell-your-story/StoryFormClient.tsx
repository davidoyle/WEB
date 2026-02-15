'use client';

import { useState } from 'react';

interface StoryResponse {
  ok: boolean;
  error?: string;
}

const initialState = {
  name: '',
  phone: '',
  email: '',
  postalCode: '',
  incidentMonthYear: '',
  story: '',
  consent: false,
};

export default function StoryFormClient() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data: StoryResponse = (await response.json()) as StoryResponse;
      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? 'Submission failed');
      }

      setStatus('success');
      setMessage('Thank you. Your story has been submitted.');
      setForm(initialState);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  return (
    <section className="w-full max-w-2xl space-y-12 text-left">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Tell Your Story
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Share what happened in your WorkSafeBC claim. We use this to identify patterns and improve
          tools for workers.
        </p>
      </div>

      <form
        onSubmit={event => {
          void handleSubmit(event);
        }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            value={form.name}
            onChange={e => {
              setForm(prev => ({ ...prev, name: e.target.value }));
            }}
            className="w-full border border-gray-300 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={e => {
              setForm(prev => ({ ...prev, email: e.target.value }));
            }}
            className="w-full border border-gray-300 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              value={form.phone}
              onChange={e => {
                setForm(prev => ({ ...prev, phone: e.target.value }));
              }}
              className="w-full border border-gray-300 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="postalCode" className="block text-lg font-medium text-gray-700">
              Postal code
            </label>
            <input
              id="postalCode"
              value={form.postalCode}
              onChange={e => {
                setForm(prev => ({ ...prev, postalCode: e.target.value }));
              }}
              className="w-full border border-gray-300 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="incidentMonthYear" className="block text-lg font-medium text-gray-700">
            Month/year of incident or decision *
          </label>
          <input
            id="incidentMonthYear"
            value={form.incidentMonthYear}
            onChange={e => {
              setForm(prev => ({ ...prev, incidentMonthYear: e.target.value }));
            }}
            required
            className="w-full border border-gray-300 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="MM/YYYY"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="story" className="block text-lg font-medium text-gray-700">
            Your experience *
          </label>
          <textarea
            id="story"
            rows={10}
            value={form.story}
            onChange={e => {
              setForm(prev => ({ ...prev, story: e.target.value }));
            }}
            required
            className="w-full border border-gray-300 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Share your story..."
          />
        </div>

        <label className="flex items-start gap-3 text-gray-700">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={e => {
              setForm(prev => ({ ...prev, consent: e.target.checked }));
            }}
            required
            className="mt-1"
          />
          <span>I consent to submitting this information.</span>
        </label>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Story'}
        </button>

        {message ? (
          <p className={status === 'error' ? 'text-red-700' : 'text-gray-700'}>{message}</p>
        ) : null}
      </form>
    </section>
  );
}
