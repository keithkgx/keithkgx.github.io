// Fade-in preload
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('preload');

  // Dark/light theme toggle
  const toggle = document.getElementById('theme-toggle');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    if (toggle) toggle.checked = true;
  }
  toggle?.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  });

  // Brush-trail cursor
  document.addEventListener('mousemove', e => {
    const dot = document.createElement('span');
    dot.className = 'cursor-dot';
    dot.style.left = `${e.clientX}px`;
    dot.style.top  = `${e.clientY}px`;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 1000);
  });
});
