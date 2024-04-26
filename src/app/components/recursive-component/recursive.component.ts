import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Branch, Tree } from '../../types/tree.type';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'recursive-component',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.scss'],
})
export class RecursiveComponent implements OnInit {
  @Input() displayOnly?: boolean;
  @Input() branch!: Branch;
  @Output() removeCb: EventEmitter<any> = new EventEmitter();

  displayChildInput = false;
  newChildName: string = '';

  constructor() {}

  ngOnInit(): void {}

  addChild() {
    if (!this.newChildName) {
      alert("Permission name can't be empty");
      return;
    }

    if (
      this.branch.children.find((child) => child.name === this.newChildName)
    ) {
      alert('Permission name must be unique');
      return;
    }

    if (this.branch.name === this.newChildName) {
      alert("Permission name must be different than that of it's parent");
      return;
    }
    
    this.branch.children.push({ name: this.newChildName, children: [] });
    this.displayChildInput = false;
  }

  inputName(event: any) {
    this.newChildName = event.target.value;
  }

  showChildInput() {
    this.displayChildInput = true;
  }

  hideChildInput() {
    this.displayChildInput = false;
  }

  removeSelf() {
    this.removeCb.emit(this.branch.name);
  }

  removeChild(name: string) {
    this.branch.children = this.branch.children.filter(
      (child) => child.name !== name
    );
  }
}
