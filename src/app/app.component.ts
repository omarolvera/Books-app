import { Component } from '@angular/core';
import {ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
constructor(private toastaService: ToastaService, private toastaConfig: ToastaConfig) {
  this.toastaConfig.theme = 'bootstrap';
}

  addToast() {
        // Or create the instance of ToastOptions
    const toastOptions: ToastOptions = {
        title: 'My title',
        msg: 'The message',
        showClose: true,
        timeout: 5000,
        theme: 'default',
        onAdd: (toast: ToastData) => {
            console.log('Toast ' + toast.id + ' has been added!');
        },
        onRemove: function(toast: ToastData) {
            console.log('Toast ' + toast.id + ' has been removed!');
        }
    };

  }
}
