import View from './HomePageView';

export default function (root) {
    const template = View();
    root.insertAdjacentHTML('beforeend', template);
}


