import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: '1',
            name: '1',
            qty: 1,
        },
        {
            id: '2',
            name: '2',
            qty: 2,
        },
        {
            id: '3',
            name: '3',
            qty: 3,
        }
    ]

    findAll(): Item[] {
        return this.items
    }
}
