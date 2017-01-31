import {Component, OnInit, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'ew-event-wheel-sector',
  templateUrl: './event-wheel-sector.component.html'
})

export class EventWheelSector implements OnInit {

  @Input() radius: number;
  @Input() startAngle: number;
  @Input() endAngle: number;
  @Input() index: number;

  pathD = '';
  element = null;
  sectorSize = 0;
  initialize;

  constructor(el: ElementRef) {
    this.element = el;

    this.initialize = function (radius, start, end) {
      function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
          x: centerX + (radius * Math.cos(angleInRadians)),
          y: centerY + (radius * Math.sin(angleInRadians))
        };
      }

      function describeArc(x, y, radius, startAngle, endAngle) {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return [
          "M", start.x, start.y,
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
      }

      this.sectorSize = 2 * (radius + 100);
      this.pathD = describeArc((radius + 100), (radius + 100), radius, start, end);
      console.log((radius + 100) + ',' + (radius + 100) + ',' + radius + ',' + start + ',' + end)
    }
  }

  ngOnInit(): void {
    this.initialize(this.radius, this.startAngle, this.endAngle);
  }

  selected(index) {
    console.log('sector ' + index + ' selected');
  }

}
