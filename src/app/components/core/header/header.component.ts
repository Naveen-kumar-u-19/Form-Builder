import { Component } from '@angular/core';
import { FlexLayoutDirective } from '../../../directives/attribute-directives/flex-layout.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FlexLayoutDirective, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'My Orders';
  buttonInfo = [{ name: 'My Orders', method: 'myorder', class: 'primary-button' }, { name: 'My Orders', method: 'myorder', class: 'secondary-button' }];
  buttonName = '';
}

