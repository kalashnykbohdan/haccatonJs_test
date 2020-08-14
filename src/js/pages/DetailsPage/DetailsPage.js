import View from './DetailsPageView';

export default function (root) {
    const template = View();
    root.insertAdjacentHTML('beforeend', template);
}
