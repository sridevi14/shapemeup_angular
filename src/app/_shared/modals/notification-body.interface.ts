export interface Notification {
    title?: string;
    body: string;
    mutable_content?: boolean;
    sound?: string;
}

export interface Data {
    url: string;
    dl: string;
}

export interface NotificationBody {
    to: string;
    notification: Notification;
    data?: Data;
}