import { Subject } from 'rxjs';
export declare class IonarLoadingService {
    visibilityChange$: Subject<{}>;
    isDisabled: boolean;
    show: () => void;
    hide: () => void;
    disabled: () => boolean;
    enabled: () => boolean;
}
