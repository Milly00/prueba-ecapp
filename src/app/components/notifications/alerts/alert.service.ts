import {
  Injectable
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private classAlert = new BehaviorSubject<string>('success');
  myClass$ = this.classAlert.asObservable();

  private textAlert = new BehaviorSubject<string>('Valor inicial');
  myText$ = this.textAlert.asObservable();

 

  constructor(private toastr: ToastrService) {}
  sucess(name: string, message: string): void {
    this.toastr.success(message, name, {
      closeButton: true
    });
  }


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  openModal1(name: string, message: string): void {
    /**
    this.toastComponentRef = this.viewRef.createComponent(AlertsComponent);
    this.classAlert.next(name);
    this.textAlert.next(message);
    this.appRef.attachView(this.toastComponentRef.hostView);
    const domElem = (this.toastComponentRef.hostView as any)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    setTimeout(() => {
      this.viewRef.remove();
    }, 5000); */
  }
}
