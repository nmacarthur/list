import { LitElement, css, html } from 'https://cdn.skypack.dev/lit';
import { styleMap } from 'https://cdn.skypack.dev/lit/directives/style-map.js';

import { COLOURS, SHADES, KEYS as COLOUR_KEYS } from '../../constants/colours.js';

export default class Layer extends LitElement {
    static get properties () {
        return {
            colour: { type: String },
            style: {},
        }
    }

    static styles = css`
        .layer {
            display: inline-block;
            position: relative;
            padding: 0.75rem;
            border: 2px solid var(--layer-colour, #000000);
            border-radius: 8px;
            background-color: #fff;
        }

        .layer:after {
            content:'';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 10px;
            left: 10px;
            border-radius: 8px;
            z-index: -1;
            background: repeating-linear-gradient(
                -45deg, 
                var(--layer-shade, rgba(0,0,0,0.5)) 0px, 
                var(--layer-shade, rgba(0,0,0,0.05)) 4px, 
                var(--layer-colour, rgb(0,0,0)) 4px, 
                var(--layer-colour, rgb(0,0,0)) 6px
            );
        }

        .layer--active {
            transform: translate(5px, 5px);
        }

        .layer--active:after {
            transform: translate(-5px, -5px);
        }

    `;

    constructor() {
        super();
        this.colour = COLOUR_KEYS.black;
    }

    render() {
        const colour = COLOURS[this.colour];
        const shade = SHADES[this.colour];
        return html`<div class="layer" style=${styleMap({ '--layer-colour': colour, '--layer-shade': shade })}><slot></slot></div>`;
    }
}

customElements.define('lil-layer', Layer);
