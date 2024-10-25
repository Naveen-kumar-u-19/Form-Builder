import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { FlexLayoutDirective } from '../../../directives/attribute-directives/flex-layout.directive';
import { EditorConstant } from '../../../constants/editor.constant';

@Component({
  selector: 'app-form-editor',
  standalone: true,
  imports: [FlexLayoutDirective],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss'
})
export class FormEditorComponent implements AfterViewInit {

  editorConstant!: EditorConstant;

  showEditor = true;


  constructor(private renderer: Renderer2) {
    this.editorConstant = new EditorConstant();
  }

  ngAfterViewInit() {
    const element = this.renderer.selectRootElement('.home-nav-bar', true);
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    const remainingHeight = windowHeight - elementHeight;
    const div = document.querySelector('.form-editor');
    if (div) {
      this.renderer.setStyle(div, 'height', remainingHeight + 'px');
    }
  }

}
