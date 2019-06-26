import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dilogue-box',
  templateUrl: './dilogue-box.component.html',
  styleUrls: ['./dilogue-box.component.scss']
})
export class DilogueBoxComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  vote: any;
  adhar: string;
  pan: string;
  male:string;
  female:string;
  email: string;
  constructor(private _formBuilder: FormBuilder ) { }
  cities:any=[];
statesList=[
  {stateId:1,stateName:"Telangana",citiesList:[
    {cityId:1,cityName:"Hyderabad"},
    {cityId:2,cityName:"KarimNagar"},
    {cityId:3,cityName:"NarasaraoPet"},
    {cityId:4,cityName:"Waranghal"}]},
    {stateId:2,stateName:"Andhra Pradesh",citiesList:[
      {cityId:1,cityName:"Nellore"},
      {cityId:2,cityName:"Tirupati"},
      {cityId:3,cityName:"Guntur"},
      {cityId:4,cityName:"Vijayawada"}]},
]
  cityid: { cityId: number; cityName: string; }[];
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      First: [null,[Validators.required,Validators.pattern("/^[a-zA-Z]*$/")]],
      Second: [null,[Validators.required,Validators.pattern("/^[a-zA-Z]*$/")]],
      Gender: [null,Validators.required],
      Father:[null,[Validators.required,Validators.pattern("/^[a-zA-Z]*$/")]],
      Mother:[null,[Validators.required,Validators.pattern("/^[a-zA-Z]*$/")]],
      Email:[null,[Validators.required,Validators.email]],
      Quali:[null,Validators.required],
      Check:[null,Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      Idproof:[null,Validators.required],
      Address1: [null, Validators.required],
      Address2:[null,Validators.required],
      state:[null,Validators.required],
      city:[null,Validators.required],
      adharNo:[null,Validators.required],
      adharName:[null,Validators.required],
      panName:[null,[Validators.required,Validators.pattern("/^[a-zA-Z]*$/")]],
      panNo:[null,[Validators.required,Validators.minLength(5),Validators.pattern('^[0-9]+$')]],
      voterName:[null,[Validators.required,Validators.pattern("/^[a-zA-Z]*$/")]],
      voterNo:[null,[Validators.required,Validators.minLength(5),Validators.pattern('^[0-9]+$')]]
  })
  }
  onStateSelection(){
    let index=this.statesList.findIndex(x=> x.stateName==this.secondFormGroup.value.state);
    if(index!=-1){
      this.cities=this.statesList[index].citiesList;
    }
    }
    onIdProofSelection(val){
      this.adhar ="";
      if(val == 'Adhaar'){
        this.secondFormGroup.get('adharNo').setValidators([Validators.required ,Validators.minLength(5),Validators.pattern('^[0-9]+$')]);
        this.secondFormGroup.get('adharNo').updateValueAndValidity();
        this.secondFormGroup.get('adharName').setValidators([Validators.required,Validators.pattern("^[a-zA-Z]*$")]);
        this.secondFormGroup.get('adharName').updateValueAndValidity();
        this.secondFormGroup.get('panNo').clearValidators();
        this.secondFormGroup.get('panNo').updateValueAndValidity();
        this.secondFormGroup.get('panName').clearValidators();
        this.secondFormGroup.get('panName').updateValueAndValidity();
        this.secondFormGroup.get('voterNo').clearValidators();
        this.secondFormGroup.get('voterNo').updateValueAndValidity();
        this.secondFormGroup.get('voterName').clearValidators();
        this.secondFormGroup.get('voterName').updateValueAndValidity();
        this.adhar = val;
      }
      this.pan="";
      if(val == 'Pan'){
        this.secondFormGroup.get('adharNo').clearValidators();
        this.secondFormGroup.get('adharNo').updateValueAndValidity();
        this.secondFormGroup.get('adharName').clearValidators();
        this.secondFormGroup.get('adharName').updateValueAndValidity();
        this.secondFormGroup.get('panNo').setValidators([Validators.required]);
        this.secondFormGroup.get('panNo').updateValueAndValidity();
        this.secondFormGroup.get('panName').setValidators([Validators.required] );
        this.secondFormGroup.get('panName').updateValueAndValidity();
        this.secondFormGroup.get('voterNo').clearValidators();
        this.secondFormGroup.get('voterNo').updateValueAndValidity();
        this.secondFormGroup.get('voterName').clearValidators();
        this.secondFormGroup.get('voterName').updateValueAndValidity();
        this.pan = val;
      }
      this.vote="";
      if(val == 'VoterId'){
        this.secondFormGroup.get('adharNo').clearValidators();
        this.secondFormGroup.get('adharNo').updateValueAndValidity();
        this.secondFormGroup.get('adharName').clearValidators();
        this.secondFormGroup.get('adharName').updateValueAndValidity();
        this.secondFormGroup.get('panNo').clearValidators();
        this.secondFormGroup.get('panNo').updateValueAndValidity();
        this.secondFormGroup.get('panName').clearValidators();
        this.secondFormGroup.get('panName').updateValueAndValidity();
        this.secondFormGroup.get('voterNo').setValidators([Validators.required]);
        this.secondFormGroup.get('voterNo').updateValueAndValidity();
        this.secondFormGroup.get('voterName').setValidators([Validators.required]);
        this.secondFormGroup.get('voterName').updateValueAndValidity();
        this.vote=val;
      }
    }
    Gender(value){
      if(value == 1){
        this.male = 'Male';
      }else if(value == 2){
        this.female = 'Female';
      }
    }
    // openDilogueBox(){
    //   const dialogRef=this.dialog.open(DilogueBoxComponent)

    //   dialogRef.afterClosed().subscribe(result => {
           
    //   });
    // }


}
