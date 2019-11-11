import { NotificationService } from '../ajs/_core/notification.service';

export { NotificationService };

export function NotificationServiceFactory(i: any): NotificationService {
  return i.get('NotificationService');
}

export const notificationServiceProvider = {
  provide: NotificationService,
  useFactory: NotificationServiceFactory,
  deps: ['$injector']
};
