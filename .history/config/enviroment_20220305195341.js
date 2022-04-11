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
    clientID: "36815387300-ui0j8e4ln3057q52scv2an8i5asu1k13.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/users/auth/google/callback",

}

const production = {
    name: 'production'
}




module.exports = development;