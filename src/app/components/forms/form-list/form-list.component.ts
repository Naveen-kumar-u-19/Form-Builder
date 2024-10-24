import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutDirective } from '../../../directives/attribute-directives/flex-layout.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [MatIconModule, FlexLayoutDirective],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.scss'
})
export class FormListComponent {

  constructor(private router: Router) { }

  @ViewChild('CreateForm') createForm!: TemplateRef<any>;

  dialog = inject(MatDialog)

  openCreateFormDialog() {
    this.dialog.open(this.createForm, {
      width: '750px',
      height: 'auto',
      disableClose: true
    })
  }

  navigateTo(formType: 'OWN' | 'TEMPLATE') {
    if (formType === 'OWN')
      this.router.navigate(['/forms']);
    this.dialog.closeAll();

  }
}
