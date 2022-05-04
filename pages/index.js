export default function Home({ data }) {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        fontSize: 30,
      }}
    >
      <h1>{data}</h1>
    </main>
  );
}

function sleep(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}

let cnt = 0;

const myFetch = async () => {
  const waitTime = cnt % 3 === 0 ? 1000 : 0;
  console.log("waiting", waitTime);
  await sleep(waitTime);
  console.log("wait done");
  return cnt;
};

export const getStaticProps = async () => {
  cnt++;
  const data = await myFetch();
  return {
    props: { data },
    revalidate: 2,
  };
};
