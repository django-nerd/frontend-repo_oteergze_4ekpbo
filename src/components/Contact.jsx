import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! We will reach out shortly.');
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let’s build together</h2>
            <p className="mt-3 text-gray-600">Tell us about your goals and we’ll propose the fastest path to launch.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• Typical start within 3–5 business days</li>
              <li>• Fixed scopes with weekly demos</li>
              <li>• Friendly team of senior engineers and designers</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Project details</label>
                <textarea required rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button type="submit" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
                Send request
                <Send className="ml-2 h-4 w-4" />
              </button>
              {status && <p className="text-sm text-green-600">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
