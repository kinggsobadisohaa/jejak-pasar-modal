const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export function renderInlineMarkdown(text: string, accentClass: string): string {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, `<em class="${accentClass}">$1</em>`);
}

/**
 * Renders a content block without collapsing line breaks into one paragraph.
 * Bullet runs become a real <ul>; numbered items keep their explicit number so
 * numbering never resets when a list is interrupted by a heading.
 */
export function renderContentBlock(block: string, accentClass: string): string {
  const lines = block.split('\n');
  let html = '';
  let inList = false;

  const closeList = () => {
    if (inList) {
      html += '</ul>';
      inList = false;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    const bullet = line.match(/^[-*+]\s+(.*)$/);
    if (bullet) {
      if (!inList) {
        html += '<ul class="list-disc pl-5 space-y-1">';
        inList = true;
      }
      html += `<li>${renderInlineMarkdown(bullet[1], accentClass)}</li>`;
      continue;
    }

    closeList();

    const ordered = line.match(/^(\d+)\.\s+(.*)$/);
    if (ordered) {
      html += `<p class="pl-5">${ordered[1]}. ${renderInlineMarkdown(ordered[2], accentClass)}</p>`;
      continue;
    }

    const isContinuation = /^\s{2,}/.test(raw);
    html += `<p${isContinuation ? ' class="pl-6"' : ''}>${renderInlineMarkdown(line, accentClass)}</p>`;
  }

  closeList();
  return html;
}
