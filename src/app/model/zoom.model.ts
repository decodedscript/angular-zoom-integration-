export interface ZoomClientModel {
    signature: string;
    meetingNumber: string;
    userName: string;
    userEmail: string;
    passWord: string;

}
export interface SignatureModel {
    meetingNumber: string,
    apiKey: string,
    apiSecret: string,
    role: string
}
export interface StartMeeingModel {
    meetingNumber: string,
    userName: string,
    passWord: string,
    userEmail: string
}