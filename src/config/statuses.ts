import { Status } from "../shared/types";

const statusConfig: Record<Status, {icon: string, label: string}> = {
  [Status.Poisoned]: {
    icon: "green_liquid",
    label: "Poisoned",
  },
  [Status.Stunned]: {
    icon: "fire",
    label: "Stunned",
  },
};

export default statusConfig;