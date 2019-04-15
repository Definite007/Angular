import { Component, OnInit, AfterContentInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    $(() => {
      'use strict';

      $('#navbtn2').on('click', () => {
        $('#navbar2').toggleClass('open');
        $('#navbtn2').toggleClass('open');
      });
    });
  }

}
