import { Component, input } from '@angular/core'

@Component({
    imports: [],
    selector: 'app-header-link',
    template: `<a [href]="href()" [class.active]="active()"
        ><ng-content></ng-content
    ></a>`,
    styles: `
        a {
            padding: 1em 0.5em;
            color: var(--black);
            border-bottom: 4px solid transparent;
            text-decoration: none;
        }
        a.active {
            text-decoration: none;
            border-bottom-color: var(--accent);
        }
    `,
})
export class HeaderLinkComponent {
    href = input<string>()
    active = input<boolean>(false)
}
