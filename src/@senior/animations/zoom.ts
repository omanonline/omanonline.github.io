import { SeniorAnimationCurves, SeniorAnimationDurations } from '@senior/animations/defaults';
import { animate, state, style, transition, trigger } from '@angular/animations';

// -----------------------------------------------------------------------------------------------------
// @ Zoom in
// -----------------------------------------------------------------------------------------------------
const zoomIn = trigger('zoomIn',
    [

        state('void',
            style({
                opacity  : 0,
                transform: 'scale(0.5)',
            }),
        ),

        state('*',
            style({
                opacity  : 1,
                transform: 'scale(1)',
            }),
        ),

        // Prevent the transition if the state is false
        transition('void => false', []),

        // Transition
        transition('void => *', animate('{{timings}}'),
            {
                params: {
                    timings: `${SeniorAnimationDurations.entering} ${SeniorAnimationCurves.deceleration}`,
                },
            },
        ),
    ],
);

// -----------------------------------------------------------------------------------------------------
// @ Zoom out
// -----------------------------------------------------------------------------------------------------
const zoomOut = trigger('zoomOut',
    [

        state('*',
            style({
                opacity  : 1,
                transform: 'scale(1)',
            }),
        ),

        state('void',
            style({
                opacity  : 0,
                transform: 'scale(0.5)',
            }),
        ),

        // Prevent the transition if the state is false
        transition('false => void', []),

        // Transition
        transition('* => void', animate('{{timings}}'),
            {
                params: {
                    timings: `${SeniorAnimationDurations.exiting} ${SeniorAnimationCurves.acceleration}`,
                },
            },
        ),
    ],
);

export { zoomIn, zoomOut };

