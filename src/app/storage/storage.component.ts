import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent {
  create: boolean = false;
  listItem: boolean = true;
  NameBucket: string="" ;
  location :string;
  storage_class :string = "global";
  selectedLocation = null;
  LocationForm: FormGroup;
  LocationList = ["us-central1", "us-east1", "us-east4" ,"us-west1", "us-west2", "asia-east1",
   "asia-east2","asia-northeast1", "asia-northeast2",
   "asia-south1","asia-southeast1"
]
 bucketData = new FormData();
 AddPermissionForm: boolean = false;
 RoleList: any;
  response :any;
  DOMRoleList : any;
  list_of_buckets: any;
  member: string = "";
  selectedRole: string;
constructor(private http: HttpClient) { 
  this.ListOfBuckets()
}
  LocationChange(selected){
    console.log("CLICKED");
    this.location = selected;
    console.log(this.location);
  }
  AddBtn(){
    this.create=true;
    this.listItem=false;
  }
 
  selectOption(id: number) {
    //getted from event
    console.log(id);
    this.selectedLocation = id;
    //getted from binding
  }
   StorageClassChange(selected){
     console.log("CLICKED");
     this.storage_class = selected;
     console.log(this.storage_class);
     console.log(this.location);
     console.log(this.selectedLocation);
     console.log(this.NameBucket);
   }
   CreateBucket(){
    console.log("Create Bucket clicked")
    
    const fd = new FormData();
    console.log(this.NameBucket, this.storage_class, this.selectedLocation)
    fd.append("name", this.NameBucket);
    fd.append("storage_class", this.storage_class);
    fd.append("location",this.selectedLocation);
 
    console.log("Upload clicked")
    console.log(fd.get("storage_class"));
    this.http.post<any>('http://localhost:8000/bucket/',
         fd
        //  ,
        //  {
        //       headers: new HttpHeaders().set('Content-Type','application/json')
        //   }
          ).subscribe(response => {
            this.response=response;
          });
  }
  ListOfBuckets(){
    console.log("List Is CLicked");
    this.http.post<any>('http://localhost:8000/listbucket/',[]
  
     ).subscribe(response => {
       this.list_of_buckets=response;
     });
  }
  AddPermissions(bucketDetail){
    console.log("Clicked");
    this.bucketData.append("Bucket_Name",bucketDetail.name);
    console.log(bucketDetail.name);
    console.log(this.bucketData.get("name"));
    this.AddPermissionForm = true;
    this.create = false;
    this.listItem = false;
    this.http.post<any>('http://localhost:8000/roleslist/',[]
  
    ).subscribe(response => {
      this.RoleList=response;
    });
    console.log("Completed");
     console.log(this.RoleList);
  }
  SetIamRole(){
    this.bucketData.append("role", this.selectedRole);
    this.bucketData.append("member", "serviceAccount:"+this.member);
    this.http.post<any>('http://localhost:8000/updatepolicy/', this.bucketData
  
    ).subscribe(response => {
      this.RoleList=response;
    });

  }
  
}
