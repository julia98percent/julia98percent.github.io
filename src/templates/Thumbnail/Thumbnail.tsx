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
  const getThumbnailImage = (avatar: any) => {
    if (typeof avatar === null || typeof avatar === undefined) {
      return null;
    }
    if (typeof avatar === "object") {
      return <GatsbyImage image={getImage(avatar)} alt={title} />;
    }
    if (typeof avatar === "string") {
      return <img src={avatar} />;
    }
  };

  return (
    <div className={styles.wrapper}>
      {getThumbnailImage(avatar)}
      <div className={styles.right}>
        <h3>{title}</h3>
        <p className={styles.entry}>{entry}</p>
        <div className={styles.tags}>
          <span>{createdAt}</span>
          {tags?.length > 0 &&
            tags.map((tag, index) => (
              <h6 className={styles.tag} key={tag + index}>
                #{tag}
              </h6>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Thumbnail;
