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

    ctx.lineWidth = 17;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 15;
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
      ctx.fillRect(0, 0, 400, 400);

      // Hours
      ctx.beginPath();
      ctx.arc(200, 200, 170, degToRad(270), degToRad((hours * 30) - 90));
      ctx.stroke();

      // Minutes
      ctx.beginPath();
      ctx.arc(200, 200, 140, degToRad(270), degToRad((minutes * 6) - 90));
      ctx.stroke();
      // Seconds
      ctx.beginPath();
      ctx.arc(200, 200, 110, degToRad(270), degToRad((newSeconds * 6) - 90));
      ctx.stroke();
      // Date
      ctx.font = '20px Helvetica';
      ctx.fillStyle = '#28d1fa';
      ctx.fillText(today, 140, 200);

      // Time
      ctx.font = '15px Helvetica';
      ctx.fillStyle = '#28d1fa';
      ctx.fillText(time, 140, 230);

    }
    setInterval(renderTime, 40);

  }

}
