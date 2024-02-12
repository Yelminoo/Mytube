import React from "react";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: { id: string; name: string; profileUrl: string };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className="block w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-.5 rounded">
          {duration}
        </div>
      </a>
    </div>
  );
}

export default VideoGridItem;
