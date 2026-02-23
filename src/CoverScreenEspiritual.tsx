import { useState } from 'react';
import { ArrowRight, CheckCircle, Download } from 'lucide-react';

interface CoverScreenEspiritualProps {
  onStart: () => void;
  onChecklist?: () => void;
  onWallpapers?: () => void;
  titulo?: string;
  subtitulo?: string;
  descricao?: string;
}

export default function CoverScreenEspiritual({
  onStart,
  onChecklist,
  onWallpapers,
  titulo = "Ambiente Espiritual",
  subtitulo = "Arrume a Casa para Deus Entrar",
  descricao = "Um programa prático de 5 etapas para transformar seu espaço e sua rotina em um santuário de oração."
}: CoverScreenEspiritualProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-gradient-to-b from-[#2a2a4a] via-[#1f1b2a] to-[#0f0f1a] flex flex-col justify-between pt-safe px-6 pb-safe">
      
      {/* 🌟 Efeito de Partículas Estreladas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bokeh grande ao fundo */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Partículas pequenas flutuantes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* 📍 Conteúdo Principal */}
      <div className="relative z-10 flex flex-col items-center text-center flex-1 justify-center max-w-2xl mx-auto">
        
        {/* ✨ Símbolo Decorativo V */}
        <div 
          className="mb-8 animate-fade-in"
          aria-hidden="true"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl"></div>
            <div className="relative w-16 h-16 border-2 border-gold/40 rounded-full flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-gold" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* 📋 Rótulo GUIA DE ESTUDO */}
        <p 
          className="text-[10px] tracking-[0.35em] text-gold/60 uppercase font-semibold mb-6 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Guia de Estudo
        </p>

        {/* 🎯 Título Principal */}
        <h1 
          className="text-5xl md:text-7xl font-serif text-white font-light tracking-tight mb-3 animate-fade-in leading-tight"
          style={{ animationDelay: '0.2s' }}
        >
          {titulo}
        </h1>

        {/* ✍️ Subtítulo em Itálico */}
        <p 
          className="text-xl md:text-2xl font-serif italic text-gold/80 mb-6 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          {subtitulo}
        </p>

        {/* 📝 Descrição */}
        <p 
          className="text-base md:text-lg text-slate-300 leading-relaxed max-w-sm animate-fade-in font-light"
          style={{ animationDelay: '0.4s' }}
        >
          {descricao}
        </p>
      </div>

      {/* 🎮 Botões de Ação */}
      <div className="relative z-10 w-full max-w-sm mx-auto space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        
        {/* Botão Principal - Iniciar */}
        <button
          onClick={onStart}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          aria-label="Iniciar tutorial guiado do Ambiente Espiritual"
          className="w-full group relative overflow-hidden rounded-full py-4 px-6 font-semibold text-sm uppercase tracking-wide transition-all duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1b2a] focus-visible:ring-gold min-h-[56px]"
        >
          {/* Background animado */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-500 transition-transform duration-300"></div>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-gold/80 to-yellow-500/80 transition-opacity duration-300"
            style={{ opacity: isHovering ? 0 : 1 }}
          ></div>
          
          {/* Conteúdo */}
          <div className="relative flex items-center justify-center gap-3 text-[#1f1b2a]">
            <span>Iniciar Tutorial</span>
            <ArrowRight 
              size={20} 
              aria-hidden="true"
              className="transition-transform duration-300"
              style={{ transform: isHovering ? 'translateX(4px)' : 'translateX(0)' }}
            />
          </div>
        </button>

        {/* Botões Secundários */}
        <div className="flex gap-3 w-full pt-2">
          {/* Botão Checklist */}
          <button
            onClick={onChecklist}
            aria-label="Ver checklist do programa"
            className="flex-1 min-h-[48px] px-4 py-3 rounded-full border border-gold/40 text-gold/80 hover:text-gold hover:border-gold transition-all duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-gold text-sm font-medium"
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle size={18} aria-hidden="true" />
              <span>Checklist</span>
            </div>
          </button>

          {/* Botão Wallpapers */}
          <button
            onClick={onWallpapers}
            aria-label="Baixar wallpapers para personalizar seu espaço"
            className="flex-1 min-h-[48px] px-4 py-3 rounded-full border border-gold/40 text-gold/80 hover:text-gold hover:border-gold transition-all duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-gold text-sm font-medium"
          >
            <div className="flex items-center justify-center gap-2">
              <Download size={18} aria-hidden="true" />
              <span>Wallpapers</span>
            </div>
          </button>
        </div>
      </div>

      {/* 🎨 CSS para Animações Customizadas */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
