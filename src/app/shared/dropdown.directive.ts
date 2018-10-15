import {Directive, HostListener, OnInit, HostBinding } from '@angular/core';


@Directive({
    selector: '[appDropdownButton]'
})
export class DropdownButtonDirective implements OnInit{

    @HostBinding('class.open') dropdownButtonClicked: boolean;

    ngOnInit(): void {
        this.dropdownButtonClicked = false;
    }

    @HostListener("click") onButtonClicked() {
        this.dropdownButtonClicked = !this.dropdownButtonClicked;
    }
}