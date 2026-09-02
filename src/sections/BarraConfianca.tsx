import { site } from '../config/site';

/**
 * Números tratados como elemento gráfico (serif grande + régua dourada),
 * logo abaixo do hero — a pesquisa de CRO recomenda subir a prova social
 * cedo em vendas de risco percebido alto.
 *
 * IMPORTANTE: os valores vêm de src/config/site.ts e hoje são placeholder
 * (0). Ver docs/CONTEUDO-PENDENTE.md — não publicar com esses números.
 */
export function BarraConfianca() {
  const itens = [
    { valor: `${site.anosMercado}+`, label: 'anos de mercado' },
    { valor: `${site.postosAtivos}+`, label: 'postos ativos' },
    { valor: `${site.condominiosAtendidos}+`, label: 'condomínios atendidos' },
  ];

  return (
    <section aria-label="Números da Orizon Facilities" className="border-y border-graymid/20 bg-offwhite">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        {itens.map((item) => (
          <div key={item.label}>
            <p className="font-display text-4xl text-navy">{item.valor}</p>
            <div className="mt-2 h-px w-10 bg-gold" aria-hidden="true" />
            <p className="mt-2 text-sm text-graytext">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
