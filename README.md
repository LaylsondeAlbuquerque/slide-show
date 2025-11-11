<h1 align="center">Apresentação Interativa com Angular</h1>

<p align="center">
  <a href="https://laylsondealbuquerque.github.io/slide-show/">
    <img src="https://img.shields.io/badge/Ver_Apresentação_Online!-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Ver Apresentação Online" />
  </a>
</p>

<p align="center">
  <em>Um projeto de estudo focado na arquitetura reativa do Angular (v17+) com Signals.</em>
</p>

---

## Sobre o Projeto

Este é um projeto de estudo focado em **Angular (v17+)**, onde construí um visualizador de apresentações interativo (slides) em formato de Single Page Application (SPA).

<b>Este projeto tem um propósito prático muito especial:</b> ele foi desenvolvido para servir como o material de apresentação de um mini-curso de produção audiovisual. Este curso é voltado para o projeto social **Crescer**, focado em adolescentes de uma comunidade carente em Recife, Pernambuco.

O foco técnico foi na **arquitetura de estado local** e na **renderização de componentes dinâmicos**. A aplicação carrega o conteúdo de arquivos `.data.ts` (usados como um banco de dados estático) e os renderiza no template usando um "contrato" de modelo (`slide.model.ts`).

O núcleo da aplicação é 100% reativo, usando **Signals** para gerenciar o estado (qual aula e qual slide estão ativos) e **computed signals** para derivar o conteúdo que deve ser exibido.

---

## Funcionalidades

- [x] **Visualizador de Slides:** Renderiza o conteúdo principal da apresentação.
- [x] **Navegação de Slides:** Permite avançar e retroceder os slides com botões.
- [x] **Navegação por Gestos:** Suporte para `(swipeleft)` e `(swiperight)` em dispositivos móveis.
- [x] **Seleção de Aulas:** Um `<select>` permite trocar o conjunto de slides (Aula 1, Aula 2).
- [x] **Renderizador de Conteúdo:** O `slide-main` usa `@switch` para renderizar dinamicamente diferentes tipos de blocos (texto, listas, tabelas, citações) com base no modelo.
- [x] **Estilização Dinâmica:** O `slide-header` usa `@switch` para alterar o tamanho e a cor dos títulos (nível 1, 2 ou 3) com base no `slide.level`.
- [x] **UI Limpa:** Estilização feita com **Tailwind CSS**.

---

## Tecnologias Utilizadas

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

---

## O que eu aprendi

Este projeto foi fundamental para solidificar conceitos modernos de desenvolvimento com Angular:

* **Arquitetura "Smart/Dumb":** O `App` (`app.ts`) atua como o componente "Smart" (inteligente), gerenciando todo o estado. Os componentes `slide-header` e `slide-main` são "Dumb" (de apresentação), apenas recebendo dados via `@Input` e os exibindo.
* **Gerenciamento de Estado 100% com Signals:** Foi a base do projeto.
    * `signal()`: Usado como a "fonte da verdade" para o estado (`aulaSelecionada`, `indiceSlide`).
    * `computed()`: Usado para "derivar" valores reativamente (`slides` e `slideAtual`), recalculando automaticamente quando as fontes mudam.
* **Nova Sintaxe de Template (Controle de Fluxo):**
    * `@for`: Para iterar sobre os blocos de conteúdo e listas.
    * `@if`: Para exibir elementos condicionais (como o subtítulo).
    * `@switch`: A chave do projeto. Usado de duas formas:
        1.  Em `slide-header`: Para aplicar estilos diferentes com base no `slide.level`.
        2.  Em `slide-main`: Para criar um "renderizador" que escolhe qual HTML exibir com base no `block.type`.
* **Organização de Dados (Models/Data):** A importância de criar um "contrato" (`slide.model.ts`) para definir a forma dos dados, e usar arquivos `.data.ts` para simular um banco de dados estático, mantendo o `App` limpo.
* **Estilização com Tailwind CSS:** Uso de classes utilitárias diretamente no HTML para construir o layout.
* **Event Binding:** Uso de `(click)` para os botões, `(change)` para o select e eventos de gesto como `(swipeleft)` e `(swiperight)` para navegação.

---

## Como Executar Localmente

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/laylsondealbuquerque/slide-show.git](https://github.com/laylsondealbuquerque/slide-show.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd slide-show
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Execute o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
5.  Abra seu navegador em `http://localhost:4200/`.