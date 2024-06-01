/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";
import path from "node:path";

const withNextIntl = createNextIntlPlugin();

const __dirname = path.resolve();

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@/styles'] = 'src/styles';

    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /react/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [{
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },]
          }
        }
      }],
    })
    return config;
  },
};

export default withNextIntl(nextConfig);
