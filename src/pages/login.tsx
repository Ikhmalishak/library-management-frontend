import { LoginForm } from "@/components/login-form";
import { BookOpen, Sparkles, Shield, BookmarkCheck } from "lucide-react";

function LoginPage() {
  return (
    <div className="min-h-screen w-full flex bg-slate-50 font-sans overflow-hidden">
      {/* Left Column: Login Form */}
      <div className="w-full lg:w-[42%] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 bg-white relative z-10 shadow-2xl border-r border-slate-100">
        <div className="max-w-md w-full mx-auto">
          <LoginForm />
        </div>
      </div>

      {/* Right Column: Visual Showcase */}
      <div className="hidden lg:flex lg:w-[58%] relative items-center justify-center bg-slate-950 p-12 overflow-hidden">
        {/* Animated Background Gradients / Blobs */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15), transparent 50%), radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.1), transparent 60%)' 
          }}
        />
        
        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Glow Spheres */}
        <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-purple-600/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-indigo-500/5 blur-[120px] animate-pulse" />

        <div className="relative z-10 max-w-lg text-center space-y-8 text-white">
          <div className="space-y-4">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Modern Library OS</span>
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-purple-300">
              The smart way to manage your library
            </h1>
            <p className="text-base text-slate-400 max-w-md mx-auto font-light leading-relaxed">
              Simplify book circulation, manage digital assets, track member subscriptions, and visualize library statistics in real-time.
            </p>
          </div>

          {/* Feature Showcase Grid */}
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="p-5 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md hover:bg-white/[0.05] transition-all duration-300">
              <BookOpen className="w-5 h-5 text-purple-400 mb-2.5" />
              <h3 className="font-semibold text-slate-200 mb-1 text-sm">Smart Catalog</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Automated book metadata retrieval and categorizations.</p>
            </div>
            <div className="p-5 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md hover:bg-white/[0.05] transition-all duration-300">
              <BookmarkCheck className="w-5 h-5 text-indigo-400 mb-2.5" />
              <h3 className="font-semibold text-slate-200 mb-1 text-sm">Active Circulations</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Real-time status tracking for book checkouts and due alerts.</p>
            </div>
            <div className="p-5 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md hover:bg-white/[0.05] transition-all duration-300">
              <Shield className="w-5 h-5 text-emerald-400 mb-2.5" />
              <h3 className="font-semibold text-slate-200 mb-1 text-sm">Access Control</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Granular permissions for librarians, staff, and students.</p>
            </div>
            <div className="p-5 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md hover:bg-white/[0.05] transition-all duration-300">
              <Sparkles className="w-5 h-5 text-amber-400 mb-2.5" />
              <h3 className="font-semibold text-slate-200 mb-1 text-sm">Analytics Engine</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Interactive charts mapping monthly usage and top genres.</p>
            </div>
          </div>

          {/* Footer Stats inside right screen */}
          <div className="pt-6 border-t border-white/[0.08] flex justify-around text-center">
            <div>
              <div className="text-2xl font-bold text-white">12,450</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Books Tracked</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99.98%</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-1">System SLA</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">3,200+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;