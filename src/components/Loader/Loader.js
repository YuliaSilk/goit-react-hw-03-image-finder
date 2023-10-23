import { FallingLines } from 'react-loader-spinner';
import { PositionLoader } from './Loader.Styled';

export const Loader =() => {
    return (
        <PositionLoader>
<FallingLines
  color="#fcdbe2"
  width="200"
  visible={true}
  ariaLabel='falling-lines-loading'
/>
        </PositionLoader>
    )
}
