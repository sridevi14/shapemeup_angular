import { Component, OnInit } from '@angular/core';

import { ClientProfileService } from 'src/app/client-profile/client-profile.service'

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_shared/service/authentication.service';

import { DietplanService } from 'src/app/home/dietplan/dietplan.service';
import { Food } from 'src/app/_shared/modals/dietplan.interface';

@Component({
  selector: 'app-diet-create',
  templateUrl: './diet-create.component.html',
  styleUrls: ['./diet-create.component.css']
})
export class DietCreateComponent implements OnInit {

  

  constructor(private fb: FormBuilder,
    public authenticationService: AuthenticationService,
    public profileService: ClientProfileService,
    private dietplanService: DietplanService,
    private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {

  
  }}