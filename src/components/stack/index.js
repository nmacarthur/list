import { LitElement, css, html } from 'https://cdn.skypack.dev/lit';

export default class Stack extends LitElement {
    static styles = css`
        .stack {
            display: flex;
            flex-direction: column;
        }

        ::slotted(*) {
           margin-bottom: 1rem;
        }

        ::slotted(*:last-child) {
            margin-bottom: 0;
        }
    `;

    constructor() {
        super();
    }

    render() {
        return html`<div class="stack"><slot></slot></div>`;
    }
}

customElements.define('lil-stack', Stack);
