import Container from "./Container";

const User = () => {
  const usingPeople = [
    "Project Manager",
    "UI/UX Designer",
    "Web Designer",
    "Web Developer",
    "App Developer",
    "Software Engineer",
    "DevOps Engineer",
    "Doctor",
    "Banker",
    "Lower",
  ];
  return (
    <div className="py-10 text-center">
      <h1 className="text-2xl md:text-4xl font-bold">
        Unlock the Power of Task Mastery
      </h1>
      <p>
        Maximize productivity with exclusive insights and expert tips for
        elevated task management.
      </p>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-5">
          {usingPeople.map((tip, idx) => (
            <div key={idx} className="bg-white shadow-md p-5">
              {tip}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default User;
