import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexLayoutDirective } from '../../../directives/attribute-directives/flex-layout.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FlexLayoutDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
