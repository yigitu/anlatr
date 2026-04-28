export const CATEGORIES = [
  { slug: 'ag',         label: 'Ağ',        color: 'var(--blue)'   },
  { slug: 'guvenlik',   label: 'Güvenlik',   color: 'var(--rose)'   },
  { slug: 'teknoloji',  label: 'Teknoloji',  color: 'var(--purple)' },
  { slug: 'yazilim',    label: 'Yazılım',    color: 'var(--teal)'   },
  { slug: 'yapay-zeka', label: 'Yapay Zeka', color: 'var(--amber)'  },
];

export function slugToLabel(slug) {
  return CATEGORIES.find(c => c.slug === slug)?.label ?? null;
}

export function labelToSlug(label) {
  return CATEGORIES.find(c => c.label === label)?.slug ?? null;
}
