import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Profile from '../components/Profile';

const Home = () => {
  return (
    <Layout>
      <Profile />
      <Bio />
    </Layout>
  );
};

export default Home;
