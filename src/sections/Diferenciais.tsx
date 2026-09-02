import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

const diferenciais = [
  {
    titulo: 'Cobertura de falta no mesmo turno',
    texto: 'Folguista e plantonista dimensionados no contrato. Posto vago não vira problema seu.',
  },
  {
    titulo: 'Documentação trabalhista todo mês',
    texto:
      'Guias de FGTS e INSS, folha de pagamento e certidões negativas entregues com a nota fiscal.',
  },
  {
    titulo: 'Supervisor com nome e telefone',
    texto: 'Cada condomínio tem um supervisor responsável e visita periódica definida em contrato.',
  },
  {
    titulo: 'Equipe treinada antes de começar',
    texto:
      'Integração, normas de segurança do trabalho, EPI e conduta com morador são por nossa conta.',
  },
  {
    titulo: 'Custo fixo e previsível',
    texto: 'Um valor por posto, sem 13º, férias ou rescisão surpreendendo a previsão orçamentária.',
  },
  {
    titulo: 'Baixo turnover',
    texto:
      'Salário em dia e gestão de pessoas de verdade. O morador reconhece quem trabalha no prédio.',
  },
];

export function Diferenciais() {
  return (
    <section className="bg-offwhite px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Por que a Orizon"
          title="Por que síndicos trocam de terceirizada — e ficam com a Orizon."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item, i) => (
            <Reveal key={item.titulo}>
              <span className="font-display text-sm text-gold-text">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-lg text-navy">{item.titulo}</h3>
              <p className="mt-2 text-graytext">{item.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
