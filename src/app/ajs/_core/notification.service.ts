import * as Toastr from 'toastr';

export class NotificationService {
  constructor() {
    Toastr.options.closeButton = true;
    Toastr.options.closeDuration = 1000;
  }

  success(msg): void {
    Toastr.success(msg);
  }

  info(msg): void {
    Toastr.info(msg);
  }

  warning(err): void {
    // eslint-disable-next-line no-console
    console.error(err);
    Toastr.warning(err.reason ? err.reason : 'Unknown error');
  }

  error(err): void {
    // eslint-disable-next-line no-console
    console.error(err);
    Toastr.error(err.reason ? err.reason : 'Unknown error');
  }
}
