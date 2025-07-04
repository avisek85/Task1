import React, { useState, useEffect } from 'react';

const LatestUpdates = () => {
  const [currentUpdate, setCurrentUpdate] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const updates = [
    {
      id: 1,
      type: "Workshop",
      title: "Advanced Geotechnical Testing Techniques",
      date: "Dec 15, 2024",
      description: "Join our comprehensive workshop on cutting-edge soil testing methodologies and industry best practices for modern engineering challenges",
      fullDescription: "This workshop covers advanced soil testing, hands-on demonstrations, and the latest industry standards. Participants will gain practical experience and insights from leading experts in the field, ensuring they are up-to-date with modern geotechnical practices.",
      urgent: false,
      category: "Education"
    },
    {
      id: 2,
      type: "Training Program",
      title: "Slope Stability Analysis Certification",
      date: "Jan 8, 2025",
      description: "Professional certification program for slope stability engineers with hands-on practical sessions and real-world applications",
      fullDescription: "This certification program includes in-depth modules on slope stability, real-world case studies, and practical sessions. Attendees will receive a recognized certificate and access to exclusive resources for ongoing professional development.",
      urgent: true,
      category: "Certification"
    },
    {
      id: 3,
      type: "Testing",
      title: "New Laboratory Equipment Installation",
      date: "Dec 10, 2024",
      description: "State-of-the-art triaxial testing equipment now operational for enhanced soil analysis and comprehensive material testing",
      fullDescription: "This new laboratory equipment is designed to perform triaxial testing on soil samples, providing accurate and reliable results for material analysis and design.",
      urgent: false,
      category: "Technology"
    },
    {
      id: 4,
      type: "Project",
      title: "Highway Slope Stability Project Completed",
      date: "Nov 28, 2024",
      description: "Successfully completed major slope stabilization for M25 expansion with innovative techniques and sustainable solutions",
      fullDescription: "The highway slope stability project was completed successfully, resulting in a safer and more sustainable road for the community.",
      urgent: false,
      category: "Achievement"
    },
    {
      id: 5,
      type: "Research",
      title: "Published: Innovative Ground Improvement Methods",
      date: "Nov 15, 2024",
      description: "New research paper on sustainable ground improvement techniques published in leading international engineering journal",
      fullDescription: "This research paper presents innovative ground improvement methods that are sustainable and effective for various engineering projects.",
      urgent: false,
      category: "Publication"
    },
    {
      id: 6,
      type: "Conference",
      title: "International Geotechnical Symposium 2025",
      date: "Feb 20, 2025",
      description: "VGE presenting keynote on future of geotechnical engineering at prestigious London international symposium",
      fullDescription: "The keynote presentation at the International Geotechnical Symposium 2025 will focus on the future of geotechnical engineering and its impact on society.",
      urgent: true,
      category: "Event"
    },
    {
      id: 7,
      type: "Reserach",
      title: "International Geotechnical Symposium 2025",
      date: "Feb 20, 2025",
      description: "VGE presenting keynote on future of geotechnical engineering at prestigious London international symposium",
      fullDescription: "The keynote presentation at the International Geotechnical Symposium 2025 will focus on the future of geotechnical engineering and its impact on society.",
      urgent: true,
      category: "Event"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentUpdate((prev) => {
        const nextIndex = (prev + 1) % updates.length;
        setExpanded(false); // Collapse on auto-advance
        return nextIndex;
      });
    }, 8000);
    
    return () => clearInterval(timer);
  }, [updates.length]);

  const getTypeColors = (type: string) => {
    const colors = {
      'Workshop': 'from-amber-600 to-orange-600',
      'Training Program': 'from-blue-600 to-indigo-700',
      'Testing': 'from-emerald-600 to-teal-700',
      'Project': 'from-purple-600 to-violet-700',
      'Research': 'from-rose-600 to-pink-700',
      'Conference': 'from-cyan-600 to-blue-700'
    };
    return colors[type] || 'from-gray-600 to-slate-700';
  };

  const goToUpdate = (index: number) => {
    setCurrentUpdate(index);
  };

  return (
    <div className="relative w-full h-[500px] mt-[10px]">
      {/* Elegant Glass Container */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl h-full overflow-hidden relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-vge-orange/20 via-transparent to-vge-blue-dark/20"></div>
          <div className="absolute top-6 right-6 w-20 h-20 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-6 left-6 w-24 h-24 bg-vge-orange/10 rounded-full blur-3xl"></div>
        </div>

        {/* Header Section */}
        <div className="relative z-10 p-3 pb-2">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-lg font-display font-bold text-white mb-1 tracking-tight">
                Latest Updates
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-vge-orange via-vge-orange-light to-transparent rounded-full"></div>
            </div>
            
            {/* Live Indicator */}
            <div className="flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm px-2 py-1 rounded-full border border-red-400/30">
              <div className="relative">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping opacity-20"></div>
              </div>
              <span className="text-xs text-red-100 font-semibold tracking-wide">LIVE</span>
            </div>
          </div>

          {/* Breaking News Ticker */}
          <div className="bg-gradient-to-r from-red-600/90 via-orange-600/90 to-red-600/90 backdrop-blur-sm rounded-xl p-1.5 mb-3 overflow-hidden relative border border-red-400/30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
            <div className="whitespace-nowrap overflow-hidden">
              <div className="inline-block animate-[scroll-left_20s_linear_infinite]">
                <span className="text-white font-bold text-xs flex items-center">
                  🚨 BREAKING: {updates[currentUpdate]?.title} 🚨
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area - Single Card Display */}
        <div className="relative z-10 px-3 pb-3">
          <div className="relative h-[240px] overflow-hidden">
            <div className="w-full h-full">
              <div className="w-full h-full px-1">
                <div
                  className={`relative bg-white/15 backdrop-blur-lg rounded-xl p-3 border border-white/20 h-full
                    ${updates[currentUpdate]?.urgent 
                      ? 'ring-2 ring-red-400/50 shadow-lg shadow-red-500/20' 
                      : 'shadow-lg shadow-black/10'
                    } 
                    hover:bg-white/20 hover:scale-[1.02] transition-all duration-500 cursor-pointer group overflow-auto`}
                  style={{ minHeight: expanded ? 300 : 0 }}
                >
                  
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${getTypeColors(updates[currentUpdate]?.type)}`}></div>
                  
                  {/* Urgent Badge */}
                

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <div className={`px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getTypeColors(updates[currentUpdate]?.type)} shadow-lg`}>
                        {updates[currentUpdate]?.type}
                      </div>
                      <span className="text-xs text-white/70 font-medium bg-white/10 px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                        {updates[currentUpdate]?.date}
                      </span>
                    </div>
                    
                    <h4 className="font-display font-bold text-white mb-2 text-sm leading-tight group-hover:text-vge-orange-light transition-colors duration-300">
                      {updates[currentUpdate]?.title}
                    </h4>
                    
                    <div className="text-black text-xs leading-relaxed mb-2 flex-grow overflow-hidden">
                      {updates[currentUpdate]?.description}
                      {expanded && updates[currentUpdate]?.fullDescription && (
                        <span> {updates[currentUpdate].fullDescription}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex space-x-1">
                        {[1, 2, 3].map((dot) => (
                          <div 
                            key={dot} 
                            className="w-1 h-1 bg-vge-orange rounded-full animate-pulse" 
                            style={{animationDelay: `${dot * 0.3}s`}}>
                          </div>
                        ))}
                      </div>
                      <button
                        className="text-xs text-vge-orange-light font-semibold hover:text-white transition-all duration-300 flex items-center group-hover:translate-x-1"
                        onClick={() => setExpanded((prev) => !prev)}
                      >
                        {expanded ? 'Show Less' : 'Read More'}
                        <span className="ml-1">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Indicators */}
          <div className="flex justify-center items-center space-x-2 mt-3">
            {updates.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-500 rounded-full cursor-pointer ${
                  index === currentUpdate
                    ? 'w-5 h-1.5 bg-gradient-to-r from-vge-orange to-vge-orange-light shadow-lg shadow-vge-orange/30' 
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => goToUpdate(index)}
              />
            ))}
          </div>

          {/* Status Footer */}
          <div className="mt-2 text-center bg-white/5 backdrop-blur-sm p-2 rounded-lg border border-white/10">
            <div className="text-xs text-white/70 flex items-center justify-center space-x-3">
              <span className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="font-medium">Auto-updating</span>
              </span>
              <span className="text-white/40">•</span>
              <span className="font-medium text-vge-orange-light">{updates.length} Active Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Animations */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default LatestUpdates;
