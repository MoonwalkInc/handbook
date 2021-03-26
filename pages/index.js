import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <title>Moonwalk Handbook</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to <a href="https://moonwalk.com">Moonwalk!</a>
      </h1>

      <p className="description">This handbook is a work-in-progress.</p>

      <div className="grid">
        <a href="/developers" className="card">
          <h3>Developer Setup &rarr;</h3>
          <p>
            Onboarding overview including infrastructure, repositiories, and
            tooling
          </p>
        </a>
      </div>
    </main>
  </div>
);

export default Home;
