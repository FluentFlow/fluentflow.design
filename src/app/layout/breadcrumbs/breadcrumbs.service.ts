import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Breadcrumb } from './breadcrumb.model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private breadcrumbsSubject = new BehaviorSubject<Breadcrumb[]>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  updateBreadcrumbs(state: RouterStateSnapshot) {
    const breadcrumbs: Breadcrumb[] = [];
    this.createBreadcrumbs(state.root, breadcrumbs);
    this.breadcrumbsSubject.next(breadcrumbs);
  }

  private createBreadcrumbs(route: ActivatedRouteSnapshot, breadcrumbs: Breadcrumb[]) {
    const routeURL: string = route.url.map(segment => segment.path).join('/');
    
    const breadcrumbData = route.data['breadcrumb'];
    console.log(route);
    console.log(breadcrumbData);
    // Проверяем, есть ли данные о крошке
    const breadcrumbLabel = breadcrumbData ? breadcrumbData.label : routeURL;
    const icon = breadcrumbData ? breadcrumbData.icon : 'fas fa-folder'; // Иконка по умолчанию

    // Проверяем, является ли текущий маршрут корневым
    if (routeURL === '') {
        if (!breadcrumbs.some(b => b.link === '/')) {
            breadcrumbs.push({ label: 'Главная', link: '/', icon: 'fas fa-home' });
        }
    } else {
        const url = breadcrumbs.length > 0 ? `${breadcrumbs[breadcrumbs.length - 1].link}/${routeURL}` : `/${routeURL}`;
        breadcrumbs.push({ label: breadcrumbLabel, link:url, icon:icon });
        console.log(breadcrumbLabel);
    }

    // Рекурсивно проходим по дочерним маршрутам
    route.children.forEach(child => this.createBreadcrumbs(child, breadcrumbs));
  }



}
