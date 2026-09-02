import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

const dores = [
  {
    titulo: 'Falta sem reposição',
    texto: 'Porteiro falta, ninguém cobre, e o síndico só descobre quando o morador reclama.',
  },
  {
    titulo: 'Turnover alto',
    texto: 'Rosto novo na portaria todo mês — o morador nunca chega a conhecer quem cuida do prédio.',
  },
  {
    titulo: 'Passivo trabalhista',
    texto: 'Sem fiscalização documentada, o condomínio responde de forma subsidiária se a prestadora não pagar.',
  },
];

export function Problema() {
  return (
    <section className="bg-offwhite px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="O que dói hoje"
          title="Você não contratou para administrar gente."
          description="É exatamente isso que a maioria das terceirizadas empurra de volta pro síndico."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {dores.map((dor) => (
            <Reveal key={dor.titulo}>
              <h3 className="font-display text-xl text-navy">{dor.titulo}</h3>
              <div className="mt-3 h-px w-10 bg-gold" aria-hidden="true" />
              <p className="mt-3 text-graytext">{dor.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
