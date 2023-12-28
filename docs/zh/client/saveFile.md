# Save File

在浏览器端以文件形式快速保存数据内容到本地

## saveFile

```ts
import { saveFile } from 'webfun';

const data = new Blob([JSON.stringify({ name: 'config' })]);
saveFile('配置文件.ts', data);
// download: 配置文件.ts
```

## saveJsonFile

```ts
import { saveJsonFile } from 'webfun';

saveJsonFile('配置文件', JSON.stringify({ name: 'config' }));
// download: 配置文件.json
```

## saveHtmlFile

```ts
import { saveHtmlFile } from 'webfun';

saveHtmlFile('页面', '<div>页面</div>');
// download: 页面.html
```

## saveTxtFile

```ts
import { saveTxtFile } from 'webfun';

saveTxtFile('内容', '内容');
// download: 内容.txt
```

## saveMarkDownFile

```ts
import { saveMarkDownFile } from 'webfun';

saveMarkDownFile('笔记', '# 笔记');
// download: 笔记.md
```

## 类型声明

```ts
export declare const saveFile: (name: string, data: Blob) => boolean;
export declare const saveJsonFile: (name: string, data: string) => boolean;
export declare const saveHtmlFile: (name: string, data: string) => boolean;
export declare const saveTxtFile: (name: string, data: string) => boolean;
export declare const saveMarkDownFile: (name: string, data: string) => boolean;
```
