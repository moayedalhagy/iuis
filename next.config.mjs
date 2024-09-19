import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_URI: process.env.API_URI
    },
    images : {
       domains : ['picsum.photos'],
        // remotePatterns : [
        //     {
        //       protocol: 'https',
        //       hostname: 'api.iuis.university',                      
        //     },
        //     {
        //       protocol: 'https',
        //       hostname: 'picsum.photos',              
        //     },
        //   ],
    }
    
};
 
export default withNextIntl(nextConfig);