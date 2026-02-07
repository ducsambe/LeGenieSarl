import { GraduationCap, Languages, Plane, MessageSquare, Headphones, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Department {
  id: number;
  name: string;
  description: string;
  url: string;
  icon: typeof GraduationCap;
  color: string;
  backgroundImage: string;
}

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const departments: Department[] = [
    {
      id: 1,
      name: "Cours de Répétition",
      description: "Programme d'accompagnement scolaire personnalisé pour tous les niveaux. Excellence académique et suivi individuel.",
      url: "https://smartgen-educ.com",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      backgroundImage: "https://images.pexels.com/photos/5214935/pexels-photo-5214935.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Cours de Langue",
      description: "Formation linguistique complète avec des professeurs qualifiés. Maîtrisez de nouvelles langues efficacement.",
      url: "https://legenietutoring.com",
      icon: Languages,
      color: "from-cyan-500 to-teal-500",
      backgroundImage: "https://images.pexels.com/photos/159775/books-page-marker-read-159775.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Procédure de Voyage",
      description: "Assistance complète pour vos démarches de voyage et formalités administratives. Service professionnel et rapide.",
      url: "#",
      icon: Plane,
      color: "from-teal-500 to-emerald-500",
      backgroundImage: "/logo1.png"
    }
  ];

  const handleDepartmentClick = (url: string) => {
    if (url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSupportClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert('Support en ligne - Chat disponible 24/7');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 overflow-x-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-bl from-blue-300 to-cyan-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-br from-cyan-300 to-teal-200 rounded-full blur-3xl opacity-25 animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-gradient-to-tl from-teal-300 to-cyan-200 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200 to-transparent rounded-full blur-3xl opacity-15"></div>

        <svg className="absolute top-0 left-0 w-full h-full opacity-5" preserveAspectRatio="none" viewBox="0 0 1200 1200">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
          <div className="text-center mb-12 sm:mb-16 md:mb-24 animate-fade-in">
            <div
              className="inline-block mb-6 sm:mb-8 transform hover:scale-110 transition-all duration-500 cursor-pointer group"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 sm:px-8 py-6 sm:py-8 rounded-3xl shadow-2xl border-2 border-white/30">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-500 flex-shrink-0 border-2 border-blue-100">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src="/logo.png"
                          alt="Logo Le Genie SARL"
                          className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
                      LE GENIE<br className="sm:hidden" /> SARL
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto mt-6 sm:mt-8 px-2 animate-fade-in opacity-0 animation-delay-200">
              Votre partenaire de confiance pour l'éducation et les services professionnels
            </p>
          </div>

          <div className="mb-12 sm:mb-16 animate-slide-up">
            <div className="relative max-w-4xl mx-auto px-2 sm:px-0">
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 rounded-3xl shadow-2xl overflow-hidden border-2 border-white/30 group hover:shadow-3xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>

                <div className="relative px-6 sm:px-10 py-8 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Support en Ligne 24/7</h3>
                      <p className="text-sm sm:text-base text-white/90">Besoin d'aide? Nos experts sont disponibles</p>
                    </div>
                  </div>

                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap">
                    Chat Gratuit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-2 sm:px-0">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.id}
                  className="group cursor-pointer animate-slide-up hover:-translate-y-3 transition-all duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => handleDepartmentClick(dept.url)}
                >
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-teal-300 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                    <div className="relative bg-white rounded-3xl shadow-xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden h-full border-2 border-transparent group-hover:border-cyan-300">
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <img
                          src={dept.backgroundImage}
                          alt={dept.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b ${dept.color} opacity-40 group-hover:opacity-50 transition-opacity duration-300`}></div>

                        <div className="absolute inset-0 flex items-end justify-between p-4 sm:p-6">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${dept.color} flex items-center justify-center shadow-lg border-3 border-white transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500`}>
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                          </div>

                          <button
                            onClick={handleSupportClick}
                            className="px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-gray-800 text-xs sm:text-sm font-bold rounded-full hover:bg-blue-50 hover:scale-110 transition-all duration-300 flex items-center gap-1.5 shadow-lg whitespace-nowrap border-2 border-white"
                          >
                            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">Support</span>
                            <span className="inline sm:hidden">SOS</span>
                          </button>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300">
                          {dept.name}
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                          {dept.description}
                        </p>

                        <div className="flex items-center justify-center gap-2 text-cyan-600 font-semibold group-hover:gap-4 transition-all duration-300 hover:text-cyan-700">
                          <span>Découvrir</span>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 sm:mt-16 text-gray-500 text-xs sm:text-sm">
            <p>© 2024 Le Genie SARL - Tous droits réservés</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
