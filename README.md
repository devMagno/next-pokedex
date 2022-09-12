# Pokédex 🔴⚡

## 📖 Sobre

Trata-se de uma Pokédex desenvolvida utilizando Next.js e TypeScript, utilizando dados da [PokéAPI](https://pokeapi.co/). Para estilização foi escolhida a abordagem com Sass (síntaxe SCSS) e CSS modules. Foi utilizado a biblioteca React Query para cache local dos dados da API e gerenciamento assíncrono de estados utilizando a abordagem `stale-while-revalidate`, além de geração estática de páginas pensando em SEO. Para testes, foi utilizado o Jest junto à React Testing Library. Para padronização do código foi utilizado ESLint e Prettier.

Sinta-se à vontade para contribuir com o projeto ou visite o site clicando [aqui](https://next-pokedex-seven.vercel.app/).

---

## 🧰 Dependências

- **Axios** para requisições HTTP
- **React Query** para gerenciamento de estado assíncrono
- **React Icons** como biblioteca de ícones
- **React Loading Skeleton** para animação do tipo skeleton
- **Jest** e **React Testing Library** para testes

---

## 🔧 Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/devMagno/next-pokedex

# Entre no diretório
cd next-pokedex

# Baixe as dependências
npm i

# Execute o projeto
npm run dev

# Execute os testes do projeto
npm run test
```

---
