import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	newUser: any;
	user: any;

  constructor(private us: UserService, private router: Router) { }

  ngOnInit() {
	this.us.getBlankUser().subscribe(data => {
		this.newUser = data;
	});

    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      }
    }
			$("main").addClass("pre-enter").removeClass("with-hover");
		setTimeout(function(){
			$("main").addClass("on-enter");
		}, 500);
		setTimeout(function(){
			$("main").removeClass("pre-enter on-enter");
			setTimeout(function(){
				$("main").addClass("with-hover");
			}, 50);
		}, 3000);

		$("h1 a").click(function(){
			$(this).siblings().removeClass("active");
			$(this).addClass("active");
			if ($(this).is("#link-signup")) {
				$("#form-login").removeClass("active");
				$("#intro-login").removeClass("active");
				setTimeout(function(){
					$("#form-signup").addClass("active");
					$("#intro-signup").addClass("active");
				}, 50);
			} else {
				$("#form-signup").removeClass("active");
				$("#intro-signup").removeClass("active");
				setTimeout(function(){
					$("#form-login").addClass("active");
					$("#intro-login").addClass("active");
				}, 50);
			}
		});
	}
	
	submit(){
		this.us.createUser(this.newUser).subscribe(data => {
			console.log(data);
		})
	}
}
