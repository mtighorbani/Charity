import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface BaseCollapseProps {
  items: {
    title: string;
    description: string;
  }[];
}
const BaseCollapse = ({ items }: BaseCollapseProps) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <List className="my-10 " sx={{ direction: "rtl", textAlign: "right" }}>
      {items.map((item, index) => (
        <div key={index}>
          <ListItem className="my-5" disablePadding>
            <ListItemButton onClick={() => handleToggle(index)}>
              <ListItemText className="text-right" primary={item.title} />
              {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>

          <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem sx={{ pl: 4 }}>
                <Typography variant="body2" sx={{ textAlign: "right" }}>
                  {item.description}
                </Typography>
              </ListItem>
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default BaseCollapse;
