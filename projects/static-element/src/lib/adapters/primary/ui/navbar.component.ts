import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'lib-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
}
