import { useEffect, useMemo, useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { getSupabaseClient } from '../lib/supabaseClient';
import { wcatCases } from '../wcat';

const foundingStatement =
  'This is an independent record. It belongs to no government body, no insurer, no law firm. It exists because one injured worker built it, and because what happened to them happens to thousands of people every year in British Columbia. Everything here — every tactic, every template, every precedent, every story — was built to change that.';

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

const FILTERS = ['all', 'denied', 'delayed', 'appealed', 'resolved', 'ongoing'];

const inputClassName =
  'mt-1 w-full border border-[var(--border-default)] bg-[var(--bg-secondary)] px-3 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--border-accent)] focus:outline-none';

const inferStatus = tags => {
  const t = (tags || []).join(' ').toLowerCase();
  if (t.includes('den')) return 'denied';
  if (t.includes('delay') || t.includes('ignore')) return 'delayed';
  if (t.includes('appeal') || t.includes('wcat')) return 'appealed';
  if (t.includes('resolve')) return 'resolved';
  return 'ongoing';
};

const inferClaimType = tags => {
  const value = (tags || [])[0];
  return value ? String(value) : 'General claim';
};

const matchWcatCases = claimType => {
  const query = String(claimType || '').toLowerCase();
  return wcatCases
    .filter(item =>
      [item.title, item.fullLabel, item.shortLabel, ...(item.issueTags || [])]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(query)
    )
    .slice(0, 2);
};

const TellYourStory = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [archiveItems, setArchiveItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [regionFilter, setRegionFilter] = useState('all');
  const [claimFilter, setClaimFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadArchive = async () => {
      try {
        const supabase = getSupabaseClient();
        const { data, error: loadError } = await supabase
          .from('stories')
          .select('id, postal_code, issue_tags, story, incident_month_year, created_at')
          .eq('public_permission', true)
          .order('created_at', { ascending: false })
          .limit(100);

        if (!mounted) return;
        if (loadError) throw loadError;
        setArchiveItems(data || []);
      } catch {
        if (!mounted) return;
        setArchiveItems([]);
      }
    };

    loadArchive();
    return () => {
      mounted = false;
    };
  }, [success]);

  const decoratedStories = useMemo(
    () =>
      archiveItems.map(item => {
        const statusValue = inferStatus(item.issue_tags);
        const claimType = inferClaimType(item.issue_tags);
        const region = item.postal_code || 'BC';
        return {
          ...item,
          statusValue,
          claimType,
          region,
          relatedCases: matchWcatCases(claimType),
        };
      }),
    [archiveItems]
  );

  const regionOptions = useMemo(
    () => ['all', ...Array.from(new Set(decoratedStories.map(item => item.region)))],
    [decoratedStories]
  );

  const claimOptions = useMemo(
    () => ['all', ...Array.from(new Set(decoratedStories.map(item => item.claimType)))],
    [decoratedStories]
  );

  const filteredStories = useMemo(
    () =>
      decoratedStories.filter(item => {
        const statusMatch = activeFilter === 'all' || item.statusValue === activeFilter;
        const regionMatch = regionFilter === 'all' || item.region === regionFilter;
        const claimMatch = claimFilter === 'all' || item.claimType === claimFilter;
        return statusMatch && regionMatch && claimMatch;
      }),
    [decoratedStories, activeFilter, regionFilter, claimFilter]
  );

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (name === 'consent') {
      setForm(prev => ({ ...prev, consent: checked }));
    } else if (name === 'publicPermission') {
      setForm(prev => ({ ...prev, publicPermission: value }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleIssueToggle = option => {
    setForm(prev => {
      const exists = prev.issueTags.includes(option);
      return {
        ...prev,
        issueTags: exists ? prev.issueTags.filter(o => o !== option) : [...prev.issueTags, option],
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

      const data = await response.json();

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || 'Submission failed');
      }

      setStatus('success');
      setSuccess({
        id: data.storyId,
        workerNumber: data.workerNumber ?? null,
        totalStories: data.totalStories ?? null,
        claimType: inferClaimType(form.issueTags),
        region: form.postalCode || 'BC',
      });

      try {
        const supabase = getSupabaseClient();
        supabase
          .from('tool_events')
          .insert({
            event_type: 'story_submitted',
            metadata: { claimType: inferClaimType(form.issueTags), region: form.postalCode || 'BC' },
          })
          .then(() => {})
          .catch(() => {});
      } catch {}

      setForm(initialForm);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong');
    }
  };

  if (success) {
    return (
      <section className="section-shell py-16">
        <div className="mx-auto max-w-3xl space-y-6 border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent-confirm)]">Record added</p>
          <h1 className="headline-md !text-5xl">
            Worker #{String(success.workerNumber || success.id || 0).padStart(4, '0')}. {success.region}.{' '}
            {success.claimType}.
          </h1>
          <p className="body-text">
            You are not alone in this. {success.totalStories ?? filteredStories.length} other workers
            have documented similar experiences.
          </p>
          <p className="founding-statement">{foundingStatement}</p>
          <Button onClick={() => setSuccess(null)}>
            Continue to your toolkit <span className="arrow-glyph">→</span>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <div className="section-shell space-y-10 py-12">
      <header className="space-y-3">
        <h1 className="headline-md !text-5xl">The Record</h1>
        <p className="body-text italic">
          An independent archive of WorkSafeBC claim experiences in British Columbia.
        </p>
      </header>

      <section className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map(filter => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`border px-3 py-2 font-mono text-[0.72rem] uppercase tracking-wider ${activeFilter === filter ? 'border-[var(--border-accent)] bg-[var(--bg-secondary)] text-[var(--accent)]' : 'border-[var(--border-default)] text-[var(--text-secondary)]'}`}
            >
              {filter}
            </button>
          ))}
          <select
            value={regionFilter}
            onChange={e => setRegionFilter(e.target.value)}
            className="border border-[var(--border-default)] bg-[var(--bg-secondary)] px-3 py-2 font-mono text-[0.72rem] uppercase tracking-wider text-[var(--text-secondary)]"
          >
            {regionOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={claimFilter}
            onChange={e => setClaimFilter(e.target.value)}
            className="border border-[var(--border-default)] bg-[var(--bg-secondary)] px-3 py-2 font-mono text-[0.72rem] uppercase tracking-wider text-[var(--text-secondary)]"
          >
            {claimOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          {filteredStories.map(item => (
            <article
              key={item.id}
              className="border border-[var(--border-default)] border-l-[var(--border-strong)] bg-[var(--bg-secondary)] p-4"
            >
              <p className="font-mono text-[0.72rem] uppercase tracking-wider text-[var(--text-muted)]">
                Worker #{String(item.id).padStart(4, '0')} · {item.region} · {item.claimType} · {item.statusValue}
              </p>
              <p className="mt-3 text-[var(--text-secondary)]">
                {expandedId === item.id ? item.story : `${(item.story || '').slice(0, 220)}${item.story?.length > 220 ? '…' : ''}`}
              </p>
              {expandedId === item.id && item.relatedCases?.length ? (
                <div className="mt-3 border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-3">
                  <p className="font-mono text-[0.68rem] uppercase tracking-wider text-[var(--text-muted)]">
                    Similar WCAT cases
                  </p>
                  <ul className="mt-2 space-y-1">
                    {item.relatedCases.map(caseItem => (
                      <li key={caseItem.id}>
                        <a href={`/wcat#${caseItem.id}`} className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                          {caseItem.caseNumber || caseItem.citation}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <button
                type="button"
                onClick={() => setExpandedId(current => (current === item.id ? null : item.id))}
                className="mt-3 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--accent)]"
              >
                {expandedId === item.id ? 'Collapse record' : 'Expand record'} →
              </button>
            </article>
          ))}
        </div>
      </section>

      <hr className="thin-divider" />

      <section className="space-y-6">
        <div>
          <h2 className="headline-md !text-3xl">Your story is evidence.</h2>
          <p className="body-text mt-2">
            Not of your pain — of a pattern. Every account submitted here becomes part of an
            independent record that cannot be dismissed as a single complaint. Anonymous. Secure.
            Permanent.
          </p>
        </div>

        {status === 'error' ? (
          <div className="border border-[var(--accent-urgent)] bg-[var(--bg-secondary)] p-4 text-[var(--text-secondary)]">
            {error || 'Something went wrong while submitting your story. Please try again later.'}
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-4">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">What we are</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                A worker-led project trying to document what’s actually happening in the B.C.
                compensation system.
              </li>
              <li>A toolkit to help injured workers organize their evidence and push back.</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">What we’re not</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[var(--text-secondary)]">
              <li>We are not WorkSafeBC.</li>
              <li>We are not your employer or your union.</li>
              <li>We are not a law firm and we don’t sell or trade your data.</li>
            </ul>
          </Card>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-6"
        >
          <div className="rounded-sm border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
            <p className="font-semibold text-[var(--text-primary)]">How we use this</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                Your story will never be shared with WorkSafeBC, your employer, or any third party
                without your explicit permission.
              </li>
              <li>You can tell your story without using your real name or email.</li>
              <li>
                We use these stories to understand patterns, improve the toolkit, and show
                decision-makers what’s really happening.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)]" htmlFor="name">
                Name (optional – you can use an alias)
              </label>
              <input id="name" name="name" type="text" className={inputClassName} value={form.name} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)]" htmlFor="phone">
                Phone (optional)
              </label>
              <input id="phone" name="phone" type="text" className={inputClassName} value={form.phone} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)]" htmlFor="email">
                Email (optional – only if you want a reply)
              </label>
              <input id="email" name="email" type="email" className={inputClassName} value={form.email} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)]" htmlFor="postalCode">
                Postal code (optional)
              </label>
              <input id="postalCode" name="postalCode" type="text" className={inputClassName} value={form.postalCode} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)]" htmlFor="incidentMonthYear">
                Month/Year of incident or decision<span className="text-[var(--accent-urgent)]">*</span>
              </label>
              <input
                id="incidentMonthYear"
                name="incidentMonthYear"
                type="text"
                required
                placeholder="e.g., March 2024"
                className={inputClassName}
                value={form.incidentMonthYear}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <span className="block text-sm font-medium text-[var(--text-primary)]">Issue tags (check all that apply)</span>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {ISSUE_OPTIONS.map(option => (
                <label key={option} className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[var(--border-default)] text-[var(--accent)] focus:ring-[var(--accent)]"
                    checked={form.issueTags.includes(option)}
                    onChange={() => handleIssueToggle(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)]" htmlFor="story">
              Tell us what happened<span className="text-[var(--accent-urgent)]">*</span>
            </label>
            <textarea
              id="story"
              name="story"
              required
              rows={6}
              className={inputClassName}
              value={form.story}
              onChange={handleChange}
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-[var(--text-primary)]">Can we share your story publicly?</span>
            <div className="mt-2 space-y-2">
              <label className="flex items-center space-x-3 text-sm text-[var(--text-secondary)]" htmlFor="public">
                <input
                  id="public"
                  type="radio"
                  name="publicPermission"
                  value="public"
                  checked={form.publicPermission === 'public'}
                  onChange={handleChange}
                  className="h-4 w-4 border-[var(--border-default)] text-[var(--accent)] focus:ring-[var(--accent)]"
                />
                <span>You may share my story publicly, with all names redacted</span>
              </label>
              <label className="flex items-center space-x-3 text-sm text-[var(--text-secondary)]" htmlFor="private">
                <input
                  id="private"
                  type="radio"
                  name="publicPermission"
                  value="private"
                  checked={form.publicPermission === 'private'}
                  onChange={handleChange}
                  className="h-4 w-4 border-[var(--border-default)] text-[var(--accent)] focus:ring-[var(--accent)]"
                />
                <span>Do not share my story publicly; use it only for pattern tracking</span>
              </label>
            </div>
          </div>

          <div className="rounded-sm border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
            This is not legal advice. Submitting does not guarantee representation or a specific
            outcome. Institutions may still stonewall or delay. We will redact individual names if
            any part of your story is shared publicly.
          </div>

          <div className="flex items-start space-x-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              checked={form.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-[var(--border-default)] text-[var(--accent)] focus:ring-[var(--accent)]"
            />
            <label className="text-sm text-[var(--text-secondary)]" htmlFor="consent">
              I understand this is not legal advice and that you can’t guarantee an outcome. I consent
              to you storing and reviewing this information.
            </label>
          </div>

          <div className="flex items-center space-x-4">
            <Button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting…' : 'Submit securely'}
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default TellYourStory;
