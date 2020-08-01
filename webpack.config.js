module: {
  rules: [
    {
      test: /\.ttf$/,
      use: [
        {
          loader: "ttf-loader",
          options: {
            name: "./font/[hash].[ext]",
          },
        },
      ],
    },
  ];
}
