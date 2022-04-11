const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,

        auth: {
            user: 'ssayan.student@gmail.com',
            pass: ''
        }
    },

}

const production = {
    name: 'production'
}




module.exports = development;