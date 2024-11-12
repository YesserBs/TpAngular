import { Component } from '@angular/core';
import { Produit } from '../models/produit';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  productId: string | null = '';
  product: Produit = {
    id: 0,
    nom: '',
    prix: 0,
    image: '',
    quantite: 0
  };

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  createProduct() {
    if (this.product) {
      this.productService.addProduct(this.product).subscribe(() => {
        console.log('Produit crée' + this.product.nom);
      });
    }
  }
}
