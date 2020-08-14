import View from './MyFilmLibraryPageView';

export default function (root) {
    console.log(`insertAdjacentHTML`);
    const template = View();
    root.insertAdjacentHTML('beforeend', template);
}
