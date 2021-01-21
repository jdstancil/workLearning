import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // serverElements = [];
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef ;
  // @ViewChild(CockpitComponent) serverContentInput;

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement) {
    // console.log(nameInput.value);
    // console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }
  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent});
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     blueprintName: this.newServerName,
  //     blueprintContent: this.newServerContent});
  // }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // don't do it this way.  Use string interpolation or property binding
    // this.serverContentInput.nativeElement.value = 'junk';
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value});
  }
}
