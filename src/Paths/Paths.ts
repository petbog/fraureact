export enum Path {
    Home = '/',
    Menu = '/menu',
    Bar = '/bar',
    Wine = '/wine',
    Error = '*'
}
export const LinksHeader = [
    {
        name: 'МЕНЮ',
        links: [
            { name: "Бар", link: Path.Bar },
            { name: "Кухня", link: Path.Menu },
        ]
    },
    { name: 'БРОНЬ', link: Path.Wine },
    { name: 'ЗАКАЗАТЬ', link: Path.Wine },

]