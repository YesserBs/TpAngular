import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../models/produit';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId: string | null = '';
  product: Produit = {
    id: 0,
    nom: '',
    prix: 0,
    image: '',
    quantite: 0
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    const result = this.productService.getProductById(Number(this.productId));
    if (result){
      this.product = result;
    }
  }

  updateProduct() {
    this.productService.updateProduct(this.product);
  }
}