import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.css']
})
export class SubComponentComponent implements OnInit {
  @Input() inputExamble:any;

  @Output() outputExamble1 = new EventEmitter<string>();

  @Output() outputExamble = new EventEmitter();

  outPostData:object = {
      Title : "Ashok Muthu",
      Description : "Lorem ipsume "
  };
  
  assignMyContent:string = "Content will be change based on parent components";
  constructor() { }

  ngOnInit() {
  }

  updateContent(){
    console.log("final" , this.inputExamble, this.assignMyContent,"ashk", this.assignMyContent == this.inputExamble);
    let yourValue = this.inputExamble
    this.assignMyContent = yourValue;
  }

  putContent(){
      // this.outputExamble.emit(this.outPostData);

      this.outputExamble.emit(this.outPostData);
  }

  putContent1(){
    // this.outputExamble.emit(this.outPostData);

    this.outputExamble.emit(true);
}

}
