const Profile = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="pb-5">
        <img
          width="110"
          height="110"
          src="/gabriel.jpeg"
          alt="Profile Picture"
          className="rounded-full"
        />
      </div>

      <p>Hello, i'm</p>
      <h1 className="text-2xl">Gabriel Alcântara</h1>
    </section>
  );
};

export default Profile;
