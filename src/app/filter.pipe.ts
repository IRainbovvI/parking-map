import { Pipe, PipeTransform } from '@angular/core';
import { Marker } from './models';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    markers: Array<Marker>,
    filterType: string,
    battery: number
  ): Array<Marker> {
    if (filterType === '1') {
      return markers;
    } else if (filterType === '2') {
      return markers.filter((item) => item.status === 'AVAILABLE');
    } else if (filterType === '3') {
      return markers.filter((item) => item.status !== 'AVAILABLE');
    } else if (filterType === '4') {
      return markers.filter((item) => item.batteryLevelPct > battery);
    }
    return [];
  }
}
