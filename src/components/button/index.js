import { LitElement, css, html } from 'https://cdn.skypack.dev/lit';

export default class Button extends LitElement {
    static get properties () {
        return {
            colour: { type: String },
        }
    }
    static styles = css`
        .button {
            font: inherit;
            appearance: none; 
            border: none;
            background-color: transparent;
            display: inline-block;
            cursor: pointer;
        }

        .button__container {
            position: relative;
            display:inline-block;
        }

    `;

    constructor() {
        super();
        this.addEventListener('click', (e) => console.log(e));
    }

    render() {
        return html`
            <div class="button__container">
                <lil-layer class="button" colour='${this.colour}'>
                    <slot></slot>
                </lil-layer>
            </div>
        `;
    }
}

customElements.define('lil-button', Button);
