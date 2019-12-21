import {Component} from '@angular/core';
import { CoursesService } from './course/courses.service';


@Component({
    selector:'courses',
    template:`
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <img src="{{imageUrl}}"/>
        <table>
            <tr>
                <td [attr.colspan]="colSpan">safd</td>
            </tr>
        </table>
        <div (click)="onDivClicked()">
            <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
        </div>
    
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
        
    `
})
export class CoursesComponent{
    title = "List of courses";
    courses;
    imageUrl = 'http://lorempixel.com/400/200'
    colSpan = 2;
    isActive = true;
    email = 'example.com'

    constructor(service: CoursesService){
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }

    onSave($event){
        console.log("Button was clicked ...",$event)
    }

    onDivClicked(){
        console.log("Div was clicked ...")
    }
    onKeyUp(){
        console.log(this.email)
    }
}