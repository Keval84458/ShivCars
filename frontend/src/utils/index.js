const { Box, Input, Textarea, Select } = require("@chakra-ui/react");

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

export const ThemeTextArea = ({ ...rest }) => {
  return <Textarea {...rest} />;
};

export const ThemeSelect = ({ children, ...rest }) => {
  return <Select {...rest}>{children}</Select>;
};
