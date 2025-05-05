// src/components/data/uiLibraryMeta.js

const componentModules = import.meta.glob('../ui/**/*.jsx', { eager: true });
const codeModules = import.meta.glob('../ui/**/*.jsx', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const grouped = {};

for (const path in componentModules) {
  const segments = path.split('/');
  const group = segments[segments.length - 2];
  const name = segments[segments.length - 1].replace('.jsx', '');

  const rawKey = Object.keys(codeModules).find((key) => key === path);
  const code = rawKey ? codeModules[rawKey] : "// Code not found";

  if (!grouped[group]) grouped[group] = [];

  grouped[group].push({
    title: name,
    component: componentModules[path].default,
    code,
  });
}

export const groupedUIComponents = grouped;
export const groupNames = Object.keys(grouped);
