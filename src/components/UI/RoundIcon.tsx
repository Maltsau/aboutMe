import styled from "styled-components";

const OuterCircle = styled.div<{ size: string; percents: number }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background: conic-gradient(
    #e6dede ${(props) => ((100 - props.percents) * 360) / 100}deg,
    #6f8af0 ${(props) => ((100 - props.percents) * 360) / 100}deg
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InnerCircle = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: #e6dede;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const PersentageSpan = styled.span`
  position: relative;
  display: flex;
  width: 80%;
  height: 80%;
  font-size: 50%;
  justify-content: center;
  align-items: center;
`;

export default function RoundIcon({
  size,
  percents,
}: {
  size: string;
  percents: number;
}) {
  return (
    <OuterCircle size={size} percents={percents}>
      <InnerCircle>
        <PersentageSpan>{percents + "%"}</PersentageSpan>
      </InnerCircle>
    </OuterCircle>
  );
}
