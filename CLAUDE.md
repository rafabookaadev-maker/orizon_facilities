# Orizon Facilities

> Esse arquivo é lido pelo Claude no início de toda conversa.
> **Mantenha curto e humano.** Para regras determinísticas, use `settings.json`.
> Para conhecimento sob demanda, use `.claude/skills/`.

## Stack

- **Frontend:** React 19 + TypeScript, Vite (build/dev), TailwindCSS
- **Runtime:** Node.js 22 LTS

> ⚠️ **Estado atual:** o app ainda não foi scaffoldado — não há `package.json`,
> `src/` nem `tailwind.config.ts` neste repositório ainda. Os comandos e a
> estrutura abaixo são o alvo assim que o projeto Vite for criado; não assuma
> que existem até checar.

## Identidade visual

Tokens do logo. Fonte da verdade: `tailwind.config.ts` — aqui é só referência.

- **Navy** `#18293C` — cor primária, texto, fundos escuros
- **Dourado** `#C5985B` — acento, CTAs, detalhes
- **Cinza** `#8F98A1` — texto secundário, bordas
- **Off-white** `#F7F8FA` — fundo de seções claras

## Comandos essenciais

```bash
# Setup
npm install             # instala deps
npm run dev             # sobe dev server (Vite)

# Qualidade
npm run lint            # eslint
npm run typecheck       # tsc --noEmit
npm run test            # vitest

# Deploy
npm run build           # build de produção
npm run deploy:staging
npm run deploy:prod     # roda smoke tests primeiro
```

## Convenções

- **Branches:** `feat/<slice>-<short-desc>`, `fix/<short-desc>`, `chore/<short-desc>`
- **Commits:** Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`)
- **PRs:** Sempre referencie a issue, descreva o "porquê", não só o "o quê"
- **Tests:** TDD onde a complexidade pede; testes lêem como spec

## Estrutura

```
src/
  components/     # componentes reutilizáveis
  sections/       # blocos de página (Hero, Servicos, Contato...)
  pages/          # rotas
  lib/            # helpers, tipos compartilhados
  styles/         # index.css (diretivas Tailwind + tokens CSS)
  main.tsx
public/           # assets estáticos (logo, favicon)
```

## Quando pedir ajuda

- Para revisão: invoque a skill `code-review-b2`.
- Para auditoria de segurança: invoque a skill `security-check`.
- Para UI/componentes de página: invoque `frontend-design` (visual distinto) ou
  `frontend-ui-engineering` (a11y/responsividade/produção).
- Para features novas ou requisitos ambíguos: invoque `spec-driven-development`
  antes de codar.
- Para commitar: invoque a skill `commit` (nunca dá push sozinha).
- Para regras determinísticas (formatação, secrets, comandos perigosos): já há hooks rodando.

## O que NÃO fazer

- Não criar arquivos `.env*` — use Secret Manager / Supabase secrets.
- Não usar `any` em TypeScript sem comentário justificando.
- Não fazer `git push --force` em `main`.
- Não adicionar deps sem rodar audit primeiro.
- Não hardcodar hex no JSX — use as classes do tema (`bg-navy`, `text-gold`).