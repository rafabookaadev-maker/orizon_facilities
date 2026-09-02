/**
 * Único lugar com dados reais/placeholder da empresa.
 * Nenhum outro arquivo deve hardcodar telefone, WhatsApp, CNPJ ou número de
 * postos/anos de mercado — importe daqui.
 *
 * TODO(orizon): substituir todos os placeholders abaixo pelos dados reais
 * antes de publicar a página. Ver docs/CONTEUDO-PENDENTE.md para a lista
 * completa do que falta levantar (números, depoimentos, prazos).
 */
export const site = {
  nome: 'Orizon Facilities',

  // 55 + DDD + número, só dígitos (sem +, espaço, hífen ou parênteses)
  whatsappNumero: '5511900000000',
  whatsappMensagemPadrao: 'Olá! Vim pelo site da Orizon Facilities e gostaria de um orçamento.',

  telefone: '(11) 0000-0000',
  email: 'contato@orizonfacilities.com.br',
  cidade: 'São Paulo — SP',

  cnpj: '00.000.000/0001-00',

  // Microprovas do hero/barra de confiança — placeholders, ver CONTEUDO-PENDENTE.md
  anosMercado: 0,
  postosAtivos: 0,
  condominiosAtendidos: 0,
} as const;
