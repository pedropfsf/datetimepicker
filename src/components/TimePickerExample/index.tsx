import { Box, Input } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";

function TimePickerExample() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Box width="200px">
        <Input type="datetime-local" />
      </Box>
    </div>
  );
}

export default TimePickerExample;
