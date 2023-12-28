export const saveFile = (name: string, data: Blob) => {
  const url = URL.createObjectURL(data);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  return true;
};

export const saveJsonFile = (name: string, data: string) => {
  const blob = new Blob([data], {
    type: 'application/json',
  });

  return saveFile(`${name}.json`, blob);
};

export const saveHtmlFile = (name: string, data: string) => {
  const blob = new Blob([data], {
    type: 'text/html',
  });

  return saveFile(`${name}.html`, blob);
};

export const saveTxtFile = (name: string, data: string) => {
  const blob = new Blob([data], {
    type: 'text/plain',
  });
  return saveFile(`${name}.txt`, blob);
};

export const saveMarkDownFile = (name: string, data: string) => {
  const blob = new Blob([data], {
    type: 'text/markdown',
  });

  return saveFile(`${name}.md`, blob);
};
