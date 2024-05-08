import {
    AfterViewInit,
    Directive,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    Renderer2,
} from '@angular/core';
import { OmanOnlineConfig, OmanOnlineConfigService } from '@omanonline/services/config';
import { Subject, takeUntil } from 'rxjs';

@Directive({
    selector: '[giscus]',
    standalone: true,
})
export class GiscusDirective implements AfterViewInit, OnInit, OnDestroy {
    @Input() giscus: string;
    config: OmanOnlineConfig;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    theme: string;
    constructor(
        private readonly renderer: Renderer2,
        private readonly el: ElementRef,
        private _omanonlineConfigService: OmanOnlineConfigService,
    ) { }
    ngOnInit(): void {
        this._omanonlineConfigService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config: OmanOnlineConfig) => {
                this.config = config;
            });
        if (this.config.scheme === 'auto') {
            this.theme = 'preferred_color_scheme';
        }
        else {
            this.theme = this.config.scheme;

            console.log(this.theme);
        }
    }
    ngAfterViewInit() {

        try {
            const scriptEl: HTMLScriptElement = this.renderer.createElement('script');
            scriptEl.async = true;
            scriptEl.id = 'giscus';
            scriptEl.src = 'https://giscus.app/client.js';
            scriptEl.setAttribute('data-repo', 'omanonline/comments');
            scriptEl.setAttribute('data-repo-id', 'R_kgDOKTVBqQ');
            scriptEl.setAttribute('data-category', 'General');
            scriptEl.setAttribute('data-category-id', 'DIC_kwDOKTVBqc4CZYEZ');
            scriptEl.setAttribute('data-mapping', 'title');
            scriptEl.setAttribute('data-strict', '1');
            scriptEl.setAttribute('data-reactions-enabled', '1');
            scriptEl.setAttribute('data-emit-metadata', '0');
            scriptEl.setAttribute('data-input-position', 'bottom');
            scriptEl.setAttribute('data-theme', this.theme);
            scriptEl.setAttribute('data-lang', 'en');
            scriptEl.setAttribute('data-loading', 'lazy');
            scriptEl.setAttribute('crossorigin', 'anonymous');
            scriptEl.async = true;
            scriptEl.defer = true;
            this.renderer.appendChild(this.el.nativeElement, scriptEl);
        } catch (e) {
            console.log('Error loading comments', e);
        }
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
