import { Controller, Get, Post, Put, Delete,  Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create_item.dto'
import { Request, Response } from 'express'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(@Req() req: Request): Item[] {
        return this.itemsService.findAll()
    }

    @Get(':id') 
    findOne(@Param() param): string {
        return `item: ${param.id}`
    }

    @Post('create')
    create(@Body() createItemDto: CreateItemDto): string {
        return `Created! ${createItemDto.name} ${createItemDto.qty}`
    }

    @Delete(':id')
    delete(@Param() param): string {
        return `deleted!: ${param.id}`
    }

    @Put(':id') 
    update(@Param() param, @Body() updated: CreateItemDto): string {
        return `updated! ${param.id} ${updated.name}`
    }
}
