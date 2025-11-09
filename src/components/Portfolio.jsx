import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SaaS Dashboard',
    tag: 'Web App',
    gradient: 'from-indigo-500 to-cyan-500',
  },
  {
    title: 'Fitness Tracker',
    tag: 'Mobile App',
    gradient: 'from-rose-500 to-orange-500',
  },
  {
    title: 'E-commerce Store',
    tag: 'Web App',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Selected work</h2>
          <p className="mt-3 text-gray-600">A snapshot of products we recently shipped for clients across industries.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${p.gradient}`} />
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200">{p.tag}</span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
