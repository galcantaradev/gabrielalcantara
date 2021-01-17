import Image from 'next/image';

const Profile = () => {
  return (
    <section className="text-center">
      <div className="pb-5">
        <Image
          src="https://avatars3.githubusercontent.com/u/70175175?s=460&u=fe4c08b6d401b392cc7117fe7ffce0f4f1f695e4&v=4"
          width="110"
          height="110"
          alt="Profile Picture"
          className="rounded-full mx-auto"
        />
      </div>

      <p>Hello, i'm</p>
      <h1 className="text-2xl">Gabriel Alcântara</h1>
    </section>
  );
};

export default Profile;
