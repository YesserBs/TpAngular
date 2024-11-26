import { Component } from '@angular/core';
import { Produit } from '../models/produit';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  productId: string | null = null;
  product: Produit = {
    id: null,
    nom: '',
    prix: 0,
    image: '',
    quantite: 0
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('newId');
    if (this.productId) {
      this.product.id = this.productId;
    }
  }

  createProduct() {
      this.productService.addProduct(this.product).subscribe(() => {
        console.log('Produit créé : ' + this.product.nom);
      });
  }
}
