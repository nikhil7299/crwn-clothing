import { Link } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.sc";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  return (
    <DirectoryItemContainer as={Link} to={route}>
      <BackgroundImage imageurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
