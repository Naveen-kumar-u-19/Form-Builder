import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

 data :any=[{id:10,name:'folder10',type:'folder',parentId:null,isParent: true},{id:11,name:'folder10',type:'form',parentId:null,isParent: true},{id:10,name:'folder1000',type:'folder',parentId:10,isParent: true}];

  constructor() { }

  getuserData(value : any){
    console.log("value",value);
    
    
    // let data = [{id:1,name:'folder1',parentId:null,isParent:true,type:'folder'},{id:2,name:'file1',parentId:1,isParent:false,type:'form'}];
    if(value  && !value.isParent && value.parentId){
        this.data = this.data.filter((res:any) => res.parentId == value.parentId);
    }
    return this.data;

  }
  createFolder(value : any){
    this.data.push(value)
  }
  
}
