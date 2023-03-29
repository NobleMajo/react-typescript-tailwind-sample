import * as React from "react";
import { TextButton } from "./components/TextButton";
import { ImageCard } from "./components/ImageCard";
import { TextCard } from "./components/TextCard";
import { CenteredContainer } from "./components/CenteredContainer";
import { FlexRowContainer } from "./components/FlewRowContainer";
import { DarkModeToggle } from "./DarkMode"

interface Props {
}

interface State {
}

export class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render = () => {
    let i: number = 0;
    return (
      <>
        <h1 className="p-10 m-10 text-center text-3xl font-bold">Hello World</h1>
        <CenteredContainer>
          <DarkModeToggle header="Toggle to $TOGGLE_MODE-Mode" />
          <div className="flex flex-col items-center gap-4">
            <TextButton className="max-w-[1380px] min-w-[360px] w-[100%] btn-primary" text="hello world"></TextButton>
            <TextButton
              callback={() => console.log("You clicked me!")}
              className="max-w-[1380px] min-w-[360px] w-[100%] btn-primary"
            ></TextButton>
            <TextButton
              callback={(b) => {
                b.setState({ text: "counter: " + i++ });
              }}
              className="max-w-[1380px] min-w-[360px] w-[100%] btn-primary"
            ></TextButton>
          </div>
          <FlexRowContainer>
            <TextCard className="max-w-[1380px] min-w-[360px] w-1/5" title="test123">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </TextCard>
            <TextCard className="max-w-[1380px] min-w-[360px] w-1/5" title="test321" size={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </TextCard>
            <TextCard className="max-w-[1380px] min-w-[360px] w-1/5" title="wow" size={2}>
              Urna molestie at elementum eu facilisis sed odio. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Lacinia at quis risus sed.
            </TextCard>
            <ImageCard className="max-w-[1380px] min-w-[360px] w-1/5"
              imagePercents={40}
              left={true}
              imageSrc="/static/img/andromeda-og.jpg"
            >
              Ut labore et dolore magna aliqua. Dignissim suspendisse in est ante in nibh mauris.
            </ImageCard>
          </FlexRowContainer>
          <CenteredContainer>
            <TextCard className="max-w-[1380px] min-w-[360px] w-[100%] btn-primary" title="Text 1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </TextCard>
            <TextCard className="max-w-[1380px] min-w-[360px] w-[100%] btn-primary" title="Text 2">
              Porttitor massa id neque aliquam vestibulum morbi blandit. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Urna duis convallis convallis tellus id interdum velit. Ut consequat semper viverra nam libero justo laoreet sit amet. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Pellentesque massa placerat duis ultricies lacus sed turpis. A condimentum vitae sapien pellentesque. Urna molestie at elementum eu facilisis sed odio. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et.
            </TextCard>
            <TextCard className="max-w-[1380px] min-w-[360px] w-[100%] btn-primary" title="Text 3">
              Sit amet luctus venenatis lectus. Feugiat in ante metus dictum. Enim diam vulputate ut pharetra. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Condimentum mattis pellentesque id nibh tortor id. Ac tortor vitae purus faucibus ornare. Nibh tortor id aliquet lectus proin nibh. Euismod quis viverra nibh cras pulvinar mattis nunc. Vulputate ut pharetra sit amet. Nec feugiat in fermentum posuere urna nec. Ante metus dictum at tempor commodo ullamcorper.
            </TextCard>
            <ImageCard
              className="max-w-[1380px] min-w-[360px] w-[100%] btn-primary"
              imagePercents={40}
              left={true}
              imageSrc="/static/img/andromeda-og.jpg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum morbi blandit. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Urna duis convallis convallis tellus id interdum velit. Ut consequat semper viverra nam libero justo laoreet sit amet. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Pellentesque massa placerat duis ultricies lacus sed turpis. A condimentum vitae sapien pellentesque. Urna molestie at elementum eu facilisis sed odio.
            </ImageCard>
          </CenteredContainer>
        </CenteredContainer>
      </>
    );
  };
}