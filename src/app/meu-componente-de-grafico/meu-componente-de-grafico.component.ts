import { Component, OnInit, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-meu-componente-de-grafico',
  templateUrl: './meu-componente-de-grafico.component.html',
  styleUrls: ['./meu-componente-de-grafico.component.scss']
})
export class MeuComponenteDeGraficoComponent implements OnInit {

  @Input() dados = Array<number[]>();
  @Input() descricoes = Array<string[]>();
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() sufixoDados: string;

  grafico = [];

  constructor(private element: ElementRef, private changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit(){
    this.create(this.sufixoDados);
  }
  
  create(sufixo: string): void {
    const css = '.grafico';
    const ctx = this.element.nativeElement.querySelector(css);
    
    this.grafico = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.descricoes,
        datasets: [
          {
            display: true,
            label: this.subtitulo,
            data: this.dados,
            backgroundColor: '#1371d2',
            borderColor: '#1E90FF',
            borderWidth: 2,
            hoverBackgroundColor:'#58FA58',
            hoverBorderColor: '#04B45F',
            hoverBorderWidth: 3,
            barPercentage: 1.1,
            maxBarThickness: 21
          }
        ],
      },  
        options: {          
          title: {
            display: true,
            text: [this.titulo],
            fontSize: 15
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              fontColor: '#000',
              fontSize: 14
            }
          },
          tooltips: {
            titleAlign: 'center',
            bodyFontSize: 14,
            footerFontSize: 18            
          },
          scales: {
            xAxes: [{
                display: true,                  
                ticks: {
                  fontColor: '#000',
                  fontSize: 13,
                  fontStyle	: 'bold', 
                },
                gridLines : {
                  display: true,
                  color: '#BDBDBD',
                }
              }],
            yAxes: [{
              display: true,               
              ticks: {
                maxTicksLimit: 6,
                beginAtZero: false,
                fontColor: '#000',
                fontSize: 13,
                fontStyle	: 'bold',
                callback: function(label, index, labels) {            
                    return ' '  + label + ' ' + sufixo;
                  },
                },
                gridLines : {
                  display: true,
                  color: '#BDBDBD',
                },
            }],
          },          
        }
      });
      
      this.changeDetectorRef.detectChanges();
  }  

}