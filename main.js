import './style.css';
import { createElement } from '.lib/elements';

async function renderApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createElement('header', { className: 'header' }, [
    createElement('h1', {
      textContent: ' Game of Thrones',
    }),
  ]);

  appElement.append(appElement);
}
renderApp();
