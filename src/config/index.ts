let config = {
  mysql: {
    host: 'localhost',
    port: 3306
  },
  app: {
    port: 3001
  }
}

if (process.env.NODE_ENV === 'prd') {
  config = {
    mysql: {
      host: 'naruto-mysql',
      port: 3306
    },
    app: {
      port: 3000
    }
  }
} else {
  config = {
    mysql: {
      host: 'localhost',
      port: 3306
    },
    app: {
      port: 3001
    }
  }
}

export default config