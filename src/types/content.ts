export enum Sender {
    React,
    Content
}

export interface ChromeMessage {
    from: Sender,
    message: any,
}

export interface Request{
    command: string,
    selection: string,
}