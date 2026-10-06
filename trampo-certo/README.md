# Trampo Certo

## Sobre o projeto

O **Trampo Certo** é uma aplicação web desenvolvida em **React** com o objetivo de aproximar profissionais que procuram oportunidades de trabalho de empresas que precisam contratar trabalhadores para serviços temporários.

A proposta é facilitar a busca por vagas e profissionais, tornando o processo de contratação mais simples e organizado.

O projeto está sendo desenvolvido como atividade da disciplina de **Desenvolvimento Front-End II**, do curso de Análise e Desenvolvimento de Sistemas.

---

## Problema

Profissionais que trabalham como freelancers ou em serviços temporários, como garçons, cozinheiros e auxiliares de eventos, muitas vezes encontram oportunidades por indicação ou divulgação informal.

Ao mesmo tempo, restaurantes, hotéis, bares e empresas de eventos podem ter dificuldade para encontrar profissionais disponíveis de forma rápida.

O **Trampo Certo** busca facilitar essa conexão entre profissionais e oportunidades por meio de uma plataforma web.

---

## Objetivo

Desenvolver uma aplicação simples e intuitiva que permita:

* Visualizar oportunidades de trabalho;
* Consultar profissionais;
* Cadastrar informações por meio de formulários;
* Organizar vagas e profissionais em uma interface única;
* Facilitar a conexão entre profissionais e empresas.

---

## Tecnologias utilizadas

* **React 19**
* **Vite**
* **JavaScript**
* **HTML**
* **CSS**
* **Git**
* **GitHub**

---

##  Funcionalidades

Atualmente, o projeto conta com as seguintes funcionalidades:

* Página inicial com apresentação do projeto;
* Página de **Vagas**;
* Listagem de vagas disponíveis;
* Página de **Profissionais**;
* Listagem de profissionais;
* Página de **Cadastro**;
* Formulário para cadastro;
* Navegação entre as páginas;
* Renderização dinâmica de listas utilizando React;
* Gerenciamento de estado utilizando `useState`.

O projeto está sendo desenvolvido de forma incremental durante as sprints da disciplina.

---

##  Arquitetura da aplicação

A aplicação utiliza uma estrutura baseada em componentes React.

A navegação principal é controlada pelo componente `App.jsx`, utilizando estado para determinar qual página será exibida.

```text
App
├── Navbar
├── Home
├── Vagas
├── Profissionais
└── Cadastro
```

Os componentes estão organizados da seguinte forma:

```text
src/
├── components/
│   ├── Card.jsx
│   └── Navbar.jsx
│
├── page/
│   ├── Cadastro.jsx
│   ├── Home.jsx
│   ├── Profissionais.jsx
│   └── Vagas.jsx
│
├── assets/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Estrutura do projeto

```text
trampo-certo/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Card.jsx
│   │   └── Navbar.jsx
│   │
│   ├── page/
│   │   ├── Cadastro.jsx
│   │   ├── Home.jsx
│   │   ├── Profissionais.jsx
│   │   └── Vagas.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/j0rdanaaa/frontend-II.git
```

### 2. Entrar na pasta do projeto

```bash
cd frontend-II/trampo-certo
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npm run dev
```

Após executar o comando, o Vite disponibilizará um endereço local para acessar a aplicação no navegador.

Normalmente:

```text
http://localhost:5173
```

---

## Desenvolvimento por sprints

O desenvolvimento do **Trampo Certo** ocorre de forma incremental, acompanhando as atividades propostas na disciplina de Desenvolvimento Front-End II.

### Sprint 1

* Estrutura inicial do projeto React;
* Configuração do Vite;
* Criação da interface inicial;
* Desenvolvimento dos componentes;
* Organização das páginas;
* Implementação da navegação;
* Utilização de estados e eventos.

### Sprint 2

* Desenvolvimento da página de vagas;
* Desenvolvimento da página de profissionais;
* Criação do formulário de cadastro;
* Renderização dinâmica das informações;
* Utilização de `useState`;
* Aprimoramento da interface e interação com o usuário.

---

## Próximos passos

O projeto poderá receber novas funcionalidades durante sua evolução, como:

* Persistência dos dados;
* Maior reutilização dos componentes;
* Integração com back-end;
* Sistema de autenticação;
* Melhorias na busca e filtragem de vagas e profissionais;
* Aprimoramentos de acessibilidade e responsividade.

---

## Integrantes

* Fernando
* Jordana Gonçalves Góes
* Lucas
* Mateus

---

## Informações acadêmicas

**Disciplina:** Desenvolvimento Front-End II

**Curso:** Análise e Desenvolvimento de Sistemas — ADS31

**Instituição:** UNICESUSC
