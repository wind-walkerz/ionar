/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return typeof value === 'function';
}
/** @type {?} */
export var untilDestroyed = function (componentInstance, destroyMethodName) {
    if (destroyMethodName === void 0) { destroyMethodName = 'ngOnDestroy'; }
    return function (source) {
        /** @type {?} */
        var originalDestroy = componentInstance[destroyMethodName];
        if (isFunction(originalDestroy) === false) {
            throw new Error(componentInstance.constructor.name + " is using untilDestroyed but doesn't implement " + destroyMethodName);
        }
        if (!componentInstance['__takeUntilDestroy']) {
            componentInstance['__takeUntilDestroy'] =
                componentInstance['__takeUntilDestroy'] || new Subject();
            componentInstance[destroyMethodName] = function () {
                isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
                componentInstance['__takeUntilDestroy'].next(true);
                componentInstance['__takeUntilDestroy'].complete();
            };
        }
        return source.pipe(takeUntil(componentInstance['__takeUntilDestroy']));
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFrZS11bnRpbC1kZXN0cm95LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3V0aWxpdHkvIiwic291cmNlcyI6WyJvYnNlcnZhYmxlcy90YWtlLXVudGlsLWRlc3Ryb3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUV6QyxTQUFTLFVBQVUsQ0FBQyxLQUFLO0lBQ3JCLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDO0FBQ3ZDLENBQUM7O0FBRUQsTUFBTSxLQUFPLGNBQWMsR0FBRyxVQUMxQixpQkFBaUIsRUFDakIsaUJBQWlDO0lBQWpDLGtDQUFBLEVBQUEsaUNBQWlDO0lBQ2hDLE9BQUEsVUFBSSxNQUFxQjs7WUFDcEIsZUFBZSxHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO1FBQzVELElBQUksVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUN2QyxNQUFNLElBQUksS0FBSyxDQUVQLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLHVEQUNnQixpQkFBbUIsQ0FDNUUsQ0FBQztTQUNMO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDMUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUM7Z0JBQ25DLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLElBQUksSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUU3RCxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHO2dCQUNuQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3RFLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZELENBQUMsQ0FBQztTQUNMO1FBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBSSxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0FBcEJJLENBb0JKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1bnRpbERlc3Ryb3llZCA9IChcclxuICAgIGNvbXBvbmVudEluc3RhbmNlLFxyXG4gICAgZGVzdHJveU1ldGhvZE5hbWUgPSAnbmdPbkRlc3Ryb3knXHJcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxEZXN0cm95ID0gY29tcG9uZW50SW5zdGFuY2VbZGVzdHJveU1ldGhvZE5hbWVdO1xyXG4gICAgaWYgKGlzRnVuY3Rpb24ob3JpZ2luYWxEZXN0cm95KSA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgIGAke1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50SW5zdGFuY2UuY29uc3RydWN0b3IubmFtZVxyXG4gICAgICAgICAgICAgICAgfSBpcyB1c2luZyB1bnRpbERlc3Ryb3llZCBidXQgZG9lc24ndCBpbXBsZW1lbnQgJHtkZXN0cm95TWV0aG9kTmFtZX1gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2VbJ19fdGFrZVVudGlsRGVzdHJveSddKSB7XHJcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2VbJ19fdGFrZVVudGlsRGVzdHJveSddID1cclxuICAgICAgICAgICAgY29tcG9uZW50SW5zdGFuY2VbJ19fdGFrZVVudGlsRGVzdHJveSddIHx8IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlW2Rlc3Ryb3lNZXRob2ROYW1lXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaXNGdW5jdGlvbihvcmlnaW5hbERlc3Ryb3kpICYmIG9yaWdpbmFsRGVzdHJveS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICBjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10ubmV4dCh0cnVlKTtcclxuICAgICAgICAgICAgY29tcG9uZW50SW5zdGFuY2VbJ19fdGFrZVVudGlsRGVzdHJveSddLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBzb3VyY2UucGlwZSh0YWtlVW50aWw8VD4oY29tcG9uZW50SW5zdGFuY2VbJ19fdGFrZVVudGlsRGVzdHJveSddKSk7XHJcbn07Il19