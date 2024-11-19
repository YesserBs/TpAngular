import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
      this.productsService.getAll().subscribe(
        (data: Produit[]) => {
          this.produits = data
          this.filtredProduits = this.produits
        }
      )
  }

  recherche: string = '';
  showImg: boolean = true;
  produits: Produit[] = [];
  filtredProduits: Produit[] = this.produits;

  toggleImg() {
    this.showImg = !this.showImg;
  }

  searchProduct() {
    this.filtredProduits = this.produits.filter(p => p.nom.toLowerCase().includes(this.recherche.toLowerCase()))
  }

  goAddProduct() {
    this.router.navigate(['/create']);
  }

  goToEdit(id:number | null) {
    this.router.navigate(['/edit', id]);
  }

  deleteById(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productsService.deleteById(id).subscribe();
        this.filtredProduits = this.filtredProduits.filter(p => p.id != id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
}
