/* global fetch */
export default () => fetch('/api/movies').then(response => response.json());
