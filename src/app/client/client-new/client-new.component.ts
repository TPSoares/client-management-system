import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.scss'],
})
export class ClientNewComponent implements OnInit {

  public isEditing: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isEditing = this.activatedRoute.snapshot.params['id'];
    console.log(this.isEditing)
  }

}
