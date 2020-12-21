import React from "react";
import { Form, Formik } from "formik";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useMutation } from "urql";

interface registerProps {}

const REG_MUT = `
mutation Register($username: String!, $password: String!) { 
	register(options: {username: $username, password: $password})	{ 
  	user { 
      id
      username
    }
    errors { 
    	field
      message
    }
  }
}
`;

export const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useMutation(REG_MUT);

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          return register(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="Your username"
              label="Username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="Your password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="orange"
            >
              Register!
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
