import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[60rem] rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 blur-3xl opacity-60" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">Design • Web • Mobile</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              We craft digital products that ship fast and scale
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A product-focused developer group building high-performance websites and mobile apps with modern stacks and beautiful UX.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
                Start your project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50">
                See our work
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-gray-600">
              <div className="text-sm"><span className="font-semibold text-gray-900">30+ </span>projects shipped</div>
              <div className="text-sm"><span className="font-semibold text-gray-900">2-6 weeks </span>average delivery</div>
              <div className="text-sm"><span className="font-semibold text-gray-900">100% </span>transparent pricing</div>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xl"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500" />
                <div className="aspect-video rounded-xl bg-gradient-to-br from-rose-500 to-orange-500" />
                <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500" />
                <div className="aspect-video rounded-xl bg-gradient-to-br from-lime-500 to-emerald-500" />
              </div>
              <p className="mt-4 text-sm text-gray-600">Preview of recent designs and UI explorations.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
