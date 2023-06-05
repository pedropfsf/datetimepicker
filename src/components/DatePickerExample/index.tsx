import { Box } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";

function DatePickerExample() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Box width="200px">
        <SingleDatepicker
          name="date-input"
          date={value}
          onDateChange={setValue}
          configs={{
            dateFormat: "dd/MM/yyyy",
          }}
          propsConfigs={{
            dateNavBtnProps: {
              colorScheme: "blue",
              variant: "outline",
            },
            dayOfMonthBtnProps: {
              defaultBtnProps: {
                borderColor: "red.300",
                _hover: {
                  background: "blue.400",
                },
              },
              selectedBtnProps: {
                background: "blue.200",
                color: "green",
              },
              todayBtnProps: {
                background: "teal.400",
              },
            },
            inputProps: {
              size: "sm",
            },
            popoverCompProps: {
              popoverContentProps: {
                background: "gray.700",
                color: "white",
              },
            },
          }}
        />
      </Box>
    </div>
  );
}

export default DatePickerExample;
