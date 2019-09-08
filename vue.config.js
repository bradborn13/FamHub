module.exports = {
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'google-signin-client_id';
                args[0].meta = {
                    name: 'google-signin-client_id',
                    content: process.env.GoogleSignInClient,

                };

                return args;
            });
    }
};