'use strict';
/*
 * Shared page behavior. Each HTML file imports this script and data.js.
 * The site has no build step, server, framework, or external JavaScript dependencies.
 */
(() => {
  const data = window.PORTFOLIO;
  if (!data) return;
  const byId = id => document.getElementById(id);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const safeURL = value => {
    if (!value || typeof value !== 'string') return '';
    try { const url = new URL(value, window.location.href); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch (_) { return ''; }
  };
  const safeImage = value => {
    if (!value || typeof value !== 'string') return '';
    return /^(assets\/[\w\-./]+|https?:\/\/[^\s]+)$/.test(value) && !value.includes('..') ? value : '';
  };
  const fill = (id, markup) => { const el = byId(id); if (el) el.innerHTML = markup; };
  const tagsHTML = items => `<div class="tag-cloud">${(items || []).map(t => `<span class="tag">${escapeHTML(t)}</span>`).join('')}</div>`;

  // Education
  if (byId('skillsGrid')) {
    fill('skillsGrid', data.skills.map(x => `<article class="skill-group"><h4>${escapeHTML(x.title)}</h4>${tagsHTML(x.items)}</article>`).join(''));
    fill('certList', data.certifications.map(x => `<li>${escapeHTML(x)}</li>`).join(''));
    fill('awardsList', data.awards.map(x => `<li>${escapeHTML(x)}</li>`).join(''));
    fill('languagesList', data.languages.map(x => `<div class="language-row"><strong>${escapeHTML(x.name)}</strong><span>${escapeHTML(x.level)}</span></div>`).join(''));
  }

  // Professional experience
  if (byId('experienceList')) {
    fill('experienceList', data.experience.map(x => `<article class="experience-row"><div class="exp-date">${escapeHTML(x.date)}</div><div class="exp-main"><h3>${escapeHTML(x.role)}</h3><p class="exp-company">${escapeHTML(x.company)} · ${escapeHTML(x.location)}</p><p class="exp-description">${escapeHTML(x.description)}</p><ul class="exp-bullets">${x.bullets.map(b => `<li>${escapeHTML(b)}</li>`).join('')}</ul></div><div class="exp-type">${escapeHTML(x.category)}</div></article>`).join(''));
  }

  // Research
  if (byId('researchGrid')) {
    fill('researchGrid', data.research.map(x => `<article class="research-card"><div class="research-top"><span>${escapeHTML(x.type)}</span><span>${escapeHTML(x.date)}</span></div><div class="research-icon" aria-hidden="true">${escapeHTML(x.icon)}</div><h3>${escapeHTML(x.lab)}</h3><p class="research-mentor">${escapeHTML(x.role)} · ${escapeHTML(x.mentor)}</p><p class="research-body">${escapeHTML(x.body)}</p><ul class="research-details">${x.details.map(b => `<li>${escapeHTML(b)}</li>`).join('')}</ul><div class="research-tags">${tagsHTML(x.tags)}</div></article>`).join(''));
  }

  // Involvement
  const entries = items => items.map(x => `<article class="compact-entry"><span class="compact-date">${escapeHTML(x.date)}</span><div><h4>${escapeHTML(x.title)}</h4><p class="compact-org">${escapeHTML(x.org)}</p><p>${escapeHTML(x.body)}</p></div></article>`).join('');
  ['leadership','university','sports','service'].forEach(key => fill(`${key}List`, entries(data[key])));

  // About-me photos. The blank placeholders intentionally do not imply actual uploaded photos.
  if (byId('aboutPhotoGallery')) {
    fill('aboutPhotoGallery', data.aboutPhotos.map((x, i) => {
      const src = safeImage(x.image);
      return `<figure class="personal-photo personal-photo-${i + 1}">${src
        ? `<img src="${escapeHTML(src)}" alt="${escapeHTML(x.label)}" loading="${i ? 'lazy' : 'eager'}">`
        : `<div class="personal-photo-placeholder"><span class="photo-crosshair" aria-hidden="true">＋</span><strong>${escapeHTML(x.label)}</strong><small>ADD YOUR PHOTO</small><code>${escapeHTML(x.hint)}</code></div>`
      }</figure>`;
    }).join(''));
  }

  // Projects: a full-length reverse-chronological timeline, not a popup/grid.
  if (byId('projectTimeline')) {
    const projects = [...data.projects].sort((a,b) => String(b.sortKey || '').localeCompare(String(a.sortKey || '')));
    const mediaHTML = (item, number) => {
      const file = safeImage((item.images || [])[number]);
      if (file) return `<div class="timeline-picture"><img src="${escapeHTML(file)}" alt="${item.illustration ? 'Concept illustration' : 'Project photograph'} for ${escapeHTML(item.title)}" loading="lazy"><span class="picture-credit">${item.illustration ? 'CONCEPT ILLUSTRATION · NOT BUILD PHOTO' : 'PROJECT PHOTO'} / ${number + 1}</span></div>`;
      return `<div class="timeline-picture photo-empty"><div class="photo-slot-symbol" aria-hidden="true">▧</div><strong>PHOTO ${String(number + 1).padStart(2,'0')}</strong><span>YOUR PROJECT IMAGE GOES HERE</span><small>Edit images in data.js</small></div>`;
    };
    fill('projectTimeline', projects.map((item, index) => {
      const github = safeURL(item.github); const demo = safeURL(item.demo);
      const photosCount = item.featured ? 2 : 1;
      const pics = Array.from({length:photosCount},(_,i) => mediaHTML(item,i)).join('');
      const status = item.status === 'coming-soon' ? '<span class="project-state state-soon">COMING SOON</span>' : '';
      return `<article class="timeline-entry" id="${escapeHTML(item.id)}">
        <div class="timeline-rail"><span class="rail-dot"></span><span class="rail-index">${String(index+1).padStart(2,'0')}</span></div>
        <div class="timeline-project">
          <div class="timeline-media">${pics}</div>
          <div class="timeline-story">
            <div class="timeline-meta"><span>${escapeHTML(item.year)}</span><span>${escapeHTML(item.type)}</span></div>
            <div class="timeline-title-row"><h2>${escapeHTML(item.title)}</h2>${status}</div>
            <p class="timeline-teaser">${escapeHTML(item.teaser)}</p>
            <p class="timeline-description">${escapeHTML(item.overview)}</p>
            <ul class="timeline-bullets">${(item.bullets||[]).map(point=>`<li>${escapeHTML(point)}</li>`).join('')}</ul>
            ${tagsHTML(item.tags)}
            <div class="timeline-linkbar">
              ${github ? `<a href="${escapeHTML(github)}" target="_blank" rel="noopener noreferrer" class="timeline-link">GitHub repository ↗</a>` : `<span class="timeline-link-slot" title="Set the github field in data.js">⌁ GitHub link slot</span>`}
              ${demo ? `<a href="${escapeHTML(demo)}" target="_blank" rel="noopener noreferrer" class="timeline-link secondary">Demo / gallery ↗</a>` : `<span class="timeline-link-slot secondary" title="Set the demo field in data.js">＋ Demo / gallery slot</span>`}
            </div>
          </div>
        </div>
      </article>`;
    }).join(''));
    fill('projectCount', `${projects.length} PROJECTS`);
  }

  // Bucket list progress reflects data.js, not each viewer's local actions.
  // Change completed: true for an entry to publish the checkmark for all visitors.
  if (byId('bucketList')) {
    const done = data.bucket.filter(x => x.completed === true).length;
    const total = data.bucket.length;
    fill('bucketList', data.bucket.map((x,i) => {
      const checked = x.completed === true;
      return `<article class="bucket-row ${checked ? 'is-done' : ''} ${x.placeholder ? 'is-placeholder' : ''}">
        <span class="bucket-sequence">${String(i+1).padStart(2,'0')}</span>
        <span class="bucket-row-content"><strong>${escapeHTML(x.title)}</strong><small>${escapeHTML(x.caption || '')}</small></span>
        <span class="bucket-row-kind">${escapeHTML(x.kind || 'Goal')}</span>
        <span class="bucket-check ${checked ? 'checked' : ''}" role="img" aria-label="${checked ? 'Completed' : 'Not yet completed'}">${checked ? '✓' : ''}</span>
      </article>`;
    }).join(''));
    fill('bucketProgressLabel', `${String(done).padStart(2,'0')} / ${String(total).padStart(2,'0')}`);
    fill('bucketTotal', `${total} GOAL SLOTS`);
    const progress = byId('bucketProgressFill');
    if (progress) progress.style.width = `${total ? Math.round(done/total*100) : 0}%`;
  }

  // Theme is remembered when navigating between the seven HTML pages.
  const root = document.documentElement;
  const themeToggle = byId('themeToggle');
  let saved = '';
  try { saved = localStorage.getItem('giorgio-portfolio-theme') || ''; } catch (_) {}
  const setTheme = theme => {
    root.dataset.theme = theme;
    themeToggle?.setAttribute('aria-label',theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    fill('themeIcon',theme === 'dark' ? '☀' : '☾');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#071426' : '#edf5ff';
  };
  setTheme(['dark','light'].includes(saved) ? saved : 'dark');
  themeToggle?.addEventListener('click',() => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('giorgio-portfolio-theme',next); } catch (_) {}
  });

  // Collapsible menu on narrow screens.
  const nav = byId('mainNav'), menuToggle = byId('menuToggle');
  const closeMenu = () => {
    nav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded','false');
    menuToggle?.setAttribute('aria-label','Open navigation');
  };
  menuToggle?.addEventListener('click',() => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
    menuToggle.setAttribute('aria-label',open ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click',e => { if (nav?.classList.contains('open') && !e.target.closest('.site-header')) closeMenu(); });

  // Per-page reading progress.
  const progress = byId('scrollProgress');
  let pending = false;
  const onScroll = () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - innerHeight;
      if (progress) progress.style.width = `${max > 0 ? scrollY / max * 100 : 0}%`;
      pending = false;
    });
  };
  addEventListener('scroll',onScroll,{passive:true}); onScroll();
  fill('copyrightYear',String(new Date().getFullYear()));
})();
