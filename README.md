# Projeto Slide-Show de Aula (Angular)

Este projeto é a ferramenta de ensino para um curso de produção audiovisual do **Projeto Crescer**, uma iniciativa social para adolescentes em uma comunidade do Recife. Ele foi pensado para que os alunos possam acompanhar a aula com o conteúdo em suas mãos, já que o site é publicado usando o GitHub. Isso também permite que eles tenham acesso ao conteúdo das aulas mesmo após concluírem o curso.

---


## Aplicação ao Vivo (Demo)

Você pode acessar e usar a aplicação de slides diretamente no seu navegador através do link abaixo:

**[https://laylsondealbuquerque.github.io/slide-show/](https://laylsondealbuquerque.github.io/slide-show/)**

---

## Principais Funcionalidades

* **Navegação por Slides:** Avance e volte pelos slides com botões na tela.
* **Gestos de Arraste (Swipe):** Em dispositivos móveis, arraste para a esquerda ou direita para trocar de slide (via **HammerJS**).
* **Slides Hierárquicos:** O conteúdo é estruturado em níveis (H1, H2, H3), e o layout do slide (ex: tamanho do título) se adapta a essa hierarquia.
* **Componentização:** A interface é dividida em componentes reutilizáveis.
* **Design Responsivo:** Estilizado com **Tailwind CSS** para funcionar em desktop e mobile.

---

## Arquitetura do Projeto

O projeto foi refatorado para usar uma arquitetura de **"Smart Components" e "Dumb Components"**, o que centraliza a lógica e facilita a manutenção.

* **`App` (Smart Component):**
    * É o "cérebro" da aplicação.
    * Gerencia todo o estado usando **Angular Signals** (ex: `indiceAtual = signal(0)`).
    * Calcula o slide atual (ex: `slideAtual = computed(...)`).
    * Contém as funções de navegação (`proximoSlide()`, `voltarSlide()`).
    * Orquestra quais dados os componentes filhos irão exibir.

* **`SlideHeaderComponent` (Dumb Component):**
    * Componente "burro" que apenas exibe o cabeçalho.
    * Recebe o slide atual via `@Input()`: `<app-slide-header [slide]="slideAtual()">`.
    * Usa um `@switch` interno para estilizar o título com base no `slide.level` (H1, H2 ou H3).

* **`SlideMainComponent` (Dumb Component):**
    * Componente "burro" que apenas exibe o conteúdo principal.
    * Recebe os blocos de conteúdo via `@Input()`: `<app-slide-main [blocks]="slideAtual().blocks">`.
    * Usa um `@for` e `@switch` para renderizar os diferentes tipos de blocos (texto, lista, tabela, etc.).

Este padrão permite que, no futuro, o `App` possa carregar outras aulas (Aula 3, Aula 4) e passá-las para os mesmos componentes filhos sem esforço.

---

## Tecnologias Utilizadas

* **[Angular](https://angular.io/)** (v17+)
* **[TypeScript](https://www.typescriptlang.org/)**
* **[Angular Signals](https://angular.io/guide/signals)** (para gerenciamento de estado)
* **[Tailwind CSS](https://tailwindcss.com/)** (para todo o design e layout)
* **[HammerJS](https://hammerjs.github.io/)** (para os gestos de swipe)

---

## Como Executar Localmente

1.  Clone este repositório:
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd nome-do-projeto
    ```

3.  Instale as dependências (incluindo `hammerjs`):
    ```bash
    npm install
    ```

4.  Execute o servidor de desenvolvimento:
    ```bash
    ng serve -o
    ```

5.  Abra seu navegador em `http://localhost:4200/`.