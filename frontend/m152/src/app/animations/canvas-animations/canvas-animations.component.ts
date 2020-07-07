import { Component, OnInit } from '@angular/core';
import 'prismjs/components/prism-typescript.min';

@Component({
  selector: 'app-canvas-animations',
  templateUrl: './canvas-animations.component.html',
  styleUrls: ['./canvas-animations.component.scss']
})
export class CanvasAnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#28d1fa';

    ctx.lineWidth = 8.5;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#28d1fa';

    function degToRad(degree) {
      const factor = Math.PI / 180;
      return degree * factor;
    }

    function renderTime() {

      const now = new Date();
      const today = now.toDateString();
      const time = now.toLocaleTimeString();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const milliseconds = now.getMilliseconds();
      const newSeconds = seconds + (milliseconds / 1000);

      // Background
      const gradient = ctx.createRadialGradient(200, 200, 5, 200, 200, 300);
      gradient.addColorStop(0, '#09303a');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 200, 200);

      // Hours
      ctx.beginPath();
      ctx.arc(100, 100, 85, degToRad(270), degToRad((hours * 30) - 90));
      ctx.stroke();

      // Minutes
      ctx.beginPath();
      ctx.arc(100, 100, 70, degToRad(270), degToRad((minutes * 6) - 90));
      ctx.stroke();

      // Seconds
      ctx.beginPath();
      ctx.arc(100, 100, 55, degToRad(270), degToRad((newSeconds * 6) - 90));
      ctx.stroke();

      // Date
      ctx.font = '10px Helvetica';
      ctx.fillStyle = '#28d1fa';
      ctx.fillText(today, 70, 100);

      // Time
      ctx.font = '15px Helvetica';
      ctx.fillStyle = '#28d1fa';
      ctx.fillText(time, 70, 125);

    }
    setInterval(renderTime, 40);

  }

}
