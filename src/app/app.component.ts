import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    form: FormGroup;
    users = [];
    check = [];
    labels = [];
    username = "";
    ShowNames: boolean = false;
    buttonName: string = "Show Names";
    filteredUsers = [];
    title = 'Location';
    coords: any = [];
    forCenter: any = [];
    url = {url: "../assets/pointMarker.png",
        scaledSize: {
        height: 25,
        width: 25
        }
    };

    ngOnInit() {
        setInterval(() => {
            this.getCoords();
            this.checkUsers();
        }, 2000);
        setTimeout(() => {
            this.forCenter = this.coords;
        }, 2500)
    }
    constructor(public api: ApiService, private FormBuilder: FormBuilder) {
        this.form = this.FormBuilder.group({
            users: [''],
            selected: 0
        });
    }

    checkUsers() {
        this.api.getUsers().subscribe((data: any) => {
            this.check =  data.map(x => ({...x, id: parseFloat(x.id), login: x.login}));
            this.check.push({"id": "0", "login":"All"});
            if (JSON.stringify(this.check)!=JSON.stringify(this.users)){
                 this.users = this.check;
            }
        });
        return this.users;

    }

    getUserCoords(user_id) {
        this.api.getUserCoords(user_id).subscribe((data: any) => {
            this.coords = data.map(x => ({...x, lat: parseFloat(x.lat), lng: parseFloat(x.lng)}));
        });
    }
    getCoords() {
        this.api.getCoords().subscribe((data: any) => {
            this.coords = data.map(x => ({...x,user_id: x.user_id, lat: parseFloat(x.lat), lng: parseFloat(x.lng)}));
        });
        if (this.form.value.selected==0) {
            this.filteredUsers = this.coords;
            this.labels = this.users;
        }
        else{
            this.filteredUsers = this.coords.filter((user) => {
                return user.user_id == this.form.value.selected;
            });
            this.labels = this.users.filter((user) => {
                return user.id == this.form.value.selected;
            });
        }
        console.log(this.form.value.selected," ", this.filteredUsers);
    }
    showName(){
        this.ShowNames = !this.ShowNames;
        if (this.ShowNames==false){
            this.buttonName = "Show Names"
        }
        else{
            this.buttonName = "Hide Names"
        }
    }
}
