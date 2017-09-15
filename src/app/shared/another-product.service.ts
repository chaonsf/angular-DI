import { Injectable } from '@angular/core';
import {ProductService,Product} from "./product.service";

@Injectable()
export class AnotherProductService implements ProductService {//这个表明和之前的服务有相同的方法
   getProduct():Product{
     return new Product(1,"iphoneX",8388,"史上最贵苹果手机")
   }
  constructor() { }

}
