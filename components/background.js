// Definir o template do componente
const backgroundTemplate = document.createElement('template');
backgroundTemplate.innerHTML = `
  <style>
    #video-background {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    background-size: cover;
    }
  </style>
  
    <video autoplay muted loop id="video-background">
    <source src="asset/geometric-dark.mp4" />
    </video>
`;

// Criar a classe do componente
class Background extends HTMLElement {
    constructor() {
        super(); // Sempre chame super() primeiro

        // Adicionar o shadow DOM para encapsulamento
        this.attachShadow({ mode: 'open' });

        // Anexar o conteúdo do template ao shadow DOM
        this.shadowRoot.appendChild(backgroundTemplate.content.cloneNode(true));
    }
}

// Definir o elemento customizado
customElements.define('background-component', Background);