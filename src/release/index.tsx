import { StyledContainer, StyledHeader, StyledMessage } from "./styles";

interface IReleaseMessage {
  name?: string;
}

const ReleaseMessage = (props: IReleaseMessage) => {
  const { name } = props;

  return (
    <StyledContainer>
      <StyledHeader>🎉 Jolly Good, Mate! 🎉</StyledHeader>
      <StyledMessage>
        {name
          ? `${name}, you finally made your release!`
          : "You finally made your release!"}
      </StyledMessage>
    </StyledContainer>
  );
};

export { ReleaseMessage };
export type { IReleaseMessage };
