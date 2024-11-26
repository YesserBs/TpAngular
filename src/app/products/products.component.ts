import { Component } from '@angular/core';
import { Produit } from '../models/produit';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  produits: Produit[] = [];
  filtredProduits: Produit[] = this.produits;
  maxId: number = this.produits.length > 0 ? Math.max(...this.produits.map(item => parseInt(item.id!))) : 0;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((produits: Produit[]) => {
      this.produits = produits;
      this.filtredProduits = produits;
      this.maxId = this.produits.length > 0 ? Math.max(...this.produits.map(item => parseInt(item.id!))) : 0;
      console.log(this.produits);
    });
  }
  
  
  recherche: string = '';
  showImg: boolean = true;

  toggleImg() {
    this.showImg = !this.showImg;
  }


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

  goToCreate() {
    this.router.navigate([`/create/${this.maxId + 1}`]);
  }
  

  goToDetails(id: string | null){
    this.router.navigate(['/edit', id]);
  }

  deleteElement(id: string | null) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.produits = this.produits.filter(produit => produit.id !== id);
      this.filtredProduits = this.filtredProduits.filter(produit => produit.id !== id);
      console.log('Produit supprimé avec succès');
    });
  }
  


  showConfirmation(id: string | null) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      console.log("L'ID est " + id)
      if (result.isConfirmed) {
        this.deleteElement(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

}
