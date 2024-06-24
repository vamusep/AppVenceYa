import { Component, OnInit } from '@angular/core';
import { ProductService } from '@services/product.service';
import { Product } from '@models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreUsuario: string;
  products: Product[] = [];

  constructor(private productService: ProductService) {
  this.nombreUsuario = localStorage.getItem('username') || 'Usuario';
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  addProduct() {
    const newProduct: Product = {
      id: 0,
      codigo_barras: '7804643820154',
      marca: 'Love Lemon',
      producto: 'Limonada menta jenjibre',
      categoria: 'Bebestibles'
    };
    this.productService.addProduct(newProduct).subscribe((product: Product) => {  //se usa junto a la interfaz de products en la carpeta models
      this.products.push(product);
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }
}

