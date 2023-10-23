import styled from "styled-components";

export const ImageGalleryLi = styled.li`
border-radius: 2px;

`;
export const ImageGalleryItemImg = styled.img`
width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 4px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

