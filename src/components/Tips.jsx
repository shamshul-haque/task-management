import Container from "./Container";

const Tips = () => {
  const tips = [
    "Prioritize Tasks",
    "Time Blocking",
    "Break Down Big Goals",
    "Set Deadlines",
    "Limit Multitasking",
    "Regular Breaks",
    "Utilize Task Labels",
    "Review and Reflect",
    "Learn to Delegate",
    "Embrace Technology",
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
          {tips.map((tip, idx) => (
            <div key={idx} className="bg-white shadow-md p-5">
              {tip}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Tips;
