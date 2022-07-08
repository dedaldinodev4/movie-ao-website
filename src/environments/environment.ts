// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  TOKEN_KEY : 'auth-token-movie',
  USER_KEY : 'auth-user-movie',
  API_BASEURL: 'http://localhost:3333',
  MOVIE_BASEURL: 'https://movie-list.alphacamp.io/api/v1/movies',
  MOVIE_IMAGE_URL: 'https://movie-list.alphacamp.io/posters/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
