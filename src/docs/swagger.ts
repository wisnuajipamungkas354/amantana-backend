import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v0.0.1",
    title: "Dokumentasi API Urban Farming Management System",
    description: "Dokumentasi API Urban Farming Management System",
  },

  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local server"
    }
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      RegisterRequest: {
        fullName: "Dina Aulia",
        email: "dinaaulia@gmail.com",
        role: "farmer",
        password: "12345678",
        confirmedPassword: "12345678",
      },
      LoginRequest: {
        email: "dinaaulia@gmail.com",
        password: "12345678",
      }
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);