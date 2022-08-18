/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'https://unpkg.com/lit?module';
import {customElement, property} from 'https://unpkg.com/lit?module/decorators.js?module';

 /**
  * An example element.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 @customElement('my-element')
 export class MyElement extends LitElement {
   static styles = css`
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;

   /**
    * The name to say "Hello" to.
    */
   @property()
   name = 'World';

   /**
    * The number of times the button has been clicked.
    */
   @property({type: Number})
   count = 0;

  render() {
     return html`
       <h1>${this.sayHello(this.name)}!</h1>
       <button @click=${this._onClick} part="button">
         Click Count: ${this.count}
       </button>
       <slot></slot>
     `;
   }

    _onClick() {
     this.count++;
     this.dispatchEvent(new CustomEvent('count-changed'));
   }

   /**
    * Formats a greeting
    * @param name The name to say "Hello" to
    */
   sayHello(name) {
     return `Hello, ${name}`;
   }
 }
