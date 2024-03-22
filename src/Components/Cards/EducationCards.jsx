const Document = () => (
  <img
    src={""}
    alt="document"
    className="hidden h-70 w-auto bg-black rounded-lg cursor-pointer opacity-0 hover:opacity-80 transition-opacity"
  />
);

const Description = ({ children }) => (
  <div className=" w-full text-sm text-justify font-normal text-gray-300 mb-2 overflow-hidden">
    <span className="block overflow-hidden max-h-20 lg:max-h-full lg:overflow-visible">
      {children}
    </span>
  </div>
);

const Card = ({ children }) => (
  <div className="mr-9 w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-md p-4 bg-black flex flex-col justify-center gap-4  hover:shadow-xl transform transition-all duration-500 lg:hover:-translate-y-8 hover:scale-105 border-2 border-purple-600">
    {children}
  </div>
);

const Top = ({ children }) => (
  <div className="w-full flex items-center gap-4">{children}</div>
);

const Image = ({ src }) => (
  <img src={src} alt="school logo" className="h-12 w-12 bg-black rounded-lg" />
);

const Body = ({ children }) => (
  <div className="flex flex-col gap-1">{children}</div>
);

const Name = ({ children }) => (
  <div className="text-lg font-semibold text-gray-300">{children}</div>
);

const Degree = ({ children }) => (
  <div className="text-sm font-medium text-gray-400">{children}</div>
);

const Date = ({ children }) => (
  <div className="text-xs font-normal text-gray-500">{children}</div>
);

const Grade = ({ children }) => (
  <div className="text-sm font-medium text-gray-400">
    <b>Grade: </b>
    {children}
  </div>
);

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>{education.grade}</Grade>
      <Description>{education.desc}</Description>
    </Card>
  );
};

export default EducationCard;
