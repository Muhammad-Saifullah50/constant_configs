const isProduction = process.env.NODE_ENV === 'production'

export const serverUrl = isProduction ? // your prod url here : 'http://localhost:3000'
