import React from 'react';
import { Box, Button } from '@material-ui/core'

export default function HomeButtonGroup() {  
    return (
      <Box display="flex" position="relative" top="50%" left="40%">
          <Box mr={2}>
          <Button variant="outlined" >
              Enter
          </Button>
          </Box>
          <Box>
          <Button variant="outlined">
              Leave
          </Button>
          </Box>
      </Box>
    );
  }