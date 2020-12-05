import content from './content.js';

window.addEventListener('load', () => {
	const h1 = document.querySelector('h1');
	const p = document.querySelector('p');

	h1.textContent = content.title;
	p.textContent = content.content;
});