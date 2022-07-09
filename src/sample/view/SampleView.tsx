import {useSamples} from 'src/sample/hook/useSamples';
import styled from 'styled-components';

export function SampleView() {
  const {samples} = useSamples();
  return (
    <List>
      {samples.map((sample, idx) => (
        <ListItem key={idx}>{sample.name}</ListItem>
      ))}
    </List>
  );
}

const List = styled.ul`
    background-color: black;
`;

const ListItem = styled.li`
    border: 1px solid white;
    color: white;
`;