/** Blog index topic filters + sort select. */
export function initBlogIndexFilters(emptyMessage: string) {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const toolbar = document.getElementById('blog-filter-toolbar');
  const sortSelect = document.getElementById('blog-sort') as HTMLSelectElement | null;

  if (!grid || !toolbar) return;

  const cards = () => [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

  const activeTag = () =>
    toolbar.querySelector<HTMLButtonElement>('[data-blog-filter][aria-pressed="true"]')?.getAttribute(
      'data-blog-filter',
    ) ?? 'all';

  const getSort = () => sortSelect?.value || 'newest';

  const compareCards = (a: HTMLElement, b: HTMLElement, sort: string) => {
    const tsA = Number(a.getAttribute('data-ts') ?? 0);
    const tsB = Number(b.getAttribute('data-ts') ?? 0);
    const readA = Number(a.getAttribute('data-read-minutes') ?? 0);
    const readB = Number(b.getAttribute('data-read-minutes') ?? 0);
    if (sort === 'oldest') return tsA - tsB;
    if (sort === 'short') return readA - readB;
    if (sort === 'long') return readB - readA;
    return tsB - tsA;
  };

  const apply = () => {
    const tag = activeTag();
    const sort = getSort();
    const items = cards();

    const sorted = [...items].sort((a, b) => compareCards(a, b, sort));
    sorted.forEach((el) => grid.appendChild(el));

    let visibleCount = 0;
    for (const el of items) {
      const match = tag === 'all' || el.getAttribute('data-tag') === tag;
      el.hidden = !match;
      if (match) visibleCount += 1;
    }

    if (emptyEl) {
      emptyEl.hidden = visibleCount > 0;
      emptyEl.textContent = emptyMessage;
    }
  };

  if (toolbar.dataset.blogFiltersBound !== '1') {
    toolbar.dataset.blogFiltersBound = '1';

    toolbar.addEventListener('click', (event) => {
      const btn = (event.target as Element | null)?.closest<HTMLButtonElement>('[data-blog-filter]');
      if (!btn || !toolbar.contains(btn)) return;

      toolbar.querySelectorAll<HTMLButtonElement>('[data-blog-filter]').forEach((b) => {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      apply();
    });

    sortSelect?.addEventListener('change', apply);
  }

  apply();
}

export function setupBlogIndexPage(emptyMessage: string) {
  const run = () => initBlogIndexFilters(emptyMessage);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  document.addEventListener('astro:after-swap', run);
}
