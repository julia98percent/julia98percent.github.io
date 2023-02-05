import React from "react";

export interface ThumbnailProps {
  title: string;
  image?: string;
  entry: string;
  createdAt: string;
  tags: string[] | [];
}

const Thumbnail = ({
  title,
  image,
  entry,
  createdAt,
  tags,
}: ThumbnailProps) => {
  return (
    <div className="bg-slate-900 text-sky-400">
      {image && <img src={image} />}
      <h3 className="text-sky-400">{title}</h3>
      <p>{entry}</p>
      <span>{createdAt}</span>
      {tags?.length > 0 && tags.map((tag) => <h6>{tag}</h6>)}
    </div>
  );
};
export default Thumbnail;
