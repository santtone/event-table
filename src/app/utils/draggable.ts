import {Directive, HostListener, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[draggable]'
})

export class Draggable implements OnInit {

  changeX: number = 0;
  changeY: number = 0;
  element;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    let x = event.touches ? event.touches[0].clientX : event.x;
    let y = event.touches ? event.touches[0].clientY : event.y;
    this.changeX = x - this.element.nativeElement.offsetLeft;
    this.changeY = y - this.element.nativeElement.offsetTop;
  }

  @HostListener('touchmove', ['$event'])
  @HostListener('drag', ['$event'])
  onDrag(event) {
    if (event.touches) {
      this.changePosition(event.touches[0].clientX, event.touches[0].clientY);
    } else {
      this.changePosition(event.x, event.y);
    }
  }

  @HostListener('touchend', ['$event'])
  @HostListener('dragend', ['$event'])
  onDragEnd() {
    this.changeX = 0;
    this.changeY = 0;
  }

  private changePosition(x: number, y: number): void {
    if (!x || !y) return;
    this.element.nativeElement.style.top = (y - this.changeY) + 'px';
    this.element.nativeElement.style.left = (x - this.changeX) + 'px';
  }

  public ngOnInit(): void {
    this.element.nativeElement.style.position = 'fixed';
    this.element.nativeElement.draggable = true;
  }

  public ngOnDestroy(): void {
    this.element.nativeElement.draggable = false;
  }

}
