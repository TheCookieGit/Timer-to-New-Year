// Открывать мобильную версию, если ширина экрана меньше 1000 пикселей
if (document.documentElement.clientWidth < 1000) {
    open('/html/mobilehome.html', '_self')
}
// Иначе открывать ПК версию
else {
    open('/html/home.html', '_self')
};