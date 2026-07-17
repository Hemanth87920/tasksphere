import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
  Organize your life <br />
  <span className="text-indigo-600">securely and easily.</span>
</h1>
      <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 mb-8 leading-relaxed">
        A client-side dashboard built to manage tasks cleanly. Create, filter, and track progress instantly without server delays.
      </p>
      
      <div className="flex justify-center gap-4 mb-20">
        <Link to="/register" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 font-semibold transition flex items-center shadow-lg shadow-indigo-100">
          Get Started For Free <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link to="/login" className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-50 font-semibold transition">
          Sign In
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="bg-indigo-50 p-3 rounded-lg w-fit text-indigo-600 mb-4"><Zap /></div>
          <h3 className="font-bold text-lg mb-2">Fast Client Storage</h3>
          <p className="text-slate-500">Your tasks and user sessions load immediately using optimized local storage.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="bg-indigo-50 p-3 rounded-lg w-fit text-indigo-600 mb-4"><Shield /></div>
          <h3 className="font-bold text-lg mb-2">Private & Local</h3>
          <p className="text-slate-500">No trackers or external servers. Your credentials stay on your personal machine.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="bg-indigo-50 p-3 rounded-lg w-fit text-indigo-600 mb-4"><Star /></div>
          <h3 className="font-bold text-lg mb-2">Smooth UI Transitions</h3>
          <p className="text-slate-500">Designed with modern responsive grids and layout components.</p>
        </div>
      </div>
    </div>
  );
}