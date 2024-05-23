import { React, useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const SearchItem = ({ name, box, tickedArray, handleTick }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  function isEnglish(str) {
    return /^[A-Za-z\s]+$/i.test(str);
  }

  let itemChecked;

  tickedArray.map((item) => {
    if (item.name === name) {
      itemChecked = item.value;
    }
  });
  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          style={{ display: "flex", justifyContent: "flex-start" }}
          primary={name}
        />
        {open ? <ExpandLess dir="rtl" /> : <ExpandMore dir="rtl" />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <FormControl>
            <RadioGroup
              style={{ display: "flex", justifyContent: "flex-start" }}
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              {box.map((value) => {
                if (!isEnglish(value)) {
                  return (
                    <FormControlLabel
                      value={value}
                      control={<Radio />}
                      label={value}
                      key={value}
                      checked={itemChecked === value ? true : false}
                      onChange={() => {
                        handleTick({ name, value });
                      }}
                    />
                  );
                }
              })}
            </RadioGroup>
          </FormControl>
        </List>
      </Collapse>
    </div>
  );
};

export default SearchItem;
