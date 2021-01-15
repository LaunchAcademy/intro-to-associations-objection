const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/intro-to-associations_development",
      test: "postgres://postgres:postgres@localhost:5432/intro-to-associations_test",
    }[nodeEnv] || process.env.DATABASE_URL
  )
}

module.exports = getDatabaseUrl
