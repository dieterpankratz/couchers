import { InputLabel } from "@material-ui/core";
import Button from "components/Button";
import TextField from "components/TextField";
import { useAuthContext } from "features/auth/AuthProvider";
import useAuthStyles from "features/auth/useAuthStyles";
import { SignupFlowRes } from "pb/auth_pb";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { service } from "service";
import { sanitizeName } from "utils/validation";

type SignupBasicInputs = {
  name: string;
  email: string;
};

interface BasicFormProps {
  callback: (state: SignupFlowRes.AsObject) => void;
}

export default function BasicForm({ callback }: BasicFormProps) {
  const { authActions } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const authClasses = useAuthStyles();

  const { register, handleSubmit } = useForm<SignupBasicInputs>({
    shouldUnregister: false,
  });

  const onSubmit = handleSubmit(async (data: SignupBasicInputs) => {
    setLoading(true);
    authActions.clearError();
    try {
      const sanitizedEmail = sanitizeName(data.email);
      const res = await service.auth.startSignup(data.name, sanitizedEmail);
      callback(res);
    } catch (err) {
      authActions.authError(err.message);
    }
    setLoading(false);
  });

  return (
    <>
      <form className={authClasses.form} onSubmit={onSubmit}>
        <InputLabel className={authClasses.formLabel} htmlFor="name">
          Name
        </InputLabel>
        <TextField
          id="name"
          fullWidth
          className={authClasses.formField}
          name="name"
          variant="standard"
          inputRef={register({
            required: true,
          })}
        />
        <InputLabel className={authClasses.formLabel} htmlFor="email">
          Email
        </InputLabel>
        <TextField
          id="email"
          fullWidth
          className={authClasses.formField}
          name="email"
          variant="standard"
          inputRef={register({
            required: true,
          })}
        />
        <Button
          classes={{
            label: authClasses.buttonText,
            root: authClasses.button,
          }}
          onClick={onSubmit}
          type="submit"
          loading={loading}
        >
          Continue
        </Button>
      </form>
    </>
  );
}
