import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

/**
 * ⚠️ PLACEHOLDER — NÃO PUBLICAR COMO ESTÁ.
 *
 * Os três depoimentos abaixo são fictícios (gerados na pesquisa de copy só
 * para servir de gabarito de formato e extensão). Publicar depoimento falso
 * é publicidade enganosa (CDC, arts. 36–37) e derruba a autoridade que a
 * página constrói. Substituir por depoimentos reais, com autorização de
 * uso de imagem, antes de publicar — ver docs/CONTEUDO-PENDENTE.md.
 */
const depoimentos = [
  {
    texto:
      'Antes da Orizon, eu perdia meia manhã por semana resolvendo falta de porteiro. Hoje o posto é coberto e eu só fico sabendo depois, pelo relatório.',
    autor: '[PLACEHOLDER] Nome, Síndico Profissional',
    local: '[PLACEHOLDER] Condomínio — Cidade/UF',
  },
  {
    texto:
      'O que pesou para nós foi a documentação. Recebemos guias e certidões todo mês, sem cobrar. Isso reduz o risco jurídico dos condomínios da nossa carteira.',
    autor: '[PLACEHOLDER] Nome, Gestora de Contratos',
    local: '[PLACEHOLDER] Administradora',
  },
  {
    texto:
      'A assembleia aprovou pelo preço, mas ficou pelo padrão. O hall e o jardim mudaram de patamar em dois meses.',
    autor: '[PLACEHOLDER] Nome, Síndico',
    local: '[PLACEHOLDER] Condomínio — Cidade/UF',
  },
];

export function Depoimentos() {
  return (
    <section className="bg-offwhite px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Quem já contratou" title="O que síndicos dizem sobre a Orizon." />

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <figure key={depoimento.autor}>
              <Reveal>
                <blockquote className="font-display text-lg text-navy italic">
                  “{depoimento.texto}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-graytext">
                  <p className="font-semibold">{depoimento.autor}</p>
                  <p>{depoimento.local}</p>
                </figcaption>
              </Reveal>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
