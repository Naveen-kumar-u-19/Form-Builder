import { Component } from '@angular/core';
import { FormService } from '../../../services/folder.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutDirective } from '../../../directives/attribute-directives/flex-layout.directive';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [CommonModule,FlexLayoutDirective],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss'
})
export class FolderComponent {
    
        userData: any
        constructor (private formService:FormService){ }
        ngOnInit(){
            let data = {
                userId:1,
                parentId: null,
                isParent: true
            }
            this.getfolderdetails(data);
        }
    
        createFolder(){
            let data={
                id:1,
                name:'folder1',
                type: 'folder',
                parentId:this.userData?.length ?  this.userData?.id : null,
                isParent: this.userData?.length ? false : true
            }
            this.formService.createFolder(data);
            let userdetails ={
                userId:1,
                parentId: null,
                isParent: true
    
            }
            this.getfolderdetails(userdetails)
            
        }
        createForm(){
            let data={
                id: 1,
                name:'form1',
                type: 'form',
                parentId:this.userData?.id ? this.userData?.id : null,
                isParent: this.userData?.id ? false : true
            }
            this.formService.createFolder(data);
            let userdetails ={
                userId:1,
                parentId: null,
                isParent: true
    
            }
            this.getfolderdetails(userdetails)
    
        }
    getfolderDetailssss(event:any){
    
        let userdetails ={
            userId:1,
            parentId: event.id,
            isParent: false
    
        }
        this.getfolderdetails(userdetails)
    
         
        
    }
        getfolderdetails(data:any){
            this.userData = this.formService.getuserData(data);
            console.log("this.userData",this.userData);
            
        }
    
    

}


