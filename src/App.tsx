import { GraduationCap, Languages, Plane, MessageSquare, Headphones } from 'lucide-react';
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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/237656542562', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 overflow-x-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-bl from-blue-300 to-cyan-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-br from-cyan-300 to-teal-200 rounded-full blur-3xl opacity-25 animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-gradient-to-tl from-teal-300 to-cyan-200 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200 to-transparent rounded-full blur-3xl opacity-15"></div>

        <div className="animate-float-school absolute top-20 left-10 text-4xl opacity-30" style={{animationDelay: '0s'}}>📚</div>
        <div className="animate-float-school absolute top-60 right-20 text-5xl opacity-25" style={{animationDelay: '1s'}}>📝</div>
        <div className="animate-float-school absolute top-1/3 left-1/4 text-3xl opacity-20" style={{animationDelay: '2s'}}>🔬</div>
        <div className="animate-float-school absolute bottom-1/3 right-1/4 text-4xl opacity-30" style={{animationDelay: '0.5s'}}>✏️</div>
        <div className="animate-float-school absolute top-1/2 left-10 text-3xl opacity-25" style={{animationDelay: '1.5s'}}>📐</div>
        <div className="animate-float-school absolute bottom-40 right-10 text-5xl opacity-20" style={{animationDelay: '2.5s'}}>🧪</div>
        <div className="animate-float-school absolute top-2/3 right-1/3 text-4xl opacity-30" style={{animationDelay: '3s'}}>📖</div>
        <div className="animate-float-school absolute bottom-1/4 left-1/3 text-3xl opacity-25" style={{animationDelay: '3.5s'}}>🎒</div>
        <div className="animate-float-school absolute top-1/4 right-10 text-4xl opacity-20" style={{animationDelay: '4s'}}>🖊️</div>
        <div className="animate-float-school absolute bottom-60 left-1/4 text-5xl opacity-30" style={{animationDelay: '4.5s'}}>📏</div>
        <div className="animate-float-school absolute top-3/4 left-20 text-3xl opacity-25" style={{animationDelay: '5s'}}>🧬</div>
        <div className="animate-float-school absolute top-40 left-1/2 text-4xl opacity-20" style={{animationDelay: '5.5s'}}>🔭</div>

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
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-4xl">
          <div className="text-center mb-5 sm:mb-8 animate-fade-in">
            <div
              className="inline-block mb-3 transform hover:scale-105 transition-all duration-500 cursor-pointer group"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl border-2 border-white/30">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-500 flex-shrink-0 border-2 border-blue-100">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src="/logo.png"
                          alt="Logo Le Genie SARL"
                          className="w-8 h-8 sm:w-12 sm:h-12 object-contain rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                      LE GENIE<br className="sm:hidden" /> SARL
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-700 font-light max-w-xl mx-auto mt-3 px-2 animate-fade-in opacity-0 animation-delay-200">
              Votre partenaire de confiance pour l'éducation et les services professionnels
            </p>
          </div>

          <div className="mb-6 sm:mb-8 animate-slide-up">
            <div className="relative max-w-2xl mx-auto px-2 sm:px-0">
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 rounded-xl shadow-lg overflow-hidden border-2 border-white/30 group hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>

                <div className="relative px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm sm:text-base font-bold text-white">Support en Ligne 24/7</h3>
                      <p className="text-xs text-white/80">Experts disponibles</p>
                    </div>
                  </div>

                  <button className="px-4 sm:px-5 py-2 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap text-xs sm:text-sm">
                    Chat Gratuit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto px-2 sm:px-0">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.id}
                  className="group cursor-pointer animate-slide-up hover:-translate-y-1.5 transition-all duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => handleDepartmentClick(dept.url)}
                >
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-teal-300 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                    <div className="relative bg-white rounded-lg shadow-md group-hover:shadow-lg transition-all duration-500 overflow-hidden h-full border-2 border-transparent group-hover:border-cyan-300">
                      <div className="relative h-32 sm:h-36 overflow-hidden">
                        <img
                          src={dept.backgroundImage}
                          alt={dept.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b ${dept.color} opacity-40 group-hover:opacity-50 transition-opacity duration-300`}></div>

                        <div className="absolute inset-0 flex items-end justify-between p-2.5 sm:p-3">
                          <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${dept.color} flex items-center justify-center shadow-lg border-2.5 border-white transform group-hover:rotate-12 group-hover:scale-105 transition-all duration-500`}>
                            <Icon className="w-4.5 h-4.5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                          </div>

                          <button
                            onClick={handleSupportClick}
                            className="px-2.5 py-1.5 bg-white text-gray-800 text-xs font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 flex items-center gap-1 shadow-md whitespace-nowrap border border-white"
                          >
                            <MessageSquare className="w-3 h-3" />
                            <span className="hidden sm:inline">Support</span>
                            <span className="inline sm:hidden">SOS</span>
                          </button>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 bg-gradient-to-br from-white to-gray-50">
                        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-1.5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300 line-clamp-2">
                          {dept.name}
                        </h2>

                        <p className="text-gray-600 leading-snug mb-3 text-xs sm:text-sm line-clamp-2">
                          {dept.description}
                        </p>

                        <div className="flex items-center justify-center gap-1.5 text-cyan-600 font-semibold group-hover:gap-2 transition-all duration-300 hover:text-cyan-700 text-xs sm:text-sm">
                          <span>Découvrir</span>
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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

          <div className="text-center mt-6 sm:mt-8 text-gray-500 text-xs">
            <p>© 2024 Le Genie SARL - Tous droits réservés</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 sm:p-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4"
        title="Contacter via WhatsApp"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="text-xs sm:text-sm font-bold whitespace-nowrap hidden sm:inline">Appel: 656 542 562</span>
        <span className="text-xs font-bold whitespace-nowrap sm:hidden">Appel</span>
      </button>
    </div>
  );
}

export default App;
