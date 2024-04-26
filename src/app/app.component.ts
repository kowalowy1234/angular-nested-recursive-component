import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RecursiveComponent } from './components/recursive-component/recursive.component';
import { Branch, Tree } from './types/tree.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RecursiveComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-nested-recursive-component';
  branch: Branch | null = null;
  itemName = '';

  createItem() {
    this.branch = { name: this.itemName, children: [] };
  }

  removeItem() {
    this.branch = null;
    this.itemName = '';
  }

  inputName(event: any) {
    this.itemName = event.target.value;
  }

  logBranch() {
    if (this.branch) {
      console.log(this.branch);
    }
  }

  jsonifyBranch(branch: Branch) {
    return JSON.stringify(branch);
  }
}
