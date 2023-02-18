import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import * as styles from "./Thumbnail.module.scss";
export interface ThumbnailProps {
  title: string;
  avatar?: ImageDataLike;
  entry: string;
  createdAt: string;
  tags: string[] | [];
}

const Thumbnail = ({
  title,
  avatar,
  entry,
  createdAt,
  tags,
}: ThumbnailProps) => {
  const image = getImage(avatar ?? null);
  return (
    <div className={styles.wrapper}>
      {image && <GatsbyImage image={image} alt={title} />}
      <div className={styles.right}>
        <h3>{title}</h3>
        <p>{entry}</p>
        <span>{createdAt}</span>
        {tags?.length > 0 &&
          tags.map((tag, index) => <h6 key={tag + index}>{tag}</h6>)}
      </div>
    </div>
  );
};
export default Thumbnail;
