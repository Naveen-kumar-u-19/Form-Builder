import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[fxLayout]',
  standalone: true
})
export class FlexLayoutDirective implements OnChanges {
  /**
   * Variable used to apply display
   */
  @Input() fxLayout!: string;
  /**
   * Variable used to apply align-item and justify-content
   */
  @Input() fxLayoutAlign!: string;


  @Input() fxFlex!: string;
  /**
   * It is used to inject other class 
   * @param element contains Element reference
   * @param render used to set style for our element with the help of Element reference
   */
  constructor(private element: ElementRef, private render: Renderer2) { }
  /**
   * Angular life cycle hools
   */
  ngOnChanges() {
    this.applyLayout();
    this.alignFlex();
  }
  /**
   * Function used to apply layout details
   */
  applyLayout() {
    this.render.setStyle(this.element.nativeElement, 'display', 'flex');
    this.render.setStyle(this.element.nativeElement, 'flex-direction', this.fxLayout);
    if (this.fxFlex)
      this.render.setStyle(this.element.nativeElement, 'width', (this.fxFlex + '%'))
  }
  /**
   * Function used to set flex align details
   */
  alignFlex() {
    if (this.fxLayoutAlign) {
      const [justifyContent, alignItem] = this.fxLayoutAlign.split(' ');
      this.render.setStyle(this.element.nativeElement, 'align-items', alignItem);
      this.render.setStyle(this.element.nativeElement, 'justify-content', justifyContent);
    }
  }

}
