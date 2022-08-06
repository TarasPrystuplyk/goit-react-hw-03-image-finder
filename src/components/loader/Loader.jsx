import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './LoaderStyled';
export default function Spiner() {
  return (
    <LoaderContainer>
      <ThreeDots color="#3f51b5" height={200} width={200} />
    </LoaderContainer>
  );
}