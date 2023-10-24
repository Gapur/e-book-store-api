import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    const book = new Book();
    book.name = createBookDto.name;
    book.author = createBookDto.author;
    book.price = createBookDto.price;
    book.description = createBookDto.description;
    return this.bookRepository.save(book);
  }

  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return this.bookRepository.findOneBy({ id });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const bookById = await this.bookRepository.findOneBy({ id });
    bookById.name = updateBookDto.name;
    bookById.author = updateBookDto.author;
    bookById.price = updateBookDto.price;
    bookById.description = updateBookDto.description;
    return this.bookRepository.save(bookById);
  }

  remove(id: number) {
    return this.bookRepository.delete(id);
  }
}
