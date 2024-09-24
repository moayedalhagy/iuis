import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_URI: process.env.API_URI
    },
    images : {
        // domains : ['picsum.photos','placehold.co','shutterstock.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',
            },
            {
              protocol: 'http',
              hostname: '**',
            },
          ],
    }
    
};
 
export default withNextIntl(nextConfig);