
const KEYS = {
    'black': 'black',
    'white': 'white',
    'lightSkyBlue': 'lightSkyBlue',
    'steelBlue': 'steelBlue',
    'macaroniAndCheese': 'macaroniAndCheese',
    'platinum': 'platinum',
}

const COLOURS = {
    [KEYS.black]: 'hsl(0, 0%, 0%)',
    [KEYS.white]: 'hsl(0, 25%, 98%)',
    [KEYS.lightSkyBlue]: 'hsl(204, 81%, 74%)',
    [KEYS.steelBlue]: 'hsl(205, 55%, 46%)',
    [KEYS.macaroniAndCheese]: 'hsl(24, 95%, 74%)',
    [KEYS.platinum]: 'hsl(0, 5%, 92%)',
}

const SHADES = {
    [KEYS.black]: 'hsl(0, 0%, 0%, 60%)',
    [KEYS.white]: 'hsl(0, 25%, 98%)',
    [KEYS.lightSkyBlue]: 'hsl(204, 81%, 74%, 60%)',
    [KEYS.steelBlue]: 'hsl(205, 55%, 46%, 60%)',
    [KEYS.macaroniAndCheese]: 'hsl(24, 95%, 74%, 60%)',
    [KEYS.platinum]: 'hsl(0, 5%, 92%, 60%)',
}

export { COLOURS, SHADES, KEYS };
