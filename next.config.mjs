/** @type {import('next').NextConfig} */

import path from "node:path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const __dirname = path.resolve();

const nextConfig = {
  output: "standalone",
  webpack: config => {
    config.resolve.alias["@/styles"] = "src/styles";

    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /react/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

// eslint-disable-next-line import/no-default-export
export default withNextIntl(nextConfig);
