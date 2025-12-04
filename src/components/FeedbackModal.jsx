import { useState } from 'react'
import { supabase } from '../../utils/supabase'

const FeedbackModal = ({ isOpen, onClose }) => {
  const [feedback, setFeedback] = useState({ helpful: null, comment: '' })
  const [status, setStatus] = useState({ saving: false, message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!feedback.helpful) return
    if (!supabase) {
      setStatus({ saving: false, message: 'Feedback storage is offline right now.' })
      return
    }
    setStatus({ saving: true, message: '' })
    const { error } = await supabase.from('feedback').insert({
      helpful: feedback.helpful,
      comment: feedback.comment,
      created_at: new Date().toISOString(),
    })
    if (error) {
      setStatus({ saving: false, message: 'Could not save feedback right now.' })
      return
    }
    setStatus({ saving: false, message: 'Thanks. Saved.' })
    setFeedback({ helpful: null, comment: '' })
    setTimeout(onClose, 800)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Feedback</p>
            <h2 className="text-xl font-bold text-gray-900">Was this page helpful?</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close feedback"
            className="rounded-full p-1 text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            {['yes', 'no'].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setFeedback((prev) => ({ ...prev, helpful: value }))}
                className={`flex-1 rounded-lg border px-4 py-3 text-center text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  feedback.helpful === value ? 'border-red-600 bg-red-50 text-red-700' : 'border-gray-200 bg-gray-50 text-gray-800'
                }`}
                aria-pressed={feedback.helpful === value}
              >
                {value === 'yes' ? 'Yes' : 'No'}
              </button>
            ))}
          </div>
          <label className="block text-sm font-semibold text-gray-800" htmlFor="feedback-comment">
            Optional note
            <textarea
              id="feedback-comment"
              value={feedback.comment}
              onChange={(e) => setFeedback((prev) => ({ ...prev, comment: e.target.value }))}
              className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              rows={3}
              placeholder="Anything missing or confusing?"
            />
          </label>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Stored securely in Supabase.</span>
            <button
              type="submit"
              disabled={!feedback.helpful || status.saving}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {status.saving ? 'Saving…' : 'Submit'}
            </button>
          </div>
          {status.message ? <p className="text-sm text-gray-700">{status.message}</p> : null}
        </form>
      </div>
    </div>
  )
}

export default FeedbackModal
