const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Express API with Swagger",
        version: "0.1.0",
        description:
          "This is API documentation for Calendario App developed by Andy Gonzalez",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
       components: {
        securitySchemes: {
        cookieAuth: {
            type: 'apiKey',
            in: 'cookie',
            name: 'connect_sid',
            },
        },
      },
      security: [
        {
          cookieAuth: [],
        },
      ],
    },
    apis: ["./routes/*.js", "./routes/docs/*.js"],
  };
  
  const specs = swaggerJsdoc(options);

  module.exports = {
    specs, swaggerUi
  }