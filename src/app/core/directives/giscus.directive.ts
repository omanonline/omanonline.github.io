import {
    AfterViewInit,
    Directive,
    ElementRef,
    Input,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[giscus]',
    standalone: true,
})
export class GiscusDirective implements AfterViewInit {
    @Input() giscus: string;
    constructor(
        private readonly renderer: Renderer2,
        private readonly el: ElementRef
    ) { }
    ngAfterViewInit() {
        try {
            const scriptEl: HTMLScriptElement = this.renderer.createElement('script');
            scriptEl.async = true;
            scriptEl.src = 'https://giscus.app/client.js';
            scriptEl.setAttribute('data-repo', 'omanonline/comments');
            scriptEl.setAttribute('data-repo-id', 'R_kgDOKTVBqQ');
            scriptEl.setAttribute('data-category', 'General');
            scriptEl.setAttribute('data-category-id', 'DIC_kwDOKTVBqc4CZYEZ');
            scriptEl.setAttribute('data-mapping', 'pathname');
            scriptEl.setAttribute('data-strict', '1');
            scriptEl.setAttribute('data-reactions-enabled', '1');
            scriptEl.setAttribute('data-emit-metadata', '0');
            scriptEl.setAttribute('data-input-position', 'bottom');
            scriptEl.setAttribute('data-theme', 'preferred_color_scheme');
            scriptEl.setAttribute('data-lang', 'en');
            scriptEl.setAttribute('crossorigin', 'anonymous');
            scriptEl.async = true;
            scriptEl.defer = true;
            this.renderer.appendChild(this.el.nativeElement, scriptEl);
        } catch (e) {
            console.log('Error adding utterances comments', e);
        }
    }
}
