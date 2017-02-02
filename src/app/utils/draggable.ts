import {Directive, HostListener, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[draggable]'
})

export class Draggable implements OnInit {
  changeX: number = 0;
  changeY: number = 0;
  element;

  @HostListener('dragstart', ['$event'])
  onDragStart(event: MouseEvent) {
    this.changeX = event.x - this.element.nativeElement.offsetLeft;
    this.changeY = event.y - this.element.nativeElement.offsetTop;
  }

  @HostListener('drag', ['$event'])
  onDrag(event: MouseEvent) {
    this.changePosition(event.x, event.y);
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event: MouseEvent) {
    this.changeX = 0;
    this.changeY = 0;
  }

  constructor(element: ElementRef) {
    this.element = element;
  }

  changePosition(x: number, y: number) {
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
