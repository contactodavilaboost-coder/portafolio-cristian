const fs = require('fs');
const html = fs.readFileSync('dist/stats.html', 'utf8');
const match = html.match(/const data = (\{[\s\S]+?\});\s*const/);
const data = JSON.parse(match[1]);
const metas = data.nodeMetas;
const parts = data.nodeParts;
const pkgs = {};
for (const uid of Object.keys(parts)) {
  const part = parts[uid];
  const meta = metas[part.metaUid];
  if (!meta) continue;
  const id = meta.id || '';
  let key = '__app__';
  if (id.includes('node_modules')) {
    const clean = id.split('\\').join('/');
    const after = clean.split('node_modules/').pop() || '';
    key = after.startsWith('@') ? after.split('/').slice(0,2).join('/') : after.split('/')[0];
  }
  pkgs[key] = (pkgs[key] || 0) + part.renderedLength;
}
Object.entries(pkgs).sort((a,b) => b[1]-a[1]).slice(0,12).forEach(([k,v]) => {
  console.log((v/1024).toFixed(1).padStart(8)+' KB  '+k);
});
