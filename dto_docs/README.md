## DTO Validation
自動で裁判されるIDを追加する。

validation用のuuidをインストール
```bash
npm install --save uuid
```

dtoから、id を削除する。
```ts
export class CreateItemDto {
  name: string;
  price: number;
  description: string;
}
```

ビルトインパイプを使用するとバリデーションができる。

validationパッケージを追加:
```bash
npm install --save class-validator class-transformer
```