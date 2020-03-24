import path from 'path';
import axios from 'axios';

export default {
    plugins: [
        ['react-static-plugin-google-analytics', { id: 'UA-133374571-2' }],
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages')
            }
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap')
    ]
};
