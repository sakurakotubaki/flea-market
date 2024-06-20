import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.model';
import { ItemStatus } from './item-status.enum';
import { CreateItemDto } from './dto/create-item.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    const found = this.items.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(`Item with id ${id} not found`);
    }
    return found;
  }

  create(createItemDto: CreateItemDto): Item {
    const item: Item = {
      id: uuid(),
      ...createItemDto,
      status: ItemStatus.ON_SALE,
    };
    this.items.push(item);
    return item;
  }

  updateStatus(id: string): Item {
    const item = this.findById(id);
    if (!item) {
      throw new NotFoundException(`Item with id ${id} not found`);
    }
    item.status = ItemStatus.SOLD_OUT;
    return item;
  }

  // 特定の値を残すために、filter メソッドを使って、items 配列を更新する
  delete(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
