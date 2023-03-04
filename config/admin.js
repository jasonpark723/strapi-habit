module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e4350524b0689fc3f46e2407dae950e2'),
  },
  apiToken: {
    salt: ["ZyfapGA3NZuHvXR95vAZ6EFg+9D9mXURA5wCIi1Bp5E="],
  },

});