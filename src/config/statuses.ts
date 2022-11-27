import { Status } from "../shared/types";

const statusConfig: Record<Status, {icon: string}> = {
  [Status.Poisoned]: {
    icon: "green_liquid",
  },
  [Status.Stunned]: {
    icon: "fire",
  },
};

export default statusConfig;