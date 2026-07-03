const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.astro', 'utf8');

const startMarker = '<!-- RIGHT COLUMN: Elegant Tech Illustration & Floating Cards -->';
const endMarker = '<!-- TRUST INDICATORS (Bottom of Hero) -->';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = content.substring(0, startIndex) + `<!-- RIGHT COLUMN: Elegant Tech Illustration & Floating Cards -->
    <div class="lg:col-span-6 flex justify-center items-center relative min-h-[600px] w-full reveal reveal-fade-left delay-400">
      
      <!-- Tech Infrastructure Visualization -->
      <div class="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
        
        <!-- MASSIVE CYAN/VIOLET GLOW (Matching the premium data cloud effect) -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="absolute w-[85%] h-[85%] rounded-full bg-huus-electric/30 blur-[90px] -translate-x-12 -translate-y-8 animate-pulse-subtle"></div>
          <div class="absolute w-[75%] h-[75%] rounded-full bg-huus-violet/30 blur-[100px] translate-x-10 translate-y-12 animate-pulse-subtle" style="animation-delay: 2s;"></div>
        </div>

        <!-- RADIAL NETWORK LINES (Radar/Web connections) -->
        <svg class="absolute inset-[-20%] w-[140%] h-[140%] z-0 pointer-events-none" viewBox="0 0 1000 1000">
          <g stroke="currentColor" fill="none" class="text-huus-violet/10">
            <!-- Concentric Circles (Radar rings) -->
            <circle cx="500" cy="500" r="160" stroke-width="1" stroke-dasharray="4 4" class="animate-[borderSpin_60s_linear_infinite_reverse]" style="transform-origin: center;"/>
            <circle cx="500" cy="500" r="300" stroke-width="1" class="text-huus-electric/10" />
            <circle cx="500" cy="500" r="450" stroke-width="1" stroke-dasharray="12 12" class="animate-[borderSpin_90s_linear_infinite]" style="transform-origin: center;"/>
            
            <!-- Radiating Signal Lines -->
            <path d="M500 500 L150 100" stroke-width="1.5" class="text-huus-electric/20" />
            <path d="M500 500 L50 350" stroke-width="1" />
            <path d="M500 500 L20 600" stroke-width="1" class="text-huus-electric/20" />
            <path d="M500 500 L100 850" stroke-width="1" />
            <path d="M500 500 L300 950" stroke-width="1.5" class="text-huus-electric/20" />
            <path d="M500 500 L600 980" stroke-width="1" />
            <path d="M500 500 L850 850" stroke-width="1" class="text-huus-electric/20" />
            <path d="M500 500 L950 600" stroke-width="1.5" />
            <path d="M500 500 L980 350" stroke-width="1" class="text-huus-electric/20" />
            <path d="M500 500 L850 100" stroke-width="1" />
            <path d="M500 500 L600 50" stroke-width="1" class="text-huus-electric/20" />
            <path d="M500 500 L300 50" stroke-width="1.5" />
          </g>
          
          <!-- Glowing Data Nodes on Intersections -->
          <g fill="currentColor">
            <circle cx="150" cy="100" r="4" class="text-huus-electric animate-ping" style="animation-duration: 3s;" />
            <circle cx="150" cy="100" r="4" class="text-huus-electric" />
            
            <circle cx="50" cy="350" r="2.5" class="text-huus-violet" />
            <circle cx="20" cy="600" r="3" class="text-huus-electric" />
            <circle cx="100" cy="850" r="2" class="text-huus-violet" />
            <circle cx="300" cy="950" r="4" class="text-huus-electric animate-pulse" />
            <circle cx="600" cy="980" r="2" class="text-huus-violet" />
            <circle cx="850" cy="850" r="3" class="text-huus-electric" />
            <circle cx="950" cy="600" r="2" class="text-huus-violet" />
            <circle cx="980" cy="350" r="3" class="text-huus-electric animate-pulse" />
            <circle cx="850" cy="100" r="3.5" class="text-huus-violet" />
            <circle cx="600" cy="50" r="2" class="text-huus-electric" />
            <circle cx="300" cy="50" r="2.5" class="text-huus-violet" />
          </g>
        </svg>

        <!-- Central Glassmorphism Radiobase Node -->
        <div class="relative z-20 w-36 h-36 rounded-[2.5rem] bg-white/70 backdrop-blur-2xl shadow-[0_16px_60px_rgba(0,0,0,0.08)] flex items-center justify-center transition-transform duration-700 cursor-default group">
          <!-- Premium Inner Border -->
          <div class="absolute inset-0 rounded-[2.5rem] p-[1px] bg-gradient-to-b from-white to-white/10 z-0 pointer-events-none"></div>
          
          <!-- Animated Ring behind Radiobase -->
          <div class="absolute inset-[-15px] rounded-[3rem] border border-huus-electric/20 animate-ping opacity-20" style="animation-duration: 4s;"></div>
          
          <!-- Radiobase Container -->
          <div class="w-24 h-24 rounded-[1.75rem] bg-gradient-to-br from-huus-violet/10 to-huus-electric/10 flex items-center justify-center relative overflow-hidden z-10 border border-white group-hover:scale-105 transition-transform duration-500 shadow-inner">
            
            <!-- High-Tech Radiobase SVG Icon -->
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="url(#radioGradient)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="relative z-10">
              <defs>
                <linearGradient id="radioGradient" x1="0" y1="0" x2="24" y2="24">
                  <stop stop-color="#6D28D9" />
                  <stop offset="1" stop-color="#0EA5E9" />
                </linearGradient>
              </defs>
              <!-- Central Mast -->
              <path d="M12 22V8" stroke-width="1.5" />
              <!-- Tower Legs -->
              <path d="M7 22l3.5-12" />
              <path d="M17 22l-3.5-12" />
              <!-- Crossbeams -->
              <path d="M8 18h8" />
              <path d="M9 14h6" />
              <!-- Top Antenna / Transceivers -->
              <path d="M12 8V4" stroke-width="1.5" />
              <rect x="10" y="4" width="4" height="6" rx="1" fill="currentColor" fill-opacity="0.1" />
              <!-- Broadcast Signal Waves -->
              <path d="M6.5 3.5A8 8 0 0 0 4 8" class="animate-pulse" stroke-width="1.5" />
              <path d="M17.5 3.5A8 8 0 0 1 20 8" class="animate-pulse" style="animation-delay: 0.5s;" stroke-width="1.5" />
              <path d="M9 2A11 11 0 0 0 1 8" class="animate-pulse opacity-50" style="animation-delay: 1s;" />
              <path d="M15 2A11 11 0 0 1 23 8" class="animate-pulse opacity-50" style="animation-delay: 1.5s;" />
            </svg>
          </div>
        </div>

        <!-- Floating Data Cards with Animated Borders -->
        <div id="metric-card-latency" class="absolute top-[8%] left-[5%] sm:left-[-15%] z-30 transition-transform duration-700 hover:-translate-y-2 reveal reveal-fade-down delay-500">
          <!-- Animated Border Wrapper -->
          <div class="relative group rounded-[16px] p-[2px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <!-- Rotating gradient border -->
            <div class="absolute inset-[-100%] animate-[borderSpin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#6D28D9_50%,transparent_100%)]"></div>
            <!-- Content -->
            <div class="relative bg-white/95 backdrop-blur-xl px-5 py-4 rounded-[14px] flex items-center gap-3 h-full w-full">
              <!-- Dot using electric color as requested -->
              <div class="h-2.5 w-2.5 rounded-full bg-huus-electric animate-pulse shadow-[0_0_12px_rgba(14,165,233,0.8)]"></div>
              <div class="flex flex-col">
                <span class="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mb-0.5">Latencia Core</span>
                <span class="text-sm font-bold text-huus-dark font-mono leading-none" id="hero-latency-val">1.2 ms</span>
              </div>
            </div>
          </div>
        </div>

        <div id="metric-card-uptime" class="absolute bottom-[8%] right-[5%] sm:right-[-15%] z-30 transition-transform duration-700 hover:-translate-y-2 reveal reveal-fade-up delay-600">
          <div class="relative group rounded-[16px] p-[2px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <!-- Rotating gradient border -->
            <div class="absolute inset-[-100%] animate-[borderSpin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#0EA5E9_50%,transparent_100%)]"></div>
            <!-- Content -->
            <div class="relative bg-white/95 backdrop-blur-xl px-5 py-4 rounded-[14px] flex items-center gap-3 h-full w-full">
              <div class="h-7 w-7 rounded-xl bg-huus-violet/10 flex items-center justify-center border border-huus-violet/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div class="flex flex-col">
                <span class="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mb-0.5">SLA Global</span>
                <span class="text-sm font-bold text-huus-dark font-mono leading-none" id="hero-sla-val">99.999%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  ` + content.substring(endIndex);
  
  fs.writeFileSync('src/components/Hero.astro', newContent);
  console.log('Replaced successfully');
} else {
  console.log('Markers not found');
}
