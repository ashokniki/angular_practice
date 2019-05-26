import { Component, OnInit } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  twoWayDataBindingVariable:any;
  getValue1:any;
  getValue2:any;
  movieName:any;
  changeClass:string = "bigsize"
  IsClick:boolean = false;
  showingContent:any;
  fullName:string = 'LOrm ipsume is the content LOrm ipsume is the contentLOrm ipsume is the content ';
  imagePath:string = "https://image.vuukle.com/image-indiatoday.in-story_1533402"
  className:string = "active";
  test:any;
  constructor() { }

  ngOnInit() {
    this.getValue1 = ""; this.getValue2 = "";
    console.log("boolean", this.IsClick)
  }
  resetwayData(){
      this.twoWayDataBindingVariable = "";
  }

  getData(){
    console.log("myData");
    this.movieName = this.getValue1 + ' ' + this.getValue2;
  }

  inpuBox(e){
    console.log("checking event", e)
    this.getValue1 = e.path[0].value;
  }

  inpuBox1(e){
    console.log("checking event", e)
    this.getValue2 = e.path[0].value;
  }

  clearGetData(){
    console.log('cleardata');
    this.getValue1 = "";this.getValue2 = "";
    this.movieName = "";

  }

  fontColor(){
    this.IsClick= true;
    // this.test = 1;
  }

  removeColor(){
    this.IsClick= false;
    // this.test = 1;
  }

  // ContentChange(){
  //     this.movieName = "Triger this function from child components"
  //     console.log("data", data);
      
  //   }


    ContentChange(data){
      // this.movieName = "Triger this function from child components"
      console.log("data", data);
      this.showingContent = this.ContentChange(data);
    }





}
