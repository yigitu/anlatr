export function formatBody(text) {
  return text.split('\n\n').map((para, i) => {
    if (para.startsWith('- ')) {
      const items = para.split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2));
      return (
        <ul key={i} style={{ paddingLeft: '1.3rem', margin: '0 0 1.25rem' }}>
          {items.map((it, j) => (
            <li key={j} style={{ marginBottom: '0.35rem' }}
              dangerouslySetInnerHTML={{ __html: it.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
            />
          ))}
        </ul>
      );
    }
    const html = para
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.*?)`/g, '<code>$1</code>');
    return <p key={i} style={{ marginBottom: '1.25rem' }} dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export function hl(text, q) {
  if (!q?.trim()) return text;
  const esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${esc})`, 'gi'));
  return parts.map((p, i) =>
    p.toLowerCase() === q.toLowerCase()
      ? <mark key={i} style={{ background: '#ccfbf1', color: 'var(--teal)', padding: '0 1px', borderRadius: '2px' }}>{p}</mark>
      : p
  );
}
