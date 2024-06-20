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

`AppModule`に設定を追加
```ts
import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ItemsModule,
    // application 全体に適用
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

Entityを作成
```ts
import { ItemStatus } from 'src/items/item-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  status: ItemStatus;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
```