import { workExperience } from "@/constants";
import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full">
      <h1 className="heading">
        <span className="text-white">My</span>{" "}
        <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => {
          const typedCard = card as {
            period?: string;
            location?: string;
            desc: string;
            title: string;
            thumbnail: string;
            id: number;
          };
          return (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5 flex-1">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {typedCard.title}
                </h1>
                {typedCard.period && (
                  <p className="text-start text-purple/90 text-sm mt-1 font-medium">
                    {typedCard.period}
                    {typedCard.location ? ` • ${typedCard.location}` : ""}
                  </p>
                )}
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {typedCard.desc}
                </p>
              </div>
            </div>
          </Button>
        );
        })}
      </div>
    </section>
  );
};

export default Experience;
