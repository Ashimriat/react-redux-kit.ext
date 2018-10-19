// @flow

export default () => {
  const roboto = document.createElement('link');

  roboto.rel = 'stylesheet';
  roboto.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';

  document.head.appendChild(roboto);
};
