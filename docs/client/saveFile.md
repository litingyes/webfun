# Save File

Quickly save data content locally in the form of files on the browser side.

## saveFile

```ts
import { saveFile } from 'webfun';

const data = new Blob([JSON.stringify({ name: 'config' })]);
saveFile('config.ts', data);
// download: config.ts
```

## saveJsonFile

```ts
import { saveJsonFile } from 'webfun';

saveJsonFile('config', JSON.stringify({ name: 'config' }));
// download: config.json
```

## saveHtmlFile

```ts
import { saveHtmlFile } from 'webfun';

saveHtmlFile('page', '<div>页面</div>');
// download: page.html
```

## saveTxtFile

```ts
import { saveTxtFile } from 'webfun';

saveTxtFile('content', 'content');
// download: content.txt
```

## saveMarkDownFile

```ts
import { saveMarkDownFile } from 'webfun';

saveMarkDownFile('note', '# note');
// download: note.md
```

## Type Declaration

```ts
export declare const saveFile: (name: string, data: Blob) => boolean;
export declare const saveJsonFile: (name: string, data: string) => boolean;
export declare const saveHtmlFile: (name: string, data: string) => boolean;
export declare const saveTxtFile: (name: string, data: string) => boolean;
export declare const saveMarkDownFile: (name: string, data: string) => boolean;
```
