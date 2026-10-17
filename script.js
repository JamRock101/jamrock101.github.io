'use strict';
(() => {
  const data = window.PORTFOLIO;
  if (!data) return;
  const byId = id => document.getElementById(id);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const safeUrl = value => {
    if (!value) return '';
    try { const u = new URL(value, window.location.href); return ['https:', 'http:'].includes(u.protocol) ? u.href : ''; } catch (_) { return ''; }
  };
  const tagHTML = items => `<div class="tag-cloud">${items.map(s => `<span class="tag">${escapeHTML(s)}</span>`).join('')}</div>`;
  const fill = (id, markup) => { const e = byId(id); if (e) e.innerHTML = markup; };

  fill('skillsGrid', data.skills.map(item => `<article class="skill-group"><h4>${escapeHTML(item.title)}</h4>${tagHTML(item.items)}</article>`).join(''));
  fill('certList', data.certifications.map(item => `<li>${escapeHTML(item)}</li>`).join(''));
  fill('awardsList', data.awards.map(item => `<li>${escapeHTML(item)}</li>`).join(''));
  fill('languagesList', data.languages.map(item => `<div class="language-row"><strong>${escapeHTML(item.name)}</strong><span>${escapeHTML(item.level)}</span></div>`).join(''));
  fill('experienceList', data.experience.map(e => `<article class="experience-row"><div class="exp-date">${escapeHTML(e.date)}</div><div class="exp-main"><h3>${escapeHTML(e.role)}</h3><p class="exp-company">${escapeHTML(e.company)} · ${escapeHTML(e.location)}</p><p class="exp-description">${escapeHTML(e.description)}</p><ul class="exp-bullets">${e.bullets.map(b => `<li>${escapeHTML(b)}</li>`).join('')}</ul></div><div class="exp-type">${escapeHTML(e.category)}</div></article>`).join(''));
  fill('researchGrid', data.research.map(r => `<article class="research-card"><div class="research-top"><span>${escapeHTML(r.type)}</span><span>${escapeHTML(r.date)}</span></div><div class="research-icon" aria-hidden="true">${escapeHTML(r.icon)}</div><h3>${escapeHTML(r.lab)}</h3><p class="research-mentor">${escapeHTML(r.role)} · ${escapeHTML(r.mentor)}</p><p class="research-body">${escapeHTML(r.body)}</p><ul class="research-details">${r.details.map(s => `<li>${escapeHTML(s)}</li>`).join('')}</ul><div class="research-tags">${tagHTML(r.tags)}</div></article>`).join(''));
  const involvementHTML = entries => entries.map(e => `<article class="compact-entry"><span class="compact-date">${escapeHTML(e.date)}</span><div><h4>${escapeHTML(e.title)}</h4><p class="compact-org">${escapeHTML(e.org)}</p><p>${escapeHTML(e.body)}</p></div></article>`).join('');
  ['leadership','university','sports','service'].forEach(key => fill(`${key}List`, involvementHTML(data[key])));
  fill('otherProjects', data.otherProjects.map(p => `<article class="other-project"><div class="other-project-top"><h4>${escapeHTML(p.title)}</h4><span>${escapeHTML(p.year)}</span></div><p>${escapeHTML(p.text)}</p><small>${escapeHTML(p.tag)}</small></article>`).join(''));
  fill('bucketGrid', data.bucket.map(b => `<article class="bucket-card"><div class="bucket-top"><span class="bucket-number">${escapeHTML(b.no)} / WISHLIST</span><span class="bucket-icon" aria-hidden="true">${escapeHTML(b.icon)}</span></div><h3>${escapeHTML(b.title)}</h3><p>${escapeHTML(b.caption)}</p><small>${escapeHTML(b.kind)}</small></article>`).join(''));

  const renderProject = p => {
    const image = p.image && /^(assets\/|https?:\/\/)/.test(p.image) ? p.image : '';
    const picture = image ? `<img src="${escapeHTML(image)}" alt="Photo of ${escapeHTML(p.title)}" loading="lazy">` : `<span class="cover-symbol" aria-hidden="true">${escapeHTML(p.icon)}</span><span class="cover-label">PHOTO SLOT / ADD YOUR IMAGE</span>`;
    const github = safeUrl(p.github); const demo = safeUrl(p.demo);
    return `<article class="project-card"><div class="project-cover">${picture}<span class="cover-number">${escapeHTML(p.number)} / 06</span>${p.status === 'coming-soon' ? '<span class="coming-soon-stamp">COMING SOON</span>' : ''}</div><div class="project-info"><div class="project-meta"><span>${escapeHTML(p.type)}</span><span>${escapeHTML(p.year)}</span></div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.teaser)}</p><div class="tags-wrap">${tagHTML(p.tags.slice(0,4))}</div><div class="project-links"><button type="button" class="project-detail-btn" data-project="${escapeHTML(p.id)}">Read the build story ↗</button>${github ? `<a class="project-link" href="${escapeHTML(github)}" target="_blank" rel="noopener noreferrer">Code ↗</a>` : ''}${demo ? `<a class="project-link" href="${escapeHTML(demo)}" target="_blank" rel="noopener noreferrer">Demo ↗</a>` : ''}${!github && !demo ? '<span class="project-link-placeholder">LINK SLOT +</span>' : ''}</div></div></article>`;
  };
  let currentFilter = 'all';
  const renderFilteredProjects = () => {
    const shown = data.projects.filter(p => currentFilter === 'all' || p.category === currentFilter);
    fill('projectGrid', shown.map(renderProject).join(''));
    byId('projectCount').textContent = `${String(shown.length).padStart(2,'0')} / ${String(data.projects.length).padStart(2,'0')} FEATURED`;
  };
  renderFilteredProjects();
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => { const selected = b === button; b.classList.toggle('active', selected); b.setAttribute('aria-pressed', String(selected)); });
    renderFilteredProjects();
  }));

  // A native <dialog> lets visitors read more from the detailed portfolio without leaving the page.
  const dialog = byId('projectDialog');
  const closeDialog = () => { if (dialog.open) dialog.close(); };
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-project]');
    if (!button) return;
    const p = data.projects.find(item => item.id === button.dataset.project);
    if (!p) return;
    const links = [['GitHub / source ↗',safeUrl(p.github)], ['Live demo / gallery ↗',safeUrl(p.demo)]].filter(x => !!x[1]);
    fill('dialogContent', `<div class="dialog-kicker">${escapeHTML(p.number)} / FEATURED PROJECT · ${escapeHTML(p.year)} ${p.status === 'coming-soon' ? '· COMING SOON' : ''}</div><h2 id="dialogTitle">${escapeHTML(p.title)}</h2><p class="dialog-overview">${escapeHTML(p.overview)}</p><h3>Inside the build</h3><ul>${p.bullets.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul><h3>Tools & technologies</h3>${tagHTML(p.tags)}${links.length ? `<div class="dialog-links">${links.map(([name,url]) => `<a class="dialog-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(name)}</a>`).join('')}</div>` : '<p class="dialog-empty">Project photos and external links can be added in data.js.</p>'}`);
    if (typeof dialog.showModal === 'function') dialog.showModal();
  });
  byId('dialogClose').addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });

  // Light / dark theme
  const root = document.documentElement;
  const themeToggle = byId('themeToggle');
  let savedTheme = '';
  try { savedTheme = localStorage.getItem('giorgio-portfolio-theme') || ''; } catch (_) {}
  const setTheme = theme => {
    root.dataset.theme = theme;
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    byId('themeIcon').textContent = theme === 'dark' ? '☀' : '☾';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#0b1113' : '#f8f9f3';
  };
  setTheme(['dark','light'].includes(savedTheme) ? savedTheme : 'dark');
  themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('giorgio-portfolio-theme', next); } catch (_) {}
  });

  // Mobile navigation
  const menuToggle = byId('menuToggle');
  const nav = byId('mainNav');
  const closeMenu = () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open navigation'); };
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => { if (nav.classList.contains('open') && !event.target.closest('.site-header')) closeMenu(); });

  const scrollProgress = byId('scrollProgress');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => { const max = document.documentElement.scrollHeight - innerHeight; scrollProgress.style.width = `${max > 0 ? scrollY / max * 100 : 0}%`; ticking = false; });
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if ('IntersectionObserver' in window) {
    const anchors = [...nav.querySelectorAll('a')];
    const watch = anchors.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${visible.target.id}`));
    }, { rootMargin: '-18% 0px -57% 0px', threshold: [0,.05,.1,.3] });
    watch.forEach(section => observer.observe(section));
  }
  byId('copyrightYear').textContent = new Date().getFullYear();
})();
