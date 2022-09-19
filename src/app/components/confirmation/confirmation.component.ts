import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  clientfullname:string|null = "";
  total:string|null = "";
  constructor(private router:Router, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.clientfullname = this.activatedroute.snapshot.queryParamMap.get('userfullname');
    this.total = this.activatedroute.snapshot.queryParamMap.get('ordertotal');
  }

}
