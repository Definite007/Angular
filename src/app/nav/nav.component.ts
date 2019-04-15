import { Component, OnInit, AfterContentInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    $(() => {
      'use strict';

      $('#navbtn1').on('click', () => {
        $('#navbar1').toggleClass('open');
      });
    });
  }

}
