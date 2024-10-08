import { Component } from '@angular/core';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  imgLink: string = "data:image/png;base64,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"
  recherche: string = '';
  showImg: boolean = true;
  produits: Produit[] = [
    {
      id: 1,
      nom: 'Smartphone',
      prix: 200,
      image: this.imgLink,
      quantite: 0
    },
    {
      id: 2,
      nom: 'Tablette',
      prix: 400,
      image: this.imgLink,
      quantite: 4
    },
    {
      id: 3,
      nom: 'Ordinateur',
      prix: 600,
      image: this.imgLink,
      quantite: 0
    }
  ];
  filtredProduits: Produit[] = this.produits;

  toggleImg() {
    this.showImg = !this.showImg;
  }

  // searchProduct() {
  //   this.filtredProduits = this.produits.filter(produit =>
  //     produit.nom.toLowerCase().includes(this.recherche.toLowerCase())
  //   );
  // }

  searchProduct() {
    this.filtredProduits = this.produits.filter(produit =>
      produit.nom.toLowerCase().includes(this.recherche.toLowerCase())
    );

    // //Ou bien
    // for (let i = 0; i < this.produits.length; i++) {
    //   if (this.produits[i].nom.toLowerCase().includes(this.recherche.toLowerCase())) {
    //     this.filtredProduits.push(this.produits[i]);
    //   }
    // }

  }
}
