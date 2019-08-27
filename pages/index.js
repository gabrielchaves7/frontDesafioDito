import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Example from './auto-complete';

const Index = props => (
  <Layout>
    <h1>Testando</h1>
    <div className="App">
      <Example >

      </Example>
    </div>
  </Layout>
);

export default Index;