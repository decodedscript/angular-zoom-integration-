import { Injectable } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignatureModel, ZoomClientModel } from '../model/zoom.model';


@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  constructor() { }

  genrateSignature(signatureModel: SignatureModel): Observable<string> {
    let signature = ZoomMtg.generateSignature({
      meetingNumber: signatureModel.meetingNumber,
      apiKey: signatureModel.apiKey,
      apiSecret: signatureModel.apiSecret,
      role: signatureModel.role
    })
    return of(signature)
  }

  initializeWebSDK(zoomClient: ZoomClientModel): void {
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();

    ZoomMtg.i18n.load('en-US');
    ZoomMtg.i18n.reload('en-US');

    ZoomMtg.init({
      leaveUrl: environment.leaveUrl,
      isSupportAV: true,
      success: (success: any) => {
        console.log(success)

        ZoomMtg.join({
          signature: zoomClient.signature,
          meetingNumber: zoomClient.meetingNumber,
          userName: zoomClient.userName,
          apiKey: environment.apiKey,
          userEmail: zoomClient.userEmail,
          passWord: zoomClient.passWord,
          success: (success: any) => {
            console.log(success)

          },
          error: (error: any) => {
            console.log(error);

          }
        })

      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  reRenderMeeting() {
    ZoomMtg.reRender({})
  }
  endMeeting() {
    ZoomMtg.endMeeting({})
  }
  leaveMeeting() {
    ZoomMtg.leaveMeeting({})
  }
}
