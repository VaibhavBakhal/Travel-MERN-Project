import React from "react";
import { Timeline, Text } from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";

const Timelines = ({ data }) => {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
        <Text color="dimmed" size="sm">
          You&apos;ve created new branch{" "}
          <Text variant="link" component="span" inherit>
            fix-notifications
          </Text>{" "}
          from master
        </Text>
        <Text size="xs" mt={4}>
          2 hours ago
        </Text>
      </Timeline.Item>{" "}
    </Timeline>
  );
};

export default Timelines;
