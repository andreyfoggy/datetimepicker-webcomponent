import { LitElement, html } from 'lit-element';
import * as JQuery from 'jquery/dist/jquery.min';
import * as picker from 'jquery-datetimepicker/build/jquery.datetimepicker.full.min';
class TodoView extends LitElement {
  render() {
    return html`
      <p>todo-view</p>
    `;
  }
}

customElements.define('todo-view', TodoView);
