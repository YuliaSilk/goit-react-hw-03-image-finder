import { BtnLoadMore } from "./Button.Styled"

export const LoadMoreBtn = ({onClick}) => {
    return (
        <BtnLoadMore type="button" onClick={onClick}>Load more</BtnLoadMore>
    )
}
