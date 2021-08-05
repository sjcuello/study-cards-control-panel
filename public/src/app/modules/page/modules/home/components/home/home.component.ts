import { Component, OnInit } from '@angular/core';
import { DisiplinasService } from 'src/app/modules/page/services/disiplinas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private disciplinasService: DisiplinasService) { }

  ngOnInit(): void {
    this.disciplinasService.getAll().subscribe(data => {
      console.log('data :>> ', data);
    });
  }

}
