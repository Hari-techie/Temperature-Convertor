import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  temperatureConvertorForm: FormGroup;
  result: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.temperatureConvertorForm = this.fb.group({
      temperature: new FormControl("", [Validators.required, Validators.pattern(/^\d/)]),
      type: new FormControl("", Validators.required),
    });
  }

  convert() {
    const temperature = this.temperatureConvertorForm.get('temperature').value;
    const type = this.temperatureConvertorForm.get('type').value; 
    if(type === 'C') {
      this.result = ( temperature * (9/5) ) + 32 + '\'F';
    }
    else {
      this.result = ( temperature - 32 ) * (9/5) + '\'C';
    }
  }
}
