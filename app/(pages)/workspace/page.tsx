"use client";
import { NavigationButton } from "@/app/shared/components/buttons";
import Hint from "./ui/Hint";
import RoadmapList from "./ui/RoadmapList";
import { Roadmap } from "@/app/widgets/";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import withClientAuth from "@/app/processes/auth/withAuthClient";

function WorkspacePage() {
  const [selectedRoadmap, setSelectedRoadmap] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const roadmapId = searchParams.get("roadmapId");
  useEffect(() => {
    if (roadmapId) {
      setSelectedRoadmap(roadmapId);
    }
  }, [roadmapId]);

  return (
    <div className="flex min-h-screen max-md:flex-col gap-6 md:py-10 max-md:items-center items-start justify-center mt-32">
      <NavigationButton href={"/"} title={"Home"} />

      <section className="flex max-w-min flex-col items-end gap-6">
        <Hint />
        <div className=" bg-destructive p-5 text-destructive-foreground rounded-md">
          <p>
            Sadly, the developers of this website are completely insane, so all
            old roadmaps are gone. You can create a new one, though. <br />
            sad emoji here :(
          </p>
        </div>

        <RoadmapList
          selectedRoadmap={selectedRoadmap}
          onChildClick={(id) => {
            setSelectedRoadmap(id);
          }}
        />
      </section>
      {selectedRoadmap && (
        <section className="rounded-xl shadow-lg  dark:border p-6 d 700  ">
          <Roadmap id={selectedRoadmap} />
        </section>
      )}
    </div>
  );
}

export default withClientAuth(WorkspacePage);
