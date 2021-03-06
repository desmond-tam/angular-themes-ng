import { Component, OnInit,  ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { IActivities } from '../models/activities';
import { ActivitiesService } from  '../services/activities-service';
import { VisitSaleComponent } from './visit-sale/visit-sale.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('container',{ read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
  weekly:IActivities = {
    sales:0,
    orders:0,
    visitors:0
  };
  toggleProBanner(event) {
    console.log("123");
    event.preventDefault();
    document.querySelector('body').classList.toggle('removeProbanner');
  }

  constructor(private service:ActivitiesService,
    private componentFactoryResolver: ComponentFactoryResolver) {

   }

   ngAfterViewInit(){
    const factory = this.componentFactoryResolver.resolveComponentFactory(VisitSaleComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  ngOnInit() {

    this.service.getActivities()
      .subscribe(r => {
         this.weekly = r;
      })
  }

  date = {
    year:2019,
    month:11,
    day:10
  };


  trafficChartData = [
    {
      data: [30, 30, 40],
    }
  ];

  trafficChartLabels = ["Search Engines", "Direct Click", "Bookmarks Click"];

  trafficChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: false,
  };

  trafficChartColors = [
    {
      backgroundColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(132, 217, 210, 1)'
      ],
      borderColor: [
        'rgba(177, 148, 250, .2)',
        'rgba(254, 112, 150, .2)',
        'rgba(132, 217, 210, .2)'
      ]
    }
  ];

}
