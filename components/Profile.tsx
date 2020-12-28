const Profile = () => {
  return (
    <section className="text-center">
      <div className="pb-5 md:pb-10 lg:pb-10">
        <img
          width="110"
          height="110"
          src="/gabriel.jpeg"
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
