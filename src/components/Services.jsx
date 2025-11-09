import { Code, Smartphone, Palette, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Apps',
    description: 'Fast, accessible web applications built with React, Next.js, and modern APIs.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile experiences with React Native and Expo, shipped to stores.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Design systems, prototyping, and polished interfaces users love to use.',
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    description: 'CI/CD, analytics, and iteration loops to get you to market and scale quickly.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">Full-stack product development from idea to launch with tight feedback cycles.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
              <div className="mt-4 h-1 w-0 bg-gray-900 transition-all group-hover:w-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
