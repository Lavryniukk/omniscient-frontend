"use client";
import { RoadmapNode } from "@/app/entities";
import useLessonStorage from "@/app/shared/stores/lessonStorage";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronDownIcon, Milestone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LessonRoadmapNodeComponent({
  tech,
  isCurrent,
  roadmapId,
}: {
  tech: RoadmapNode;
  roadmapId: string;
  isCurrent: boolean;
}) {
  const router = useRouter();
  const { isStreaming } = useLessonStorage();
  const [isOpened, setIsOpened] = useState(false);
  return (
    <li
      className={`lesson-roadmap-node ${isCurrent && "after:h-full"} transition-all duration-200  ${isOpened ? "h-40" : "h-10"}  group`}
    >
      <section className="flex relative justify-between  items-center  w-full">
        <p
          aria-disabled={isStreaming}
          className={`w-fit font-semibold ${
            isStreaming && "hover:cursor-not-allowed"
          } ${tech.is_completed && "line-through"} 
  		  `}
        >
          {tech.title}
        </p>

        <div className="relative">
          <ChevronDownIcon className={`${isOpened && "rotate-180"}`} />
          <input
            checked={isOpened}
            onChange={() => setIsOpened(!isOpened)}
            className="absolute peer top-0 cursor-pointer opacity-0 w-6 h-6"
            type="checkbox"
          />
        </div>
        <div
          className={`rounded-full absolute group-hover:scale-150 transition-transform duration-200 w-2 h-2 bg-foreground0 ${isCurrent && "dark:bgblack 400 bgblack 700 scale-150"} z-10  -right-5 top-[calc(50%-4px)]`}
        />
      </section>
      <section
        className={`w-full flex flex-col items-center gap-2 justify-center  transition-all duration-200 h-28 ${isOpened ? " opacity-100" : "opacity-0"}  `}
      >
        {isCurrent ? (
          <Button
            size="sm"
            disabled
            className="flex justify-start  gap-2 w-full"
            variant="ghost"
          >
            You are already on this lesson
          </Button>
        ) : (
          <Button
            onClick={() => {
              router.push(`/workspace/r/${roadmapId}/l/${tech.lesson_id}`);
            }}
            size="sm"
            className="flex justify-start  gap-2 w-full"
            variant="outline"
          >
            <Milestone size={20} />
            <p className=" text-ellipsis text-left truncate">
              Go to {tech.title}
            </p>
          </Button>
        )}
        <Button
          onClick={() => {
            router.push(`/workspace/r/${roadmapId}/l/${tech.quiz_id}`);
          }}
          size="sm"
          className="flex justify-start gap-2 text-left w-full"
          variant="outline"
        >
          <BookOpen size={20} />
          <p>Test your knowledge</p>
        </Button>
      </section>
    </li>
  );
}
