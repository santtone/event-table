import {Component, AfterViewInit, OnInit} from '@angular/core';

@Component({
  selector: 'ew-event-wheel-sector',
  templateUrl: './event-wheel-sector.component.html'
})

export class EventWheelSector implements OnInit {

  pathD = '';

  ngOnInit(): void {

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

    this.pathD = describeArc(330, 385, 230, 0, 300);
  }

}
