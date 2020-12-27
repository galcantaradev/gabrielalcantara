import Layout from '../components/Layout';
import Profile from '../components/Profile';
import Bio from '../components/Bio';
import Preview from '../components/Preview';

const Home = () => {
  return (
    <Layout>
      <Profile />
      <Bio />
      {/* <Preview /> */}
    </Layout>
  );
};

export default Home;
