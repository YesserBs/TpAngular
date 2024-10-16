import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId: string | null = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log(this.productId);
  }

}
