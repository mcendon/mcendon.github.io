import { Component, computed, input } from '@angular/core'
import { HeaderLinkComponent } from './header-link.component'

@Component({
    imports: [HeaderLinkComponent],
    selector: 'app-header',
    template: `
        <header>
            <nav>
                <div class="title">
                    <img
                        class="avatar"
                        src="https://avatars.githubusercontent.com/u/7624862?s=75&u=995703f01095ff2da08acc11c5f4b80e2c6fc78a&v=4"
                    />
                    <h2>
                        <a href="/">{{ title() }}</a>
                    </h2>
                </div>
                <div class="internal-links">
                    <app-header-link
                        href="/"
                        [active]="menupath() === '/' || !menupath()"
                        >Home</app-header-link
                    >
                    <app-header-link
                        href="/blog"
                        [active]="menupath() === 'blog'"
                        >Blog</app-header-link
                    >
                    <app-header-link
                        href="/about"
                        [active]="menupath() === 'about'"
                        >About</app-header-link
                    >
                </div>
                <div class="social-links">
                    <a href="https://github.com/mcendon" target="_blank">
                        <span class="sr-only">Go to Mauro's GitHub repo</span>
                        <svg
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                            width="32"
                            height="32"
                        >
                            <path
                                fill="currentColor"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                            ></path>
                        </svg>
                    </a>
                    <a
                        href="https://www.buymeacoffee.com/mcendon"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                            alt="Buy Me A Coffee"
                            style="height: 50px; border-radius: 8px;"
                            loading="lazy"
                        /> </a
                    >>
                </div>
            </nav>
        </header>
    `,
    styles: `
    	header {
		margin: 0;
		padding: 0 1em;
		background: white;
		box-shadow: 0 2px 8px rgba(var(--black), 5%);
	}
	h2 {
		margin: 0;
		font-size: 1em;
	}

	h2 a,
	h2 a.active {
		text-decoration: none;
	}
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	nav a {
		padding: 1em 0.5em;
		color: var(--black);
		border-bottom: 4px solid transparent;
		text-decoration: none;
	}
	nav a.active {
		text-decoration: none;
		border-bottom-color: var(--accent);
	}
	.social-links,
	.social-links a {
		display: flex;
	}
	@media (max-width: 720px) {
		.social-links {
			display: none;
		}
	}
    .avatar {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        padding: 5px;
    }
    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    `,
})
export class HeaderComponent {
    title = input<string>()
    pathname = input<string>()
    subpath = computed(() => {
        const subpath = this.pathname()?.match(/[^/]+/g)
        return subpath ? subpath : []
    })
    menupath = computed(() => this.subpath()[0])
}
