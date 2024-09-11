import { forwardRef } from "react";
import { Box } from "@mui/material";
import { Icon } from "@iconify/react";

const Iconfiy = forwardRef((props, ref) => <Box component={Icon} {...props} />);
export default Iconfiy;
