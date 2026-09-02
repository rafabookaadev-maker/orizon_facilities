const SERVICOS = ['Limpeza', 'Portaria', 'Jardinagem', 'Controle de Acesso'];

/**
 * Faixa contínua com os 4 serviços, rolando da direita para a esquerda.
 * Puramente decorativo/redundante em relação à seção de Serviços (que tem a
 * lista real, acessível) — por isso aria-hidden na faixa inteira. Pausa no
 * hover e para completamente sob prefers-reduced-motion (ver .marquee-track
 * em src/styles/index.css).
 */
export function ServiceMarquee() {
  const itens = [...SERVICOS, ...SERVICOS];

  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-navy/10 bg-gold py-3">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {itens.map((servico, i) => (
          <span
            key={`${servico}-${i}`}
            className="flex items-center gap-10 font-display text-sm font-bold tracking-[0.25em] text-navy uppercase"
          >
            {servico}
            <span className="text-navy/40">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
