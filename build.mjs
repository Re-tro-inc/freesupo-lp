import { cp, mkdir, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const client = join(root, 'dist/client');
await mkdir(join(client, 'images'), { recursive: true });
await mkdir(join(root, 'dist/server'), { recursive: true });
await mkdir(join(root, 'dist/.openai'), { recursive: true });
for (const name of ['index.html', 'styles.css', 'script.js', 'privacy.html', 'law.html', 'robots.txt', 'sitemap.xml']) {
  await cp(join(root, name), join(client, name));
}
for (const entry of await readdir(join(root, 'images'), { withFileTypes: true })) {
  if (entry.isFile() && /\.(png|jpe?g|webp)$/.test(entry.name)) {
    await cp(join(root, 'images', entry.name), join(client, 'images', entry.name));
  }
}
await cp(join(root, 'worker.mjs'), join(root, 'dist/server/index.js'));
await cp(join(root, '.openai/hosting.json'), join(root, 'dist/.openai/hosting.json'));
console.log('Built static LP and Sites Worker in dist/.');
