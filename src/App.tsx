import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

function FadeIn({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CTA({ href, text }: { href: string, text: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-4 px-8 py-5 border border-sand-300/30 text-sand-50 font-sans tracking-[0.15em] uppercase text-xs font-medium hover:bg-sand-50 hover:text-burgundy-950 transition-all duration-500 w-full sm:w-auto">
      {text}
      <ArrowRight size={16} />
    </a>
  );
}

function ImagePlaceholder({ src, alt, aspectRatio = "aspect-[3/2]" }: { src: string, alt: string, aspectRatio?: string }) {
  return (
    <div className={`w-full bg-burgundy-900 overflow-hidden relative ${aspectRatio} group`}>
      <img
         src={src}
         alt={alt}
         className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
      />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex justify-center w-full py-16">
      <div className="h-px w-16 bg-sand-300/20"></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-burgundy-950 min-h-screen font-sans selection:bg-sand-200 selection:text-burgundy-950 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 pt-32 pb-16 md:pt-48 md:pb-32 max-w-2xl mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <span className="block text-xs tracking-[0.3em] font-medium uppercase text-sand-300 mb-8">La Consulta</span>
          <h1 className="font-serif text-6xl md:text-8xl mb-16 text-sand-50 leading-tight">
            <span className="italic">El Eco</span><br/>del Silencio
          </h1>
          <div className="space-y-6 text-lg md:text-xl font-light text-sand-100/80 leading-relaxed mb-20 max-w-xl mx-auto">
            <p>Hay relaciones que no se rompen.</p>
            <p>Simplemente dejan de encontrarse.</p>
            <p>Desde fuera todo parece seguir funcionando.</p>
            <p>Las conversaciones existen.</p>
            <p>Las responsabilidades se cumplen.</p>
            <p>La rutina continúa.</p>
            <p>Y, sin embargo, hay una sensación difícil de explicar.</p>
            <p>Como si una parte de ti hubiera dejado de sentirse vista.</p>
            <p>Como si cada vez hablara menos de lo importante.</p>
            <p>Como si el silencio hubiera empezado a ocupar demasiado espacio.</p>
          </div>
          <CTA href="https://app.eleco.elenavargas.group" text="Hacer el diagnóstico gratuito" />
        </FadeIn>
      </section>

      {/* 1.1 HERO IMAGE */}
      <section className="px-6 max-w-5xl mx-auto pb-16 md:pb-32">
        <FadeIn delay={0.2}>
          <ImagePlaceholder src="/elena2.jpg" alt="Elena Vargas" aspectRatio="aspect-[4/5] md:aspect-[21/9] min-h-[400px]" />
        </FadeIn>
      </section>

      <FadeIn><Divider /></FadeIn>

      {/* 2. SOLEDAD EN COMPAÑÍA */}
      <section className="px-6 pt-16 pb-32 max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-16 text-sand-50">
            Hay una soledad que<br className="hidden md:block"/> ocurre en compañía
          </h2>
          <div className="space-y-6 text-lg md:text-xl font-light text-sand-100/80 leading-relaxed">
            <p>No siempre existe una crisis.</p>
            <p>No siempre hay discusiones.</p>
            <p>No siempre hay una razón evidente para sentirse mal.</p>
            <p>Por eso muchas mujeres llegan a consulta convencidas de que están exagerando.</p>
            <p>Pero la distancia emocional rara vez aparece de golpe.</p>
            <p>Se instala poco a poco.</p>
            <p>Hasta que un día descubres que hace tiempo que dejaste de sentirte realmente acompañada.</p>
          </div>
        </FadeIn>
      </section>

      {/* 3. QUOTE 1 */}
      <section className="px-6 py-24 md:py-40 bg-burgundy-900 border-y border-sand-300/5">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <blockquote className="font-serif italic text-3xl md:text-5xl leading-tight text-sand-100 px-6">
              "Vivimos juntos, pero hace tiempo que dejamos de encontrarnos."
            </blockquote>
          </FadeIn>
        </div>
      </section>

      <FadeIn><Divider /></FadeIn>

      {/* 4. QUIZÁ TE RECONOZCAS */}
      <section className="px-6 py-16 md:py-32 max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20 md:mb-32">
            <h2 className="text-xs tracking-[0.3em] font-medium uppercase text-sand-300 mb-4">Síntomas</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-sand-50">Quizá te reconozcas</h3>
          </div>
        </FadeIn>
        
        <ul className="space-y-12 md:space-y-16">
          {[
            "Hace tiempo que dejaste de contar algunas cosas.",
            "Hablas de logística mucho más que de emociones.",
            "Cada vez te cuesta más pedir lo que necesitas.",
            "Sientes que nadie conoce realmente cómo estás.",
            "Respondes \"no pasa nada\" cuando sí está pasando algo.",
            "Hay días en los que te sientes sola incluso cuando estáis juntos."
          ].map((item, index) => (
            <FadeIn delay={index * 0.1} key={index}>
              <li className="flex gap-6 items-start">
                <span className="font-serif text-sand-300 text-xl font-light italic mt-1">{String(index + 1).padStart(2, '0')}.</span>
                <p className="text-2xl md:text-3xl font-serif text-sand-50/90 leading-normal">{item}</p>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={0.4}>
          <div className="mt-32 pt-12 border-t border-sand-300/10 text-center space-y-4 text-sm tracking-[0.2em] text-sand-300 uppercase font-medium">
            <p>No necesitas reconocerlas todas.</p>
            <p>A veces basta con una.</p>
          </div>
        </FadeIn>
      </section>

      <FadeIn><Divider /></FadeIn>

      {/* 5. TODO EMPIEZA CON UNA PREGUNTA */}
      <section className="px-6 py-16 md:py-32 max-w-4xl mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-sand-50">Todo empieza con una pregunta</h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="w-full">
            <ImagePlaceholder src="/diagnostico.jpg" alt="Pantallazo del Diagnóstico" aspectRatio="aspect-[4/3] md:aspect-[16/9] min-h-[300px]" />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="space-y-6 text-lg md:text-xl font-light text-sand-100/80 leading-relaxed mt-20 mb-16 max-w-2xl mx-auto">
            <p>No para decidir si tu relación está bien o está mal.</p>
            <p>Sino para ayudarte a poner nombre a aquello que quizá llevas demasiado tiempo intentando explicar.</p>
            <p>En menos de tres minutos descubrirás un primer mapa de la distancia emocional que puede haberse instalado en vuestra relación.</p>
          </div>
          <CTA href="https://app.eleco.elenavargas.group" text="Quiero hacer el diagnóstico" />
        </FadeIn>
      </section>

      <FadeIn><Divider /></FadeIn>

      {/* 6. NO OBTENDRÁS UNA PUNTUACIÓN */}
      <section className="px-6 py-16 md:py-32 max-w-4xl mx-auto flex flex-col items-center text-center">
        <FadeIn>
           <h2 className="font-serif text-4xl md:text-5xl mb-16 text-sand-50">No obtendrás una puntuación</h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="w-full">
            <ImagePlaceholder src="/mimapa.jpg" alt="Pantallazo de Mi Mapa" aspectRatio="aspect-[4/3] md:aspect-[16/9] min-h-[300px]" />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="space-y-6 text-lg md:text-xl font-light text-sand-100/80 leading-relaxed mt-20 max-w-2xl mx-auto">
            <p>Obtendrás una explicación.</p>
            <p>Un lugar desde el que empezar a comprender.</p>
            <p>Porque antes de intentar cambiar una relación, necesitamos entender cómo la estamos viviendo.</p>
          </div>
        </FadeIn>
      </section>

      <FadeIn><Divider /></FadeIn>

      {/* 7. SOBRE ELENA VARGAS */}
      <section className="px-6 py-16 md:py-32 max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-xs tracking-[0.3em] font-medium uppercase text-sand-300 mb-12">Sobre Elena Vargas</h2>
          <div className="space-y-6 text-lg md:text-xl font-light text-sand-100/80 leading-relaxed mb-32">
            <p>Durante años he acompañado a mujeres que se sentían solas dentro de relaciones que, desde fuera, parecían funcionar.</p>
            <p>Este espacio nace para ayudarte a poner palabras donde solo había silencio.</p>
            <p>No para decirte qué hacer.</p>
            <p>Sino para ayudarte a escuchar aquello que llevas demasiado tiempo sintiendo.</p>
          </div>

          <blockquote className="font-serif italic text-3xl md:text-4xl leading-tight text-sand-100 relative pt-12 before:content-[''] before:w-16 before:h-px before:bg-sand-300/30 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2">
            "El silencio, cuando se rompe con intención y con cuidado, no destruye. Construye."
          </blockquote>
        </FadeIn>
      </section>

      {/* 8. FOOTER CTA */}
      <section className="px-6 pt-32 pb-24 md:pt-48 md:pb-32 bg-burgundy-900 border-t border-sand-300/10 flex flex-col items-center text-center">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-sand-50 mb-16">
              Quizá no necesites más consejos.<br className="hidden md:block"/> Quizá solo necesites un lugar donde empezar a entender lo que te está pasando.
            </h2>
            <div className="flex flex-col items-center gap-8">
              <span className="text-xs tracking-[0.3em] font-medium uppercase text-sand-300">Diagnóstico Gratuito</span>
              <CTA href="https://app.eleco.elenavargas.group" text="Empezar ahora" />
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
