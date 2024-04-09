// Button.stories.tsx
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  children: "hi there",
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  children: "hi there",
};
