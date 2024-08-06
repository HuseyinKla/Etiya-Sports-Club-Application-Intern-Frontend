import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bundle',
  templateUrl: './my-bundle.component.html',
  styleUrls: ['./my-bundle.component.css']
})
export class MyBundleComponent implements OnInit {

  constructor() { }


  @Input() myBundles: any;


  ngOnInit(): void {
  }

}
