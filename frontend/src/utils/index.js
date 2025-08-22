const { Box, Input } = require("@chakra-ui/react");

export const PageWrapper = ({ children, ...rest }) => {
  return (
    <Box mt="4rem" {...rest}>
      {children}
    </Box>
  );
};

export const ThemeInput = ({ ...rest }) => {
  return <Input {...rest} />;
};
