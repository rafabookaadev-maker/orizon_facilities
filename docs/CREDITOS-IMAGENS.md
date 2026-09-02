# Créditos de imagens

Fotos de banco de imagens gratuito, licença de uso comercial, usadas como
placeholder até a Orizon gerar/fornecer as fotos definitivas (ver
`PROMPTS-IMAGENS.md`). A licença do Pexels permite uso comercial e modificação
sem exigir atribuição — os créditos abaixo são mantidos mesmo assim, por
transparência.

## `public/images/hero-1600.webp` / `hero-800.webp`

- **Fonte:** Pexels
- **Foto original:** [Balconies of a Modern Apartment Building](https://www.pexels.com/photo/balconies-of-a-modern-apartment-building-16110999/)
- **Fotógrafa:** Ayşegül Aytören
- **Licença:** [Pexels License](https://www.pexels.com/license/) — uso comercial livre, sem atribuição obrigatória
- **Tratamento aplicado:** redimensionada para 1600px e 800px de largura, convertida para WebP (qualidade 82). Nenhum recorte manual — o enquadramento final por viewport é feito via `object-cover` no CSS.

## Fotos dos cards de serviço (`public/images/servico-*.webp`)

| Arquivo | Foto original | Fotógrafo(a) |
|---|---|---|
| `servico-limpeza.webp` | [Group of people cleaning a dining room](https://www.pexels.com/photo/group-of-people-cleaning-a-dining-room-6197108/) | Tima Miroshnichenko |
| `servico-portaria.webp` | [A receptionist looking at a tablet](https://www.pexels.com/photo/a-receptionist-looking-at-a-tablet-4269266/) | Cedric Fauntleroy |
| `servico-jardinagem.webp` | [Gardener trimming hedges with pruning shears](https://www.pexels.com/photo/gardener-trimming-hedges-with-pruning-shears-38936338/) | Magda Ehlers |
| `servico-acesso.webp` | [Smartphone NFC access control in modern building](https://www.pexels.com/photo/smartphone-nfc-access-control-in-modern-building-33335189/) | Jakub Zerdzicki |

Todas sob [Pexels License](https://www.pexels.com/license/). Recortadas para 16:10
(vertical, centralizado) e exportadas em WebP em duas larguras (800px e 500px)
para `srcset`.

**Nota sobre `servico-acesso.webp`:** deliberadamente não usa foto de vigilante,
ronda ou vigilância patrimonial — mostra tecnologia de acesso (NFC/app), consistente
com o card "Controle de Acesso e Monitoramento" (ver `CONTEUDO-PENDENTE.md` sobre
por que este serviço não pode ser posicionado como "segurança").

## Logo (`public/images/logo*.webp`, `public/*icon*.png`, `public/favicon-32.png`)

Fornecida pelo usuário em `public/images/Logo.png` (autoria da Orizon/terceiro
contratado pela Orizon — não é asset de banco de imagens). Processada localmente
com ffmpeg: recorte da área transparente, geração da versão branca (silhueta,
para uso sobre navy) e do favicon/apple-touch-icon a partir do emblema. Nenhuma
edição de conteúdo, só recorte e redimensionamento.
