import dotenv from 'dotenv'

export const getAppEnv = () => {
    const appEnv = process.env.APP_ENV
    if (appEnv === 'QA') {
        return 'QA'
    }
    if (appEnv === 'DEV') {
        return 'DEV'
    }
    if (appEnv === 'STAGE') {
        return 'STAGE'
    }
    if (appEnv === 'PRODUCTION') {
        return 'PRODUCTION'
    }
    return 'LOCAL'
}
export const APP_ENV = getAppEnv()

dotenv.config({ path: `.env.${APP_ENV.toLocaleLowerCase()}` })

export const PORT = process.env.PORT || 3000
export const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET'
export const SALT_ROUND = process.env.SALT_ROUND || '10'
export const JWT_EXP = process.env.JWT_EXP || '1d'

export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'secret'
export const REFRESH_TOKEN_EXP = process.env.REFRESH_TOKEN_EXP || '60m'

export const LOCAL_DB_USERNAME = process.env.LOCAL_DB_USERNAME
export const LOCAL_DB_PASSWORD = process.env.LOCAL_DB_PASSWORD

export const DB_URL = process.env.DB_URL || ''

export const USER_ID = process.env.USER_ID || 'dpboss24.in@gmail.com'

export const USER_SECRET = process.env.USER_SECRET || '(DpBoss)@2023'
