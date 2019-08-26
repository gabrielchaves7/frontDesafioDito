import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Testando</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.event}>
          <Link href="/p/[id]" as={`/p/${show.event}`}>
            <a>{show.event}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  console.log("fazendo requisicao");
  const res = await fetch(`http://localhost:8080/?evento=buy`);
  const data = await res.json();
  console.log(data);

  return {
    shows: data
  };
};

export default Index;