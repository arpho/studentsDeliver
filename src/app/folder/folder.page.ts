import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  log = console.log.bind(document)
  constructor(private activatedRoute: ActivatedRoute,private router:Router) { }

  fileToUpload: File = null;

onFileSelect(files: FileList) {
    this.fileToUpload = files.item(0);
}



  

  ngOnInit() {
    this.log('initiated folder')
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    /* firebase.auth().onAuthStateChanged((user: firebase.User) => {
      this.log('user',user)
    }) */
    const auth = getAuth()
 onAuthStateChanged(auth,(user)=>{
   if(user){
     this.log('user ok è',user)
   }
   else{
     this.log('no user')
     this.router.navigateByUrl('users/login')
   }
 })
  }

}
