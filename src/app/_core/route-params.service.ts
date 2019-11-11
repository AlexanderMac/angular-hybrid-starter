export abstract class RouteParams {
  [key: string]: string;
}

export function routeParamsFactory(i: any): RouteParams {
  return i.get('$routeParams');
}

export const routeParamsProvider = {
  provide: RouteParams,
  useFactory: routeParamsFactory,
  deps: ['$injector']
};
