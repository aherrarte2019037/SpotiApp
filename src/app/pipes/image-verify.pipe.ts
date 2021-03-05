import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageVerify'
})
export class ImageVerifyPipe implements PipeTransform {

  transform(images: any[]) {

    try {
      if (images.length === 0) {
        return 'assets/img/noavailable.png';

      } else {
        return images[0].url
      }

    }catch(error) {
      return 'assets/img/noavailable.png';
    }


  }




}
