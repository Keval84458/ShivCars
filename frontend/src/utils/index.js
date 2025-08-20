const { Box } = require("@chakra-ui/react");

export const PageWrapper = ({ children, ...rest }) => {
  return (
    <Box mt="4rem" {...rest} p={1}>
      {children}
    </Box>
  );
};
