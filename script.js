const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  navigation.classList.toggle('is-open', open);
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => { if (!event.target.closest('.header')) setMenu(false); });
window.matchMedia('(min-width: 901px)').addEventListener('change', () => setMenu(false));

// Keep all course content readable when JavaScript is unavailable.
const tabList = document.querySelector('.skill-tabs');
const tabs = Array.from(tabList.querySelectorAll('a'));
const panels = Array.from(document.querySelectorAll('[data-panel]'));
tabList.setAttribute('role', 'tablist');
tabs.forEach((tab) => {
  tab.id = 'tab-' + tab.dataset.skill;
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-controls', 'skill-' + tab.dataset.skill);
});
panels.forEach((panel) => {
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', 'tab-' + panel.dataset.panel);
  panel.tabIndex = 0;
});
function selectSkill(index, focus = false) {
  tabs.forEach((tab, i) => {
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
    panels[i].hidden = i !== index;
  });
  if (focus) tabs[index].focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', (event) => { event.preventDefault(); selectSkill(index); });
  tab.addEventListener('keydown', (event) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else if (event.key === ' ') { event.preventDefault(); selectSkill(index); return; }
    else return;
    event.preventDefault();
    selectSkill(next, true);
  });
});
function selectHashSkill() {
  const index = panels.findIndex((panel) => '#' + panel.id === location.hash);
  if (index >= 0) selectSkill(index);
}
selectSkill(0);
selectHashSkill();
window.addEventListener('hashchange', selectHashSkill);

const track = document.querySelector('#voice-track');
const previous = document.querySelector('#voice-prev');
const next = document.querySelector('#voice-next');
const position = document.querySelector('#voice-position');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function slideDistance() {
  return track.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
}
function updateCarousel() {
  previous.disabled = track.scrollLeft <= 2;
  next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
  const gap = parseFloat(getComputedStyle(track).columnGap);
  const first = Math.round(track.scrollLeft / slideDistance()) + 1;
  const visible = Math.max(1, Math.floor((track.clientWidth + gap + 2) / slideDistance()));
  const last = Math.min(4, first + visible - 1);
  position.textContent = first === last ? first + ' / 4' : first + '–' + last + ' / 4';
}
function moveCarousel(direction) {
  track.scrollBy({ left: direction * slideDistance(), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
}
previous.addEventListener('click', () => moveCarousel(-1));
next.addEventListener('click', () => moveCarousel(1));
track.addEventListener('scroll', updateCarousel, { passive: true });
new ResizeObserver(updateCarousel).observe(track);
updateCarousel();
