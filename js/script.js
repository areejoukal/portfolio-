/* ============================================================
   Portfolio — script.js (Final with i18n)
   ============================================================ */
'use strict';

(function () {
  const WEB3FORMS_KEY = '213ac684-87a0-4a07-b099-cbca16c12f26';
  const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);

  const t = (k, v) => (window.i18n ? window.i18n.t(k, v) : k);

  window.__portfolioReady = true;

  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- الثيم ---------- */
  const themeToggle = $('#theme-toggle');
  const storedTheme = () => { try { const s = localStorage.getItem('theme'); return s === 'light' || s === 'dark' ? s : null; } catch (e) { return null; } };
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  const applyTheme = (theme, animate) => {
    if (animate && !reduceMotion) {
      root.classList.add('theme-transition');
      setTimeout(() => root.classList.remove('theme-transition'), 400);
    }
    root.setAttribute('data-theme', theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1a1714' : '#c2582c');
    if (themeToggle) {
      const dark = theme === 'dark';
      themeToggle.setAttribute('aria-pressed', String(dark));
      if (window.i18n) {
        const key = dark ? 'theme.toggleLight' : 'theme.toggleDark';
        /* ملاحظة: مفتاح toggleLight/Dark غير موجود؛ نستخدم المفتاح العام */
        themeToggle.setAttribute('aria-label', t('theme.toggle'));
        themeToggle.setAttribute('title', t('theme.toggleTitle'));
      }
    }
  };

  applyTheme(storedTheme() || (systemDark.matches ? 'dark' : 'light'), false);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
      try { localStorage.setItem('theme', next); } catch (e) { }
    });
  }
  const onSystemChange = (e) => { if (!storedTheme()) applyTheme(e.matches ? 'dark' : 'light', true); };
  if (systemDark.addEventListener) systemDark.addEventListener('change', onSystemChange);
  else if (systemDark.addListener) systemDark.addListener(onSystemChange);

  /* تحديث aria-label زر الثيم عند تغيير اللغة */
  window.addEventListener('langchange', () => {
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', t('theme.toggle'));
      themeToggle.setAttribute('title', t('theme.toggleTitle'));
    }
  });

  /* ---------- الشريط العلوي + القائمة + Scroll-spy ---------- */
  const topbar = $('#topbar');
  const burger = $('#burger');
  const nav = $('.nav');
  const navLinks = $$('.nav__link');
  const sections = $$('section[id]');
  const toTop = $('#to-top');

  const closeNav = () => {
    if (!nav || !burger) return;
    nav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  };

  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    navLinks.forEach((l) => l.addEventListener('click', closeNav));
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) closeNav();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeNav(); burger.focus(); } });
    window.matchMedia('(min-width: 1101px)').addEventListener?.('change', closeNav);
  }

  const spyMap = { faq: 'process-contact' };
  const updateOnScroll = () => {
    const y = window.scrollY;
    if (topbar) topbar.classList.toggle('scrolled', y > 20);
    if (toTop) toTop.classList.toggle('show', y > 500);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    root.style.setProperty('--p', max > 0 ? Math.min(y / max, 1).toFixed(4) : 0);

    let current = sections.length ? sections[0].id : '';
    const probe = y + 140;
    sections.forEach((s) => { if (s.offsetTop <= probe) current = s.id; });
    current = spyMap[current] || current;
    navLinks.forEach((l) => {
      const on = l.getAttribute('href') === `#${current}`;
      l.classList.toggle('active', on);
      if (on) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
    });
  };
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateOnScroll(); ticking = false; });
  }, { passive: true });
  updateOnScroll();

  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  /* ---------- التمرير الداخلي ---------- */
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      history.pushState(null, '', id);
    });
  });

  /* ---------- الفلاتر ---------- */
  const initFilters = (sectionSelector, gridId) => {
    const section = $(sectionSelector);
    const grid = section && section.querySelector(`#${gridId}`);
    if (!grid) return;
    const filters = $$('.filter', section);
    const cards = $$('.project', grid);

    filters.forEach((btn) => btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      filters.forEach((b) => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
      cards.forEach((card) => {
        const show = f === 'all' || card.dataset.category === f;
        card.classList.toggle('hidden', !show);
        if (show && !reduceMotion && card.animate) {
          card.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
            { duration: 380, easing: 'cubic-bezier(.4,0,.2,1)' });
        }
      });
    }));
  };
  initFilters('#design', 'design-grid');
  initFilters('#development', 'dev-grid');

  /* ---------- نموذج التواصل ---------- */
  const form = $('#contact-form');
  const statusEl = $('#form-status');
  const submitBtn = $('#submit-btn');
  const RATE_MS = 60000, RATE_KEY = 'lastSubmit';

  const isRateLimited = () => { try { return Date.now() - parseInt(localStorage.getItem(RATE_KEY) || '0', 10) < RATE_MS; } catch (e) { return false; } };
  const markSubmit = () => { try { localStorage.setItem(RATE_KEY, String(Date.now())); } catch (e) { } };

  const setStatus = (msg, type) => {
    if (!statusEl) return;
    statusEl.className = 'form__status' + (type ? ' ' + type : '');
    statusEl.textContent = msg;
  };

  const setError = (name, msg) => {
    const errEl = $(`[data-error="${name}"]`);
    const input = $(`#${name}`);
    if (errEl) errEl.textContent = msg || '';
    if (input) {
      input.classList.toggle('error', Boolean(msg));
      if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
    }
  };

  const validate = (d) => {
    const rules = [
      ['name', d.name.length >= 2, t('form.err.name')],
      ['email', isValidEmail(d.email), t('form.err.email')],
      ['subject', d.subject.length >= 3, t('form.err.subject')],
      ['message', d.message.length >= 10, t('form.err.message')]
    ];
    let firstBad = null;
    rules.forEach(([field, ok, msg]) => {
      setError(field, ok ? '' : msg);
      if (!ok && !firstBad) firstBad = field;
    });
    if (firstBad) $(`#${firstBad}`).focus();
    return !firstBad;
  };

  if (form) {
    $$('input, textarea', form).forEach((f) => f.addEventListener('input', () => { if (f.id) setError(f.id, ''); }));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const trap = form.querySelector('[name="botcheck"]');
      if (trap && trap.value !== '') { setStatus(t('form.success', { name: '' }), 'success'); form.reset(); return; }

      if (isRateLimited()) { setStatus(t('form.rateLimit'), 'error'); return; }

      const fd = new FormData(form);
      const data = {
        name: String(fd.get('name') || '').trim(),
        email: String(fd.get('email') || '').trim(),
        subject: String(fd.get('subject') || '').trim(),
        message: String(fd.get('message') || '').trim()
      };

      if (!validate(data)) { setStatus(t('form.validation'), 'error'); return; }

      if (WEB3FORMS_KEY.startsWith('YOUR_')) {
        console.warn('Web3Forms key not configured in js/script.js');
        setStatus(t('form.notConfigured'), 'error');
        return;
      }

      setStatus(t('form.sending'), '');
      if (submitBtn) submitBtn.disabled = true;

      try {
        const res = await fetch(WEB3FORMS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            replyto: data.email,
            subject: `New message from website: ${data.subject}`,
            from_name: 'Areej Oukal — Portfolio',
            name: data.name,
            email: data.email,
            message: `Project type: ${data.subject}\n\n${data.message}`
          })
        });
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.success) {
          markSubmit();
          setStatus(t('form.success', { name: data.name.split(' ')[0] }), 'success');
          form.reset();
        } else {
          throw new Error(json.message || 'Send failed');
        }
      } catch (err) {
        setStatus(t('form.error'), 'error');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  /* ---------- ظهور العناصر عند التمرير ---------- */
  const revealEls = $$('.reveal, .stagger');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- طبقة الحركة المتقدمة ---------- */
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (!reduceMotion) {
    const h1 = $('.hero__title');
    if (h1 && !h1.classList.contains('is-split')) {
      let i = 0;
      const wrap = (node) => {
        const w = document.createElement('span');
        w.className = 'w';
        const inner = document.createElement('span');
        inner.style.setProperty('--i', i++);
        inner.appendChild(node);
        w.appendChild(inner);
        return w;
      };
      const frag = document.createDocumentFragment();
      Array.from(h1.childNodes).forEach((n) => {
        if (n.nodeType === 3) {
          n.textContent.split(/(\s+)/).forEach((tk) => {
            if (!tk) return;
            if (/^\s+$/.test(tk)) frag.appendChild(document.createTextNode(' '));
            else frag.appendChild(wrap(document.createTextNode(tk)));
          });
        } else {
          frag.appendChild(wrap(n.cloneNode(true)));
        }
      });
      h1.textContent = '';
      h1.appendChild(frag);
      h1.classList.add('is-split');
    }

    if (finePointer) {
      document.addEventListener('pointermove', (e) => {
        const card = e.target.closest && e.target.closest('.project, .why-card, .service');
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      }, { passive: true });

      const pc = $('.portrait-card');
      if (pc) {
        pc.addEventListener('pointermove', (e) => {
          const r = pc.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          pc.classList.add('is-tilting');
          pc.style.transform = `rotateY(${(x * 8).toFixed(2)}deg) rotateX(${(-y * 8).toFixed(2)}deg)`;
        });
        pc.addEventListener('pointerleave', () => { pc.classList.remove('is-tilting'); pc.style.transform = ''; });
      }

      $$('.btn--primary:not(.btn--sm), .btn--outline').forEach((b) => {
        b.addEventListener('pointermove', (e) => {
          const r = b.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) / r.width;
          const y = (e.clientY - r.top - r.height / 2) / r.height;
          b.style.translate = `${(x * 8).toFixed(1)}px ${(y * 6).toFixed(1)}px`;
        });
        b.addEventListener('pointerleave', () => { b.style.translate = ''; });
      });
    }
  }

})();