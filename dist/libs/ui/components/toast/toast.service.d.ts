import { Subject } from 'rxjs';
export declare class IonarToastService {
    private _messageList;
    newMessage$: Subject<{}>;
    private _duration;
    getMessages(): any[];
    sendMessage(message: any, duration: any): void;
    deleteMessage(id: any): void;
    info: (message: any, duration?: number) => void;
    success: (message: any, duration?: number) => void;
    danger: (message: any, duration?: number) => void;
}
