module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: ["RRdFJLXBLxZc98G55B+5OuTANIXqqHKHbILvH1LAbq4="],
  },
});
