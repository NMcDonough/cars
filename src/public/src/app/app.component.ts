import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit(){
    $(document).ready(function(){
      $("#id01").hide();
      $('#login').click(function(){
        $('#id01').toggle();
        console.log("cool");
      })
    })
  }
}
